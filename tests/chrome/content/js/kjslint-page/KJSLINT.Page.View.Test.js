/*global assertEquals, assertFunction, assertNoException, assertTrue, TestCase, window*/


TestCase('testKJSLINT.Page.View.jumpToLocationInFile', {
    
    setUp : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Page.View.jumpToLocationInFile is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Page.View.jumpToLocationInFile);
    },
    
    'test KJSLINT.Page.View.jumpToLocationInFile does not throw an exception' : function () {
        assertFunction(window.extensions.KJSLINT.Page.View.jumpToLocationInFile);
    }
    
    // PROBABLY BENEFIT FROM MORE UNIT TESTS HERE
});

TestCase('testKJSLINT.Page.View.handleEvent', {
    
    setUp : function () {
        setupFunctions.createMarkupForMainMenu();
    },
    
    tearDown : function () {},
    
    'test KJSLINT.Page.View.handleEvent is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Page.View.handleEvent);
    },
    
    'test KJSLINT.Page.View.handleEvent does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.Page.View.handleEvent();
        });
    }
});

TestCase('testKJSLINT.Page.View.setDefaultCursor', {
    
    setUp : function () {
        window.setCursor.called = undefined;
        window.setCursor.calledWith = undefined;
    },
    
    tearDown : function () {
        window.setCursor.called = undefined;
        window.setCursor.calledWith = undefined;
    },
    
    'test KJSLINT.Page.View.setDefaultCursor is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Page.View.setDefaultCursor);
    },
    
    'test KJSLINT.Page.View.setDefaultCursor does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.Page.View.setDefaultCursor();
        });
    },
    
    'test KJSLINT.Page.View.setDefaultCursor calls window.setCursor' : function () {
        window.extensions.KJSLINT.Page.View.setDefaultCursor();
        assertTrue(window.setCursor.called);
    },
    
    'test KJSLINT.Page.View.setDefaultCursor calls window.setCursor with a parameter of "default"' : function () {
        window.extensions.KJSLINT.Page.View.setDefaultCursor();
        assertEquals('default', window.setCursor.calledWith);
    }
});

TestCase('testKJSLINT.Page.View.setWaitingCursor', {
    
    setUp : function () {
        window.setCursor.called = undefined;
        window.setCursor.calledWith = undefined;
    },
    
    tearDown : function () {
        window.setCursor.called = undefined;
        window.setCursor.calledWith = undefined;
    },
    
    'test KJSLINT.Page.Controller.setWaitingCursor is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Page.View.setWaitingCursor);
    },
    
    'test KJSLINT.Page.Controller.setWaitingCursor does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.Page.View.setWaitingCursor();
        });
    },
    
    'test KJSLINT.Page.Controller.setWaitingCursor calls window.setCursor' : function () {
        window.extensions.KJSLINT.Page.View.setWaitingCursor();
        assertTrue(window.setCursor.called);
    },
    
    'test KJSLINT.Page.Controller.setWaitingCursor calls window.setCursor with a parameter of "wait"' : function () {
        window.extensions.KJSLINT.Page.View.setWaitingCursor();
        assertEquals('wait', window.setCursor.calledWith);
    }
});