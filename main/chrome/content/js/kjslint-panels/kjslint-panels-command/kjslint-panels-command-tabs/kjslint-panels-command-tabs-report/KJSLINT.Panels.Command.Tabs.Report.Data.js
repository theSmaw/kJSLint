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
    var CONSTANTS = {
        noFunctionsData : [{
            closure     : '-',
            exceptions  : '-',
            global      : '-',
            label       : '-',
            line        : '-',
            name        : '-',
            outer       : '-',
            parameters  : '-',
            unused      : '-',
            variables   : '-'
        }], // set as an array to match data format returned by JSLint
        outputOrder : ['line', 'name', 'parameters', 'closure', 'variables', 'exceptions', 'unused', 'outer', 'global', 'label']
    };
    
    /**
     * Allows modules to access data object used to populate functions tab panel when there are no functions.
     *
     * @public
     * @returns {object} Data object used to populate functions tab panel when there are no functions
     */
    function getNoFunctionsData() {
        
        return CONSTANTS.noFunctionsData;
    }
    
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
        getNoFunctionsData  : getNoFunctionsData,
        getOutputOrder      : getOutputOrder
    };
}());  