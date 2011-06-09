/*global window*/

window.extensions = window.extensions || {};
window.extensions.KJSLINT = window.extensions.KJSLINT || {};
window.extensions.KJSLINT.Panels = window.extensions.KJSLINT.Panels || {};
window.extensions.KJSLINT.Panels.Command = window.extensions.KJSLINT.Panels.Command || {};
window.extensions.KJSLINT.Panels.Command.Tabs = window.extensions.KJSLINT.Panels.Command.Tabs || {};

/**
 * Factories for command panels tab classes.
 *
 * @namespace
 * @see window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller
 * @see window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View
 */
window.extensions.KJSLINT.Panels.Command.Tabs.Factory = window.extensions.KJSLINT.Panels.Command.Tabs.Factory || {};

/**
 * Factory for command panel controller class.
 *
 * @namespace
 * @requires window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View
 */
window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller = (function () {
    
    /**
     * Command panel tab controller class.
     *
     * @constructor
     * @name CommandPanelTabController
     * @param {object} panelDetails Details to define the panel
     * @param {string} panelDetails.tabId ID of the element constructing the panel tab
     * @param {string} panelDetails.tabPanelId ID of the element constructing the panel
     * @param {string} panelDetails.panelName Name of the panel
     * @requires window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create
     */
    var CommandPanelTabController = function (panelDetails) {
        this.tabId = panelDetails.tabId;
        this.tabPanelId = panelDetails.tabPanelId;
        this.panelName = panelDetails.panelName;
        this.data = window.extensions.KJSLINT.Panels.Command.Tabs[this.panelName].Data;
        this.view = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create(this);
    };
    
    /**
     * Allows modules to access the order that the JSLint report be presented in.
     *
     * @public
     * @returns {object} Data object used to denote order that JSLint report data is presented with
     */
    CommandPanelTabController.prototype.getOutputOrder = function () {
        var outputOrder = this.data.getOutputOrder();
        
        return outputOrder;
    };
    
    /**
     * Remove existing content from the tab panel.
     *
     * @public
     */
    CommandPanelTabController.prototype.empty = function () {
        this.view.empty();
    };
    
    /**
     * Populates the tab panel with data returned from the JSLint analysis.
     *
     * @param {array} Data returned from the JSLint analysis
     * @public
     */
    CommandPanelTabController.prototype.populate = function (data) {
        this.view.populate(data);
    };
    
    /**
     * Shows and focuses the tab panel.
     *
     * @public
     */
    CommandPanelTabController.prototype.show = function () {
        this.view.show();
    };
    
    /**
     * Creates a controller class for a command panel tab.
     *
     * @public
     * @param {object} panelDetails Details to define the panel
     * @param {string} panelDetails.tabId ID of the element constructing the panel tab
     * @param {string} panelDetails.tabPanelId ID of the element constructing the panel
     * @param {string} panelDetails.panelName Name of the panel
     * @returns {object} Instance of command panel tab
     * @example window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create{tabId:'kjslint2_errors_tab',tabPanelId:'kjslint2_errors_tabpanel',panelName:'errors'};
     */
    function create(panelDetails) {
        
        return new CommandPanelTabController(panelDetails);
    }
    
    return {
        create  : create    
    };
}());