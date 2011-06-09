/*global window*/

window.extensions = window.extensions || {};
window.extensions.KJSLINT = window.extensions.KJSLINT || {};
window.extensions.KJSLINT.Panels = window.extensions.KJSLINT.Panels || {};
window.extensions.KJSLINT.Panels.Command = window.extensions.KJSLINT.Panels.Command || {};

/**
 * Functionality for the tabs within the Command panel.
 *
 * @namespace
 * @see window.extensions.KJSLINT.Panels.Command.Tabs.Errors
 * @see window.extensions.KJSLINT.Panels.Command.Tabs.Factory
 * @see window.extensions.KJSLINT.Panels.Command.Tabs.Report
 */
window.extensions.KJSLINT.Panels.Command.Tabs = window.extensions.KJSLINT.Panels.Command.Tabs || {};

/**
 * Functionality for the Error tab within the Command panel.
 *
 * @namespace
 * @see window.extensions.KJSLINT.Panels.Command.Tabs.Errors.Data
 */
window.extensions.KJSLINT.Panels.Command.Tabs.Errors = window.extensions.KJSLINT.Panels.Command.Tabs.Errors || {};

/*
 * Data for the Errors tab panel of the Command panel
 *
 * @namespace
 */
window.extensions.KJSLINT.Panels.Command.Tabs.Errors.Data = (function () {
    
    /**
     * @constant
     */
    var CONSTANTS = {
        noErrorsData : [{
            line        : '-',
            character   : '-',
            reason      : 'No errors found',
            evidence    : '-'
        }], // set as an array to match data format returned by JSLint
        outputOrder : ['line', 'character', 'reason', 'evidence']
    };
    
    /**
     * Allows modules to access data object used to populate errors tab panel when there are no errors.
     *
     * @public
     * @returns {object} Data object used to populate errors tab panel when there are no errors
     */
    function getNoErrorsData() {
        
        return CONSTANTS.noErrorsData;
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
        getNoErrorsData : getNoErrorsData,
        getOutputOrder  : getOutputOrder
    };
}());  