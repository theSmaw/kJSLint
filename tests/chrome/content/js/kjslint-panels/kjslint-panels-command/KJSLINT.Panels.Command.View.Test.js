/*global assertFunction, TestCase, window*/

TestCase('testKJSLINT.Panels.Command.View.show', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Page.Panels.Command.View.show is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Command.View.show);
    }
});