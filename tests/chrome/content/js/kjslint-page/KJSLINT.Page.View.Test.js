/*global assertEquals, assertFunction, assertTrue, TestCase, window*/

TestCase('testKJSLINT.Page.View.setWaitingCursor', {
    
    setup : function () {
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
    
    'test KJSLINT.Page.Controller.setWaitingCursor calls window.setCursor' : function () {
        window.extensions.KJSLINT.Page.View.setWaitingCursor();
        assertTrue(window.setCursor.called);
    },
    
    'test KJSLINT.Page.Controller.setWaitingCursor calls window.setCursor with a parameter of "wait"' : function () {
        window.extensions.KJSLINT.Page.View.setWaitingCursor();
        assertEquals('wait', window.setCursor.calledWith);
    }
});

TestCase('testKJSLINT.Page.View.setDefaultCursor', {
    
    setup : function () {
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
    
    'test KJSLINT.Page.View.setDefaultCursor calls window.setCursor' : function () {
        window.extensions.KJSLINT.Page.View.setDefaultCursor();
        assertTrue(window.setCursor.called);
    },
    
    'test KJSLINT.Page.View.setDefaultCursor calls window.setCursor with a parameter of "default"' : function () {
        window.extensions.KJSLINT.Page.View.setDefaultCursor();
        assertEquals('default', window.setCursor.calledWith);
    }
});

TestCase('testKJSLINT.Page.View.handleEvent', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Page.View.handleEvent is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Page.View.handleEvent);
    }
});