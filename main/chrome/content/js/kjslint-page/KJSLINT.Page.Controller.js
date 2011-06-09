/*global alert, Components, ko, window */

window.extensions = window.extensions || {};
window.extensions.KJSLINT = window.extensions.KJSLINT || {};

/**
 * Application level functionality.
 *
 * @namespace
 * @see window.extensions.KJSLINT.Page.Controller
 * @see window.extensions.KJSLINT.Page.View
 */
window.extensions.KJSLINT.Page = window.extensions.KJSLINT.Page || {};

/**
 * Application level controller
 *
 * @namespace
 * @requires window.extensions.KJSLINT.KomodoAdaptor
 * @requires window.extensions.KJSLINT.JSLINTAdaptor
 * @requires window.extensions.KJSLINT.Page.View
 * @requires window.extensions.KJSLINT.Panels.Command.Controller.show
 * @requires window.extensions.KJSLINT.Panels.Options.Controller
 */
window.extensions.KJSLINT.Page.Controller = (function () {
    
    /**
     * @constant
     */
    var CONSTANTS = {
        unsavedFileName : 'temp'
    };
    
    /**
     * Saves the preferences for all files.
     *
     * @private
     * @requires window.extensions.KJSLINT.Panels.Options.Controller.saveAllPreferences
     */
    function saveAllPreferences() {
        window.extensions.KJSLINT.Panels.Options.Controller.saveAllPreferences();
    }
    
    /**
     * Removes bound Komodo event observers.
     *
     * @private
     * @requires window.extensions.KJSLINT.KomodoAdaptor.removeEventObservers
     */
    function removeKomodoEventObservers() {
        window.extensions.KJSLINT.KomodoAdaptor.removeEventObservers();
    }
    
    /**
     * Handles the application unload event.
     *
     * @public
     */
    function applicationClosing() {
        saveAllPreferences();
        removeKomodoEventObservers();
    }
    
    /**
     * Returns the path of the current file being edited.
     *
     * @public
     * @requires window.extensions.KJSLINT.KomodoAdaptor.getFilePath
     * @returns {string} Path of the current file being edited
     */
    function getPathOfCurrentFile() {
        var currentPath;
        
        // if a new file is created, it doesn't have a path
        try {
            currentPath = window.extensions.KJSLINT.KomodoAdaptor.getFilePath();
        }
        catch (err) {
            currentPath = CONSTANTS.unsavedFileName;
        }
        
        return currentPath;
    }
    
    /**
     * Runs JSLint analysis on the current file, based on the options set in the panel.
     * Results are output to tabs in the command panel.
     * Currently fired from a DOM Level 0 event attached to #menu_jslint2_run element in kjslint2.xul.
     *
     * @public
     * @requires window.extensions.KJSLINT.JSLINTAdaptor.runAndReturnResults
     * @requires window.extensions.KJSLINT.KomodoAdaptor.getFileAsString
     * @requires window.extensions.KJSLINT.Panels.Options.Controller.getPreferences
     * @requires window.extensions.KJSLINT.Page.View.setDefaultCursor
     * @requires window.extensions.KJSLINT.Page.View.setWaitingCursor
     * @requires window.extensions.KJSLINT.Panels.Command.Controller.show
     */ 
    function run() {
        var data,
            fileAsString,
            preferences;
        
        window.extensions.KJSLINT.Page.View.setWaitingCursor();
        preferences = window.extensions.KJSLINT.Panels.Options.Controller.getPreferences();
        fileAsString = window.extensions.KJSLINT.KomodoAdaptor.getFileAsString();
        data = window.extensions.KJSLINT.JSLINTAdaptor.runAndReturnResults(fileAsString, preferences);
        window.extensions.KJSLINT.Panels.Command.Controller.show(data);
        window.extensions.KJSLINT.Page.View.setDefaultCursor();
    }
    
    // TODO: Enable keyboard access using the two functions commented out below
    // provide keyboard access to the errors results
    //function viewErrorsFocus() {
    //    if (!elErrorsTree) {
    //        elErrorsTree = document.getElementById(constErrorsTreeId);
    //    }
    //   elErrorsTree.focus();
    //}
    
    // provide keyboard access to the functions report
    //function viewFunctionsFocus() {
    //    if (!elFunctionsTree) {
    //        elFunctionsTree = document.getElementById(constFunctionsTreeId);
    //    }
    //    elFunctionsTree.focus();
    //}
    
    /**
     * Notifies the Options panel that a different file is now being edited.
     *
     * @private
     * @param {object} e Event object created by the tab changed event
     * @requires window.extensions.KJSLINT.Panels.Options.Controller.fileSwitched
     */
    function notifyOptionsPanelThatFileSwitched(e) {
        window.extensions.KJSLINT.Panels.Options.Controller.fileSwitched(e);
    }
    
    /**
     * Notifies the Options panel that the file has been saved.
     *
     * @private
     * @requires window.extensions.KJSLINT.Panels.Options.Controller.fileSaved
     */
    function notifyOptionsPanelThatFileSaved() {
        window.extensions.KJSLINT.Panels.Options.Controller.fileSaved();
    }
    
    /**
     * Handles the user saving a file.
     *
     * @public
     */
    function fileSaved() {
        notifyOptionsPanelThatFileSaved();
    }
    
    /**
     * Handles the user switching to a different file.
     *
     * @public
     * @param {object} e Event object created by the tab changed event
     */
    function fileSwitched(e) {
        notifyOptionsPanelThatFileSwitched(e);
    }
    
    /**
     * Moves the file and its focus to the specified line.
     *
     * @public
     * @param {number} lineNumber Line to jump to
     * @param {number} [columnNumber] Column to jump to
     * @requires window.extensions.KJSLINT.Page.View.jumpToLine
     */
    function jumpToLine(lineNumber, columnNumber) {
        window.extensions.KJSLINT.Page.View.jumpToLine(lineNumber, columnNumber);        
    }
    
    /**
     * Handles the user closing a file.
     *
     * @public
     * @requires window.extensions.KJSLINT.Panels.Options.Controller.storeFilePreferencesToBeSaved
     */
    function fileClosed() {
        window.extensions.KJSLINT.Panels.Options.Controller.storeFilePreferencesToBeSaved();
    }
    
    return {
        applicationClosing      : applicationClosing,
        fileClosed              : fileClosed,
        fileSaved               : fileSaved,
        fileSwitched            : fileSwitched,
        jumpToLine              : jumpToLine,
        getPathOfCurrentFile    : getPathOfCurrentFile,
        run                     : run
    };
}());