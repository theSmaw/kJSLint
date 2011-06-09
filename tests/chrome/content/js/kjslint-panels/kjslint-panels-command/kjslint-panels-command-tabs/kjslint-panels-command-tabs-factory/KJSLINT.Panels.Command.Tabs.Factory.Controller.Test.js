/*global assertArray, assertEquals, assertFunction, assertNoException, assertObject, ko, setupFunctions, TestCase, window*/

TestCase('testKJSLINT.Panels.Command.Tabs.Factory.Controller.create', {
    
    setUp : function () {
        setupFunctions.createMarkupForCommandPanel();
        setupFunctions.createMarkupForOptionsPanel();
        ko.uilayout.ensureTabShown.called = undefined;
        ko.uilayout.ensureTabShown.calledWith = undefined;
    },
    
    tearDown : function () {
        document.getElementsByTagName('body')[0].innerHTML = '';
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.Controller.create is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.Controller.create does not throw an exception' : function () {
    
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            });
        });
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.Controller.create returns an object' : function () {
        var shouldBeAnObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            });
        
        assertObject(shouldBeAnObject);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.Controller.create returns an object with an empty method' : function () {
        var returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            });
        
        assertFunction(returnedObject.empty);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.Controller.create returns an object with a view property with an empty method' : function () {
        var returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            });
        
        assertFunction(returnedObject.view.empty);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.Controller.create returns an object with a view property with an empty method that does not throw an exception' : function () {
        var returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            });
        
        assertNoException(function () {
            returnedObject.view.empty();
        });
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.Controller.create returns an object with a show method' : function () {
        var returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            });
        
        assertFunction(returnedObject.show);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.Controller.create returns an object with a panelName property' : function () {
        var returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            });
        
        assertEquals('Errors', returnedObject.panelName);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.Controller.create returns an object with a populate method' : function () {
        var returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            });
        
        assertFunction(returnedObject.populate);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.Controller.create returns an object with a populate method that does not throw an exception' : function () {
        var returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            });
        
        assertNoException(function () {
            returnedObject.populate([]);
        });
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.Controller.create returns an object with a getOutputOrder method' : function () {
        var returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            });
        
        assertFunction(returnedObject.getOutputOrder);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.Controller.create returns an object with a getOutputOrder method that does not throw an exception' : function () {
        var returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            });
        
        assertNoException(function () {
            returnedObject.getOutputOrder();
        });
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.Controller.create returns an object with a getOutputOrder method that returns an array' : function () {
        var returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            });
        
        assertArray(returnedObject.getOutputOrder());
    },
    
    'test KJSLINT.Panels.Command.Tabs.Factory.Controller.create returns an object with a getOutputOrder method that returns an array with expected data' : function () {
        var returnedObject = window.extensions.KJSLINT.Panels.Command.Tabs.Factory.Controller.create({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            });
        
        assertEquals('line', returnedObject.getOutputOrder()[0]);
    }
});