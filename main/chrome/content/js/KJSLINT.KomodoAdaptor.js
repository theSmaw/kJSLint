/*global Components, ko, window*/

window.extensions = window.extensions || {};
window.extensions.KJSLINT = window.extensions.KJSLINT || {};

/**
 * Adaptor to Komodo's API.
 *
 * @namespace
 * @requires Components
 * @requires ko
 */
window.extensions.KJSLINT.KomodoAdaptor = (function () {
    var CONSTANTS,
        eventObservers = [],
        komodoPreferencesService,
        komodoObserverService;
        
    /**
     * @constant
     */
    CONSTANTS = {
        activestateComponentClass : '@activestate.com/koPrefService;1',
        nameOfPreferencesObjectInKomodoXMLFile : 'kJSLintPrefs'
    };
    
    /**
     * Ensures a tab on Komodo's chrome is active and shown.
     *
     * @public
     * @param tabID {string} ID of the the tab to show
     * @requires ko.uilayout.ensureTabShown
     * @example window.extensions.KJSLINT.KomodoAdaptor.ensureTabShown('kjslint2_errors_tab');
     */
    function ensureTabShown(tabID) {
        ko.uilayout.ensureTabShown(tabID, true);
    }
    
    /**
     * Gets the Komodo Preferences service.
     * This is accessed at run time rather than initialization as not sure this service is available before window.onload.
     *
     * @private
     * @return {object} Komodo preferences service
     */
    function getKomodoPreferencesService() {
        if (!komodoPreferencesService) {
            komodoPreferencesService = Components.classes[CONSTANTS.activestateComponentClass].getService(Components.interfaces.koIPrefService).prefs;
        }
        
        return komodoPreferencesService;
    }
    
    /**
     * Gets the contents of the file currently being edited by the user.
     *
     * @public
     * @ko.views.manager.currentView.document.buffer
     * @returns {string} Contents of the file current being edited by the user
     */
    function getFileAsString() {
        var fileAsString = ko.views.manager.currentView.document.buffer;
        
        return fileAsString;
    }
    
    /**
     * Gets the path of the file currently being edited by the user.
     *
     * @public
     * @requires ko.views.manager.currentView.document.file.URI
     * @returns {string} Path of the file current being edited by the user
     */
    function getFilePath() {
        var filePath = ko.views.manager.currentView.document.file.URI.replace(/\"/g, '');
        
        return filePath;
    }
    
    /**
     * Extracts the saved preferences for the file being analysed from Komodo's XML
     *
     * @public
     * @requires Components.classes
     * @requires Components.interfaces
     * @returns {object} Preferences for the file, or an empty object if none are saved
     */
    function getPreferencesObject() {
        var preferencesService,
            kjslintPreferencesObject,
            kjslintPreferencesJSONString;
        
        try {
            preferencesService = getKomodoPreferencesService();
            kjslintPreferencesJSONString = preferencesService.getStringPref(CONSTANTS.nameOfPreferencesObjectInKomodoXMLFile);
            if (kjslintPreferencesJSONString) {
                kjslintPreferencesObject = JSON.parse(kjslintPreferencesJSONString);
            }
            else {
                kjslintPreferencesObject = {};
            }
        }
        catch (err) {
            kjslintPreferencesObject = {};
        }
        
        return kjslintPreferencesObject;
    }
    
    /**
     * Focusses the cursor on a line within the file.
     *
     * @public
     * @param {number} lineNumber Line to jump to
     * @param {number} [columnNumber] Column to jump to
     */
    function jumpToLine(lineNumber, columnNumber) {
        var positionPointer,
            currentView = ko.views.manager.currentView;
            
        if (lineNumber) {
            if (!columnNumber) {
                columnNumber = 0;
            }
            currentView.setFocus();        
            positionPointer = currentView.scimoz.positionAtColumn(lineNumber, columnNumber);
            currentView.scimoz.ensureVisibleEnforcePolicy(lineNumber);
            currentView.scimoz.gotoPos(positionPointer);
            currentView.scimoz.selectionStart = positionPointer;
            currentView.scimoz.selectionEnd = positionPointer;
        }
    }
    
    /**
     * Reveals the command panel.
     *
     * @public
     */
    function showCommandPanel() {
        ko.run.output.show(window, false);
    }
    
    /**
     * Updates the kJSLint preferences saved as part of Komodo's XML.
     *
     * @public
     * @param preferences {object} Preferences to save
     */
    function updatePreferencesObject(preferences) {
        var preferencesService = getKomodoPreferencesService();        
        
        preferencesService.setStringPref(CONSTANTS.nameOfPreferencesObjectInKomodoXMLFile, JSON.stringify(preferences));
    }
    
    /**
     * Gets the Komodo Observer service.
     * This is accessed at run time rather than initialization as not sure this service is available before window.onload.
     *
     * @private
     * @return {object} Komodo observer service
     */
    function getKomodoObserverService() {
        if (!komodoObserverService) {
            komodoObserverService = Components.classes["@mozilla.org/observer-service;1"].getService(Components.interfaces.nsIObserverService);
        }
        
        return komodoObserverService;
    }
    
    /**
     * 'Class' used to create observer of event.
     * Komodo doesn't allow addEventListener to work for this.
     *
     * @private
     * @param {string} eventType The name of the event being listened for
     * @name KomodoEventObserver
     */
    function KomodoEventObserver(eventType) {
        this.eventType = eventType;
        this.register();
    }
    
    /**
     * Handles the event.
     *
     * @private
     */
    KomodoEventObserver.prototype.observe = function () {};
    
    /**
     * Registers the listener for the event.
     * 
     * @private
     * @param {string} eventType The name of the event being listened for
     */
    KomodoEventObserver.prototype.register = function () {
        komodoObserverService.addObserver(this, this.eventType, false);
    };
  
    /**
     * @private
     */
    KomodoEventObserver.prototype.unregister = function () {
        komodoObserverService.removeObserver(this, this.eventType);
    };
     
    /**
     * Listens for events that cannot be observed using window.addEventListener.
     *
     * @public
     * @param {string} eventType Type of event to listen for
     * @param {function} callback Function to execute when the event occurs
     */
    function addEventObserver(eventType, callback) {
        var eventObserver;
        
        getKomodoObserverService();
        eventObserver = new KomodoEventObserver(eventType);
        
        /**
         * Allows the callback to be executed when the event occurs.
         *
         * @private
         * @augments eventObserver
         */
        eventObserver.observe = function () {
            callback.apply(window);
        };
        
        eventObservers.push(eventObserver);        
    }
    
    /**
     * Unbinds Komodo's eventObservers.
     *
     * @public
     */
    function removeEventObservers() {
        var i,
            numberOfEventObservers = eventObservers.length;
            
        for (i = 0; i < numberOfEventObservers; i += 1) {
            eventObservers[i].unregister();
        }
    }
    
    return {
        addEventObserver        : addEventObserver,
        ensureTabShown          : ensureTabShown,
        getFileAsString         : getFileAsString,
        getFilePath             : getFilePath,
        getPreferencesObject    : getPreferencesObject,
        jumpToLine              : jumpToLine,
        removeEventObservers    : removeEventObservers,
        showCommandPanel        : showCommandPanel,
        updatePreferencesObject : updatePreferencesObject
    };
}());