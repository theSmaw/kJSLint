/*global Components, ko, window*/

window.extensions = window.extensions || {};
window.extensions.KJSLINT = window.extensions.KJSLINT || {};

/**
 * Adaptor to Komodo's API.
 *
 * @namespace
 * @requires Components
 */
window.extensions.KJSLINT.KomodoAdaptor = (function () {
    var CONSTANTS,
        komodoPreferencesService;
        
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
     * Gets the path of the file currently being edited by the user.
     *
     * @public
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
    
    return {
        ensureTabShown          : ensureTabShown,
        getFilePath             : getFilePath,
        getPreferencesObject    : getPreferencesObject,
        showCommandPanel        : showCommandPanel,
        updatePreferencesObject : updatePreferencesObject
    };
}());