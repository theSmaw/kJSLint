/*global window*/

window.extensions = window.extensions || {};
window.extensions.KJSLINT = window.extensions.KJSLINT || {};
window.extensions.KJSLINT.Panels = window.extensions.KJSLINT.Panels || {};
window.extensions.KJSLINT.Panels.Command = window.extensions.KJSLINT.Panels.Command || {};
window.extensions.KJSLINT.Panels.Command.Tabs = window.extensions.KJSLINT.Panels.Command.Tabs || {};
window.extensions.KJSLINT.Panels.Command.Tabs.Factory = window.extensions.KJSLINT.Panels.Command.Tabs.Factory || {};

/**
 * Factory for command panel view class.
 *
 * @namespace
 * @requires window.extensions.KJSLINT.KomodoAdaptor
 * @requires window.extensions.KJSLINT.Page.Controller
 */
window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View = (function () {
    
    /**
     * Command panel tab view class.
     *
     * @constructor
     * @name CommandPanelTabView
     * @param {object} controller Controller for the view
     */
    function CommandPanelTabView(controller) {
        this.controller = controller;
        this.tabId = controller.tabId;
        this.tabPanelId = controller.tabPanelId;
        this.getElements();
        this.enableClickToJump();
    }
    
    /**
     * Get references to DOM elements on the view.
     *
     * @private
     */
    CommandPanelTabView.prototype.getElements = function () {
        var tab = document.getElementById(this.tabId),
            tabPanel = document.getElementById(this.tabPanelId);
        
        this.elements = {
            tab : tab,
            tabPanel : tabPanel,
            tree : tabPanel.getElementsByTagName('tree')[0],
            treechildren : tabPanel.getElementsByTagName('treechildren')[0] 
        };
    };
    
    /**
     * Remove existing content from the tab panel.
     *
     * @public
     */
    CommandPanelTabView.prototype.empty = function () {
        var i,
            treechildren = this.elements.treechildren,
            treeitems = treechildren.getElementsByTagName('treeitem'),
            numberOfTreeitems = treeitems.length;
                    
        
        // this loop needs to be iterated backwards
        for (i = numberOfTreeitems - 1; i > - 1; i -= 1) {
            treechildren.removeChild(treeitems[i]);
        }     
    };
    
    /**
     * Shows and focuses the tab panel.
     *
     * @public
     * @requires window.extensions.KJSLINT.KomodoAdaptor.ensureTabShown
     */
    CommandPanelTabView.prototype.show = function () {
        window.extensions.KJSLINT.KomodoAdaptor.ensureTabShown(this.tabId);
    };
    
    /**
     * Updates the number in the tab title to reflect the number of results.
     *
     * @private
     * @param {number} numberOfResults Number of results
     */
    CommandPanelTabView.prototype.updateNumberInTabTitle = function (numberOfResults) {        
        if (!this.orginalTabLabel) {
            this.originalTabLabel = this.elements.tab.getAttribute('label');
        }
        this.elements.tab.setAttribute('label', [this.originalTabLabel, ' ', numberOfResults].join(''));
    };
    
    /**
     * Creates a label for a cell of the panel's table showing the results of JSLint's analysis.
     *
     * @private
     * @param {string|array} cellData Data for a particular line returned from the JSLint analysis
     * @returns {string} Label for a cell of the panel's table showing the results of JSLint's analysis
     */
    CommandPanelTabView.prototype.createCellLabel = function (cellData) {
        var label;
        
        if (!cellData) {
            label = '-';
        } else if (cellData === 'name') {
            label = cellData.replace(/"/g, '');
        } else if (cellData === 'evidence') {
            label = cellData.replace(/^\s*/, "").replace(/\s*$/, "");
        } else if (Object.prototype.toString.call(cellData) === '[object Array]') {
            label = cellData.join(', ');
        } else {
            label = cellData;
        }
        
        return label;
    };
    
    /**
     * Populates a cell of the panel's table with the results of JSLint's analysis.
     *
     * @private
     * @param {string|array} cellData Data for a particular line returned from the JSLint analysis
     * @param {object} treeRow Element to which the cell should be appended
     */
    CommandPanelTabView.prototype.populateCell = function (cellData, treerow) {
        var cell = document.createElement('treecell'),
            label = this.createCellLabel(cellData);
        
        cell.setAttribute('label', label);
        cell.setAttribute('tooltiptext', label);
        treerow.appendChild(cell);
    };
    
    /**
     * Called when an output row is double-clicked or enter pressed on it.
     *
     * @private
     * @param {object} e Event object associated with the interaction with the table row
     */
    CommandPanelTabView.prototype.lineClicked = function (e) {
        var columnNumber,
            lineNumber,
            tree = this.elements.tree;
            
        if (!e.keycode || (e.keycode === 13)) {
            
            // I NEED TO FIGURE OUT HOW TO DO THIS WITHOUT THE ID OF THE COLUMN (e.g column number
            
            // I need to subtract 1
            lineNumber = tree.view.getCellText(tree.currentIndex, tree.columns.getNamedColumn('kjslint2_errors_tree_line')) - 1;
            columnNumber = tree.view.getCellText(tree.currentIndex, tree.columns.getNamedColumn('kjslint2_errors_tree_char')) - 1;
        
            window.extensions.KJSLINT.Page.Controller.jumpToLine(lineNumber, columnNumber);
        }
    };
    
    /**
     * Allows double clicking or pressing enter on a row to jump the file view to the correct line number in the file.
     *
     * @private
     * @requires window.extensions.KJSLINT.Page.Controller.jumpToLine
     */
    CommandPanelTabView.prototype.enableClickToJump = function () {
        var that = this;
        
        // I WILL NEED TO BIND THE CONTEXT ON THESE EVENT FUNCTION CALLS!
        
        this.elements.treechildren.addEventListener('dblclick', that.lineClicked, false);
        
        // keyboard events need to be on the tree rather than the treechildren element
        this.elements.tree.addEventListener('keyup', that.lineClicked, false);
    };
    
    /**
     * Populates a row of the panel's table with the results of JSLint's analysis.
     *
     * @private
     * @param {array} cellOrder Order which the table cells should be populated in
     * @param {object} lineData Data for a particular line returned from the JSLint analysis
     */
    CommandPanelTabView.prototype.populateRow = function (cellOrder, lineData) {
        var cellData,
            cellLabel,
            i,
            numberOfCells = cellOrder.length,
            treeitem = document.createElement('treeitem'),
            treerow = document.createElement('treerow');
        
        for (i = 0; i < numberOfCells; i += 1) {
            cellLabel = cellOrder[i];
            cellData = lineData[cellLabel];
            this.populateCell(cellData, treerow);
        }
        treeitem.appendChild(treerow);
        this.elements.treechildren.appendChild(treeitem);
    };    
    
    /**
     * Populates the panel's table with the results of JSLint's analysis.
     *
     * @private
     * @param {array} Data returned from the JSLint analysis
     */
    CommandPanelTabView.prototype.populateTable = function (data) {
        var cellOrder = this.controller.getOutputOrder(),
            i,
            numberOfRows = data.length;
            
        for (i = 0; i < numberOfRows; i += 1) {
            
            // this check prevents a bug
            if (data[i]) {
                this.populateRow(cellOrder, data[i]);
            }
        }
    };
    
    /**
     * Populates the tab panel with data returned from the JSLint analysis.
     *
     * @param {array} Data returned from the JSLint analysis
     * @public
     */
    CommandPanelTabView.prototype.populate = function (data) {
        var numberOfResults = data.length;
            
        this.updateNumberInTabTitle(numberOfResults);
        this.populateTable(data);
    };
    
    /**
     * Creates a view class for a command panel tab.
     *
     * @public
     * @param {object} controller Controller for the view
     */
    function create(controller) {
        
        return new CommandPanelTabView(controller);
    }
    
    return {
        create      : create
    };
}());