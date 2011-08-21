/*global window*/

window.extensions = window.extensions || {};
window.extensions.KJSLINT = window.extensions.KJSLINT || {};
window.extensions.KJSLINT.Panels = window.extensions.KJSLINT.Panels || {};
window.extensions.KJSLINT.Panels.Command = window.extensions.KJSLINT.Panels.Command || {};

/**
 * View for the command output window.
 *
 * @namespace
 */
window.extensions.KJSLINT.Panels.Command.View = (function () {
    
    /**
     * Initializes the controller for the command panel.
     *
     * @private
     * @requires KJSLINT.Panels.Command.Controller.init
     */
    function initiateController() {
        window.extensions.KJSLINT.Panels.Command.Controller.init();
    }
    
    /**
     * Called when the application is loaded.
     *
     * @public
     */
    function applicationLoaded() {
        initiateController();
    }
    
    /**
     * Shows the command panel.
     *
     * @public
     * @requires window.extensions.KJSLINT.KomodoAdaptor.showCommandPanel
     */
    function show() {
        window.extensions.KJSLINT.KomodoAdaptor.showCommandPanel();
    }
    
    return {
        handleEvent : applicationLoaded, // this automatically gets called as a result of passing this module to the eventlistener below
        show        : show
    };
}());

window.addEventListener('load', window.extensions.KJSLINT.Panels.Command.View, false);