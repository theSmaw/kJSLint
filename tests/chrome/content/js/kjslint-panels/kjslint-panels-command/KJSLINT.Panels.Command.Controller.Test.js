/*global assertFunction, TestCase, window*/

TestCase('testKJSLINT.Panels.Command.Controller.show', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Page.Panels.Command.Controller.show is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Command.Controller.show);
    }
});