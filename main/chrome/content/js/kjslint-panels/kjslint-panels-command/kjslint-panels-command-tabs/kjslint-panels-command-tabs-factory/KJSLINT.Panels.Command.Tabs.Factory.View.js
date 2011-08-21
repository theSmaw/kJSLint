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
     * @param {array} data Data returned from the JSLint analysis
     */
    CommandPanelTabView.prototype.updateNumberInTabTitle = function (data) {
        var numberOfResults = data.length,
            numberOfResultsText;
        
        if (typeof(this.originalTabLabel) === 'undefined') {
            this.originalTabLabel = this.elements.tab.getAttribute('label');
        }
        if (data[0].line === '-') {
            numberOfResultsText = '0';
        }  
        
        // data[numberOfResults - 1] doesn't exist when JS Lint stops and cannot continueted as a result item by JSLint
        else if (data[numberOfResults - 1] === null) {
                 
            // reduce number of results number by 2 because Stopping cannot continue text is counted as a result, as is the null value
            numberOfResults = numberOfResults - 2;
            numberOfResultsText = numberOfResults + '+';
        }
        
        else {
            numberOfResultsText = numberOfResults;
        }
        
        this.elements.tab.setAttribute('label', [this.originalTabLabel, ' ', numberOfResultsText].join(''));
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
     * Retrives the location of the line to jump to from where it is stored on the treeitem.
     *
     * @private
     * @param {object} tree The tab panel tree
     * @returns {object} line and character of the item to jump to
     */
    CommandPanelTabView.prototype.retrieveLocationToJumpTo = function (tree) {
        var clickedTreeitem = tree.view.getItemAtIndex(tree.currentIndex),
            locationToJumpTo = {
                line : clickedTreeitem.getAttribute('line'),
                character : clickedTreeitem.getAttribute('character')
            };
            
        return locationToJumpTo;
    }
    
    /**
     * Called when an output row is double-clicked or enter pressed on it.
     *
     * @private
     * @param {object} e Event object associated with the interaction with the table row
     */
    CommandPanelTabView.prototype.lineClicked = function (e) {
        var locationToJumpTo,
            tree = this.elements.tree;
            
        if (!e.keycode || (e.keycode === 13)) {
            locationToJumpTo = this.retrieveLocationToJumpTo(tree);
            window.extensions.KJSLINT.Page.Controller.jumpToLocationInFile(locationToJumpTo);
        }
    };
    
    /**
     * Allows double clicking or pressing enter on a row to jump the file view to the correct line number in the file.
     *
     * @private
     * @requires window.extensions.KJSLINT.Page.Controller.jumpToLocationInFile
     */
    CommandPanelTabView.prototype.enableClickToJump = function () {
        var that = this;
               
        this.elements.treechildren.addEventListener('dblclick', function () {
            that.lineClicked.apply(that, arguments);
        }, false);
        
        // keyboard events need to be on the tree rather than the treechildren element
        this.elements.tree.addEventListener('keyup', function () {
            that.lineClicked.apply(that, arguments);
        }, false);
    };
    
    /**
     * Stores the line and character numbers as attributes of the treeitem.
     * Previously, char and row values were queried from their table cells.
     * This can only be done using the ID of the table column, so this isn't possible within a generic class for tab views
     *
     * @private
     * @param {object} treeitem The tree item to store the data on
     * @param {object} locationData Report data for the line in the code
     * @param {number} locationData.line Line number of the report item
     * @param {number} [locationData.character] Character number of the location of the error
     */
    CommandPanelTabView.prototype.makeErrorLocationAccessible = function (treeitem, locationData) {
        treeitem.setAttribute('line', locationData.line);
        treeitem.setAttribute('character', locationData.character);
    }
    
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
        this.makeErrorLocationAccessible(treeitem, lineData);        
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
     * @param {array} data Data returned from the JSLint analysis
     * @public
     */
    CommandPanelTabView.prototype.populate = function (data) {        
        this.updateNumberInTabTitle(data);
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