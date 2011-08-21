/*global assertEquals, assertFunction, assertNoException, assertTrue, ko, setupFunctions, TestCase, window*/

TestCase('testKJSLINT.Panels.Command.Controller.init', {
    
    setUp : function () {
        setupFunctions.createMarkupForCommandPanel();
        setupFunctions.createMarkupForOptionsPanel();
        ko.uilayout.ensureTabShown.called = undefined;
        ko.uilayout.ensureTabShown.calledWith = undefined;
    },
    
    tearDown : function () {
        document.getElementsByTagName('body')[0].innerHTML = '';
    },
    
    'test KJSLINT.Panels.Command.Controller.init is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Command.Controller.init);
    },
    
    'test KJSLINT.Panels.Command.Controller.init does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Command.Controller.init({
                tabId : 'kjslint2_errors_tab',
                tabPanelId : 'kjslint2_errors_tabpanel',
                panelName : 'Errors'
            });
        });
    }
});

TestCase('testKJSLINT.Panels.Command.Controller.show', {
    
    setUp : function () {
        setupFunctions.createMarkupForCommandPanel();
        setupFunctions.createMarkupForOptionsPanel();
        ko.uilayout.ensureTabShown.called = undefined;
        ko.uilayout.ensureTabShown.calledWith = undefined;
    },
    
    tearDown : function () {
        document.getElementsByTagName('body')[0].innerHTML = '';
    },
    
    'test KJSLINT.Panels.Command.Controller.show is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Command.Controller.show);
    },
    
    'test KJSLINT.Panels.Command.Controller.show does not throw an exception' : function () {
        window.extensions.KJSLINT.Panels.Command.Controller.init({
            tabId : 'kjslint2_errors_tab',
            tabPanelId : 'kjslint2_errors_tabpanel',
            panelName : 'Errors'
        });
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Command.Controller.show({
                errors : undefined,
                functions : []
            });
        });
    },
    
    'test KJSLINT.Panels.Command.Controller.show calls ko.uilayout.ensureTabShown' : function () {
        window.extensions.KJSLINT.Panels.Command.Controller.init();
        window.extensions.KJSLINT.Panels.Command.Controller.show({
            errors : undefined,
            functions : []
        });
        assertTrue(ko.uilayout.ensureTabShown.called);
    },
    
    'test KJSLINT.Panels.Command.Controller.show calls ko.uilayout.ensureTabShown with the correct tab id if errors are present' : function () {
        window.extensions.KJSLINT.Panels.Command.Controller.init();
        window.extensions.KJSLINT.Panels.Command.Controller.show({
            functions : [],
            errors : [1, 2, 3]
        });
        assertEquals('kjslint2_errors_tab', ko.uilayout.ensureTabShown.calledWith);
    },
    
    'test KJSLINT.Panels.Command.Controller.show applies no functions data to the functions tab if there are no functions in JS Lint\'s analysis' : function () {
        window.extensions.KJSLINT.Panels.Command.Controller.init();
        window.extensions.KJSLINT.Panels.Command.Controller.show({
            functions : [{
            closure : '-',
            exceptions : '-',
            global : '-',
            label : '-',
            line : '-',
            name : '-',
            outer : '-',
            parameters : '-',
            unused : '-',
            variables : '-'
        }],
            errors : [1, 2, 3]
        });
    }
});