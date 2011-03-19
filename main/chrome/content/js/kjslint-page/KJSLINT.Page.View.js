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
 * Application level view
 *
 * @namespace
 * @requires KJSLINT.Options.Preferences
 */
window.extensions.KJSLINT.Page.View = (function () {
    
    /**
     * @constant
     */
    var CONSTANTS = {
        cursorNames : {
            defaultCursor : 'default',
            waitingCursor : 'wait'
        }
    };
    
    /**
     * @requires KJSLINT.Options.Preferences.load
     */
    function applicationLoaded() {
        
        // this should go and call initialize application method on controller
        
        
        prefsObject = window.extenaions.KJSLINT.Options.Preferences.load();
        
        // this should be called form the controller back to the view
        observeWindowEvents();
    }
    
    /**
     * Sets the cursor to normal pointer
     *
     * @public
     */
    function setDefaultCursor() {
        window.setCursor(CONSTANTS.cursorNames.defaultCursor);
    }
    
    /**
     * Sets the cursor to hourglass / clock
     *
     * @public
     */
    function setWaitingCursor() {
        window.setCursor(CONSTANTS.cursorNames.waitingCursor);
    }
    
    return {
        handleEvent         : applicationLoaded, // this automatically gets called as a result of passing the KJSLINT object to the eventlistener
        setDefaultCursor    : setDefaultCursor,
        setWaitingCursor    : setWaitingCursor
    };
}());

window.addEventListener('load', window.extensions.KJSLINT.Page.View, false);