/*global window*/

window.extensions = window.extensions || {};
window.extensions.KJSLINT = window.extensions.KJSLINT || {};
window.extensions.KJSLINT.Panels = window.extensions.KJSLINT.Panels || {};
window.extensions.KJSLINT.Panels.Command = window.extensions.KJSLINT.Panels.Command || {};

/**
 * Controller for the command output window.
 *
 * @namespace
 * @requires window.extensions.KJSLINT.Panels.Command.View
 * @requires window.extensions.KJSLINT.Panels.Command.Tabs.Errors.Data
 */
window.extensions.KJSLINT.Panels.Command.Controller = (function () {
    var CONSTANTS,
        tabPanels = {};
        
    /**
     * @constant
     */
    CONSTANTS = {
        tabPanels : {
            errors : {
                tabId       : 'kjslint2_errors_tab',
                tabPanelId  : 'kjslint2_errors_tabpanel',
                panelName   : 'Errors'
            },
            report : {
                tabId       : 'kjslint2_functions_tab',
                tabPanelId  : 'kjslint2_functions_tabpanel',
                panelName   : 'Report'
            }
        }
    };
    
    /**
     * Creates controllers for tab panels within the Command Panel.
     *
     * @private
     * @param {string} panel Panel the controller is being created for
     * @returns {object} Controller for the tab panel
     */
    function createTabPanelController(panel) {
        var controller = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create(panel);

        return controller;
    }
    
    /**
     * Sets up tab panels that are children of the command panel.
     *
     * @private
     */
    function setUpTabPanels() {
        var panel;
        
        for (panel in CONSTANTS.tabPanels) {
            if (CONSTANTS.tabPanels.hasOwnProperty(panel)) {
                tabPanels[panel] = {
                    controller : createTabPanelController(CONSTANTS.tabPanels[panel])
                };
            }
        }
    }
    
    /**
     * Initializes the controller.
     *
     * @public
     */
    function init() {
        setUpTabPanels();
    }
    
    /**
     * Removes existing KJSLint output from the command panel.
     *
     * @private
     */
    function removeExistingResults() {
        var panel;
        
        for (panel in tabPanels) {
            if (tabPanels.hasOwnProperty(panel)) {
                tabPanels[panel].controller.empty();
            }
        }
    }
    
    /**
     * Ensures the command panel is shown.
     *
     * @private
     * @requires window.extensions.KJSLINT.Panels.Command.View.show
     */
    function showView() {
        window.extensions.KJSLINT.Panels.Command.View.show();
    }
    
    /**
     * Focuses on a tab panel.
     *
     * @private
     * @param {object} tabPanel Tab panel to show
     */
    function focusOnTabPanel(tabPanel) {
        tabPanel.controller.show();
    }
    
    /**
     * Populates a tab panel with data from the JSLint analysis.
     *
     * @private
     * @param {object} panel Tab panel to populate
     * @param {array} dataForPanel Data to populate the panel with
     */
    function populateTabPanel(tabPanel, dataForPanel) {
        tabPanel.controller.populate(dataForPanel);        
    }
    
    /**
     * Focuses on the error panel and fills it with errors.
     *
     * @private
     * @param {object} errors Errors object
     */
    function handleErrors(errors) {
        focusOnTabPanel(tabPanels.errors);
        populateTabPanel(tabPanels.errors, errors);
    }
    
    /**
     * Creates empty fields within the errors tab and focuses on the report panel when no errors are found.
     * @private
     * @requires window.extensions.KJSLINT.Panels.Command.Tabs.Errors.Data.getNoErrorsData
     */
    function handleNoErrors() {
        var noErrorsData = window.extensions.KJSLINT.Panels.Command.Tabs.Errors.Data.getNoErrorsData();
        
        focusOnTabPanel(tabPanels.report);
        populateTabPanel(tabPanels.errors, noErrorsData);
    }
    
    /**
     * Show the results of the JSLint analysis
     *
     * @public
     * @param {object} data Data structure containing JSLint's results
     */
    function show(data) {
        removeExistingResults();
        showView();
        
        populateTabPanel(tabPanels.report, data.report);
        
        if (!data.errors) {
            handleNoErrors();
        } else {
            handleErrors(data.errors);
        }
    }
    
    return {
        init    : init,
        show    : show
    };
}());