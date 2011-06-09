/*global window*/

window.extensions = window.extensions || {};
window.extensions.KJSLINT = window.extensions.KJSLINT || {};
window.extensions.KJSLINT.Panels = window.extensions.KJSLINT.Panels || {};
window.extensions.KJSLINT.Panels.Command = window.extensions.KJSLINT.Panels.Command || {};
window.extensions.KJSLINT.Panels.Command.Tabs = window.extensions.KJSLINT.Panels.Command.Tabs || {};
window.extensions.KJSLINT.Panels.Command.Tabs.Report = window.extensions.KJSLINT.Panels.Command.Tabs.Report || {};

/*
 * Data for the Errors tab panel of the Command panel
 *
 * @namespace
 */
window.extensions.KJSLINT.Panels.Command.Tabs.Report.Data = (function () {
    
    /**
     * @constant
     */
    var CONSTANTS = {
        outputOrder : ['line', 'name', 'parameters', 'closure', 'variables', 'exceptions', 'unused', 'outer', 'global', 'label']
    };
    
    /**
     * Allows modules to access the order that the JSLint report be presented in.
     *
     * @public
     * @returns {object} Data object used to denote order that JSLint report data is presented with
     */
    function getOutputOrder() {
        
        return CONSTANTS.outputOrder;
    }
    
    return {
        getOutputOrder : getOutputOrder
    };
}());  