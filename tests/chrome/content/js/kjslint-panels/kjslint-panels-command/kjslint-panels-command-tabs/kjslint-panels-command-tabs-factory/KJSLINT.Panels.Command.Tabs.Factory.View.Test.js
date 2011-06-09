/*global assertEquals, assertFunction, assertNoException, assertNotEquals, assertNotNull, assertObject, assertTrue, ko, setupFunctions, TestCase, window*/

TestCase('testKJSLINT.Panels.Command.Tabs.Factory.View.create', {
    
    setUp : function () {
        setupFunctions.createMarkupForCommandPanel();
        setupFunctions.createMarkupForOptionsPanel();
        ko.uilayout.ensureTabShown.called = undefined;
        ko.uilayout.ensureTabShown.calledWith = undefined;
    },
    
    tearDown : function () {
        document.getElementsByTagName('body')[0].innerHTML = '';
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.View.create is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.View.create does not throw an exception' : function () {
        var controller = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            });
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create(controller);
        });
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.View.create returns an object' : function () {
        var controller = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            }),
            shouldBeAnObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create(controller);
        
        assertObject(shouldBeAnObject);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.View.create returns an object with an empty method' : function () {
        var controller = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            }),
            returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create(controller);
        
        assertFunction(returnedObject.empty);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.View.create returns an object with an empty method that removes treeitems from a panel' : function () {
        var controller = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            }),
            returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create(controller);
        
        returnedObject.empty();
        assertEquals(0, document.getElementById(returnedObject.tabPanelId).getElementsByTagName('treeitem').length);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.View.create returns an object with a definable ID' : function () {
        var controller = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            }),
            returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create(controller);
        
        assertEquals('kjslint2_errors_tab', returnedObject.tabId);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.View.create returns an object that gets references to a treechildren element' : function () {
        var controller = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            }),
            view = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create(controller);
        
        assertNotNull(view.elements.treechildren);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.View.create returns an object with a show method' : function () {
        var controller = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            }),
            returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create(controller);
        
        assertFunction(returnedObject.show);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.View.create returns an object with a show method that calls ko.uilayout.ensureTabShown' : function () {
        var controller = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            }),
            returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create(controller);
        
        returnedObject.show();
        assertTrue(ko.uilayout.ensureTabShown.called);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.View.create returns an object with a show method that calls ko.uilayout.ensureTabShown with the correct tab id if errors are present' : function () {
        var controller = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            }),
            returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create(controller);
        
        returnedObject.show();
        assertEquals('kjslint2_errors_tab', ko.uilayout.ensureTabShown.calledWith);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.View.create returns an object with a populate method' : function () {
        var controller = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            }),
            returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create(controller);
        
        assertFunction(returnedObject.populate);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.View.create returns an object with a populate method that does not throw an exception' : function () {
        var controller = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            }),
            returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create(controller);
        
        assertNoException(function () {
            returnedObject.populate([]);
        });
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.View.create returns an object with a populate method that appends the number of results to the tab title' : function () {
        var controller = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            }),
            returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create(controller);
        
        returnedObject.populate(['a', 'b', 'c']);
        assertNotEquals(-1, document.getElementById('kjslint2_errors_tab').getAttribute('label').indexOf('3'));
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.View.create returns an object with a populate method that populates the line number cell in the table' : function () {
        var controller = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_functions_tab',
                tabPanelId : 'kjslint2_functions_tabpanel',
                panelName : 'Report'
            }),
            returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create(controller),
            tabPanels = document.getElementById('output_tabpanels'),
            tabPanel = tabPanels.getElementsByTagName('tabpanel')[1],
            treerow,
            treecell;
        
        returnedObject.populate([{
            line : 1,
            name : 'Line 1',
            parameters : ['one', 'two', 'three'],
            closure : ['four', 'five', 'six'],
            variables : ['seven', 'eight', 'nine'],
            exceptions : ['ten', 'eleven', 'twelve'],
            unused : 'unused cell 1',
            outer : ['ten', 'eleven', 'twelve'],
            global : 'global cell 1',
            label : 'label cell 1'
        }]);
        treerow = tabPanel.getElementsByTagName('treerow')[0];
        treecell = treerow.getElementsByTagName('treecell')[0]; 
        assertEquals('1', treecell.getAttribute('label'));
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.View.create returns an object with a populate method that populates the name cell in the table for multiple errors' : function () {
        var controller = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_functions_tab',
                tabPanelId : 'kjslint2_functions_tabpanel',
                panelName : 'Report'
            }),
            returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create(controller),
            tabPanels = document.getElementById('output_tabpanels'),
            tabPanel = tabPanels.getElementsByTagName('tabpanel')[1];
        
        returnedObject.populate([{
            line : 1,
            name : 'Line 1',
            parameters : 'parameters cell 1',
            closure : 'closure cell 1',
            variables : 'variables cell 1',
            exceptions : 'exceptions cell 1',
            unused : 'unused cell 1',
            outer : 'outer cell 1',
            global : 'global cell 1',
            label : 'label cell 1'
        }, {
            line : 2, 
            name : 'Line 2',
            parameters : 'parameters cell 2',
            closure : 'closure cell 2',
            variables : 'variables cell 2',
            exceptions : 'exceptions cell 2',
            unused : 'unused cell 2',
            outer : 'outer cell 2',
            global : 'global cell 2',
            label : 'label cell 2'
        }]);
        assertEquals('Line 2', tabPanel.getElementsByTagName('treerow')[1].getElementsByTagName('treecell')[1].getAttribute('label'));
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.View.create returns an object with a populate method that populates the name cell in the table with tooltip text' : function () {
        var controller = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            }),
            returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create(controller),
            tabPanels = document.getElementById('output_tabpanels'),
            tabPanel = tabPanels.getElementsByTagName('tabpanel')[0],
            treerow,
            treecell;
        
        returnedObject.populate([{
            line : '10',
            character : 'character',
            reason : 'reason',
            evidence : 'evidence'
        }]);
        treerow = tabPanel.getElementsByTagName('treerow')[0];
        treecell = treerow.getElementsByTagName('treecell')[1];        
        assertEquals('character', treecell.getAttribute('tooltiptext'));
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.View.create returns an object with a populate method that populates the param cell in the table with correct text' : function () {
        var controller = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_functions_tab',
                tabPanelId : 'kjslint2_functions_tabpanel',
                panelName : 'Report'
            }),
            returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create(controller),
            tabPanels = document.getElementById('output_tabpanels'),
            tabPanel = tabPanels.getElementsByTagName('tabpanel')[1],
            treerow,
            treecell;
        
        returnedObject.populate([{
            line : 1,
            name : 'Line 1',
            parameters : ['one', 'two', 'three'],
            closure : ['four', 'five', 'six'],
            variables : ['seven', 'eight', 'nine'],
            exceptions : ['ten', 'eleven', 'twelve'],
            unused : 'unused cell 1',
            outer : ['ten', 'eleven', 'twelve'],
            global : 'global cell 1',
            label : 'label cell 1'
        }]);
        treerow = tabPanel.getElementsByTagName('treerow')[0];
        treecell = treerow.getElementsByTagName('treecell')[2];        
        assertEquals('one, two, three', treecell.getAttribute('tooltiptext'));
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.View.create returns an object with a populate method that populates the closure cell in the table with correct text' : function () {
        var controller = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_functions_tab',
                tabPanelId : 'kjslint2_functions_tabpanel',
                panelName : 'Report'
            }),
            returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create(controller),
            tabPanels = document.getElementById('output_tabpanels'),
            tabPanel = tabPanels.getElementsByTagName('tabpanel')[1],
            treerow,
            treecell;
        
        returnedObject.populate([{
            line : 1,
            name : 'Line 1',
            parameters : ['one', 'two', 'three'],
            closure : ['four', 'five', 'six'],
            variables : ['seven', 'eight', 'nine'],
            exceptions : ['ten', 'eleven', 'twelve'],
            unused : 'unused cell 1',
            outer : ['ten', 'eleven', 'twelve'],
            global : 'global cell 1',
            label : 'label cell 1'
        }]);
        treerow = tabPanel.getElementsByTagName('treerow')[0];
        treecell = treerow.getElementsByTagName('treecell')[3];        
        assertEquals('four, five, six', treecell.getAttribute('tooltiptext'));
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.View.create returns an object with a populate method that populates the var cell in the table with correct text' : function () {
        var controller = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_functions_tab',
                tabPanelId : 'kjslint2_functions_tabpanel',
                panelName : 'Report'
            }),
            returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create(controller),
            tabPanels = document.getElementById('output_tabpanels'),
            tabPanel = tabPanels.getElementsByTagName('tabpanel')[1],
            treerow,
            treecell;
        
        returnedObject.populate([{
            line : 1,
            name : 'Line 1',
            parameters : ['one', 'two', 'three'],
            closure : ['four', 'five', 'six'],
            variables : ['seven', 'eight', 'nine'],
            exceptions : ['ten', 'eleven', 'twelve'],
            unused : 'unused cell 1',
            outer : ['ten', 'eleven', 'twelve'],
            global : 'global cell 1',
            label : 'label cell 1'
        }]);
        treerow = tabPanel.getElementsByTagName('treerow')[0];
        treecell = treerow.getElementsByTagName('treecell')[4];        
        assertEquals('seven, eight, nine', treecell.getAttribute('tooltiptext'));
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.View.create returns an object with a populate method that populates the exceptions cell in the table with correct text' : function () {
        var controller = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_functions_tab',
                tabPanelId : 'kjslint2_functions_tabpanel',
                panelName : 'Report'
            }),
            returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create(controller),
            tabPanels = document.getElementById('output_tabpanels'),
            tabPanel = tabPanels.getElementsByTagName('tabpanel')[1],
            treerow,
            treecell;
        
        returnedObject.populate([{
            line : 1,
            name : 'Line 1',
            parameters : ['one', 'two', 'three'],
            closure : ['four', 'five', 'six'],
            variables : ['seven', 'eight', 'nine'],
            exceptions : ['ten', 'eleven', 'twelve'],
            unused : 'unused cell 1',
            outer : ['ten', 'eleven', 'twelve'],
            global : 'global cell 1',
            label : 'label cell 1'
        }]);
        treerow = tabPanel.getElementsByTagName('treerow')[0];
        treecell = treerow.getElementsByTagName('treecell')[5];        
        assertEquals('ten, eleven, twelve', treecell.getAttribute('tooltiptext'));
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.View.create returns an object with a populate method that populates the outer cell in the table with correct text' : function () {
        var controller = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_functions_tab',
                tabPanelId : 'kjslint2_functions_tabpanel',
                panelName : 'Report'
            }),
            returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.View.create(controller),
            tabPanels = document.getElementById('output_tabpanels'),
            tabPanel = tabPanels.getElementsByTagName('tabpanel')[1],
            treerow,
            treecell;
        
        returnedObject.populate([{
            line : 1,
            name : 'Line 1',
            parameters : ['one', 'two', 'three'],
            closure : ['four', 'five', 'six'],
            variables : ['seven', 'eight', 'nine'],
            exceptions : ['ten', 'eleven', 'twelve'],
            unused : 'unused cell 1',
            outer : ['ten', 'eleven', 'twelve'],
            global : 'global cell 1',
            label : 'label cell 1'
        }]);
        treerow = tabPanel.getElementsByTagName('treerow')[0];
        treecell = treerow.getElementsByTagName('treecell')[5];        
        assertEquals('ten, eleven, twelve', treecell.getAttribute('tooltiptext'));
    }
});