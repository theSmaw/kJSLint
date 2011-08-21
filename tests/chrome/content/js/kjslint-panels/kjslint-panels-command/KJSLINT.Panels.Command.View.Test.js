/*global assertFunction, assertNoException, ko, setupFunctions, TestCase, window*/

TestCase('testKJSLINT.Panels.Command.View.handleEvent', {
    
    setUp : function () {
        setupFunctions.createMarkupForCommandPanel();
        setupFunctions.createMarkupForOptionsPanel();
        ko.uilayout.ensureTabShown.called = undefined;
        ko.uilayout.ensureTabShown.calledWith = undefined;
    },
    
    tearDown : function () {
        document.getElementsByTagName('body')[0].innerHTML = '';
    },
    
    'test KJSLINT.Page.Panels.Command.View.handleEvent is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Command.View.handleEvent);
    },
    
    'test KJSLINT.Page.Panels.Command.View.handleEvent does not throw an exception' : function () {
        assertNoException(window.extensions.KJSLINT.Panels.Command.View.handleEvent);
    }
});

TestCase('testKJSLINT.Panels.Command.View.show', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Page.Panels.Command.View.show is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Command.View.show);
    },
    
    'test KJSLINT.Page.Panels.Command.View.show does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Command.View.show();
        });
    }
});