/*global alert, Components, ko, window */
alert('KJSLINT.Page.View');
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
 * @requires window.extensions.KJSLINT.KomodoAdaptor
 * @requires window.extensions.KJSLINT.Page.Controller
 */
window.extensions.KJSLINT.Page.View = (function () {
    
    /**
     * @constant
     */
    var CONSTANTS = {
        cursorNames : {
            defaultCursor       : 'default',
            waitingCursor       : 'wait'
        },
        events : {
            currentViewChanged  : 'current_view_changed',
            fileClosed          : 'view_closing',
            fileSaved           : 'file_changed',
            unload              : 'unload'
        }
    };
    
    /**
     * Handles the fileClosed event.
     *
     * @private
     * @requires window.extensions.KJSLINT.Page.Controller.fileClosed
     */
    function fileClosed(e) {
        window.extensions.KJSLINT.Page.Controller.fileClosed(e);
    }
    
    /**
     * Handles the currentViewChanged event.
     *
     * @private
     * @requires window.extensions.KJSLINT.Page.Controller.fileSwitched
     */
    function currentViewChanged(e) {
        window.extensions.KJSLINT.Page.Controller.fileSwitched(e);
    }
    
    /**
     * Handles the fileSaved event.
     *
     * @private
     * @requires window.extensions.KJSLINT.Page.Controller.fileSaved
     */
    function fileSaved() {
        window.extensions.KJSLINT.Page.Controller.fileSaved();
    }
    
    /**
     * Handles the unload event.
     *
     * @private
     * @requires window.extensions.KJSLINT.Page.Controller.applicationClosing
     */
    function unload() {
        window.extensions.KJSLINT.Page.Controller.applicationClosing();
    }
    
    /**
     * Observes events on the main page.
     *
     * @private
     */
    function observeEvents() {
        var that = this;
        
        window.addEventListener(CONSTANTS.events.currentViewChanged, function () {
            currentViewChanged.apply(that, arguments);
        }, false);

        window.addEventListener(CONSTANTS.events.fileClosed, function () {
            fileClosed.apply(that, arguments);
        }, false);
        
        window.addEventListener(CONSTANTS.events.unload, function () {
            unload.apply(that, arguments);
        }, false);
        
        // some events can't be observed using window.addEventListener
        window.extensions.KJSLINT.KomodoAdaptor.addEventObserver(CONSTANTS.events.fileSaved, fileSaved);
    }
    
    /**
     * Run when Komodo is opened.
     *
     * @public
     */
    function applicationLoaded() {
        alert('applicationLoaded');
        observeEvents();
    }
    
    /**
     * Moves the file and its focus to the specified line.
     *
     * @public
     * @param {number} lineNumber Line to jump to
     * @param {number} [columnNumber] Column to jump to
     * @requires window.extensions.KJSLINT.KomodoAdaptor.jumpToLine
     */
    function jumpToLine(lineNumber, columnNumber) {
        window.extensions.KJSLINT.KomodoAdaptor.jumpToLine(lineNumber, columnNumber);        
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
        handleEvent         : applicationLoaded, // this automatically gets called as a result of passing the window.extensions.KJSLINT.Page.View object to the eventlistener
        jumpToLine          : jumpToLine,
        setDefaultCursor    : setDefaultCursor,
        setWaitingCursor    : setWaitingCursor
    };
}());

window.addEventListener('load', window.extensions.KJSLINT.Page.View, false);