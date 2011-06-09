/*global assertArray, assertEquals, assertFunction, assertNoException, assertObject, ko, TestCase, window*/

TestCase('testKJSLINT.Panels.Command.Tabs.Report.Data.getOutputOrder', {
    
    setUp : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Panels.Command.Tabs.Report.Data.getOutputOrder is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Command.Tabs.Report.Data.getOutputOrder);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Report.Data.getOutputOrder does not throw an exception' : function () {
        assertNoException(window.extensions.KJSLINT.Panels.Command.Tabs.Report.Data.getOutputOrder);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Report.Data.getOutputOrder returns an array' : function () {
        var shouldBeAnArray = window.extensions.KJSLINT.Panels.Command.Tabs.Report.Data.getOutputOrder();
        
        assertArray(shouldBeAnArray);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Report.Data.getOutputOrder returns an array with expected data' : function () {
        var returnedArray = window.extensions.KJSLINT.Panels.Command.Tabs.Report.Data.getOutputOrder();
        
        assertEquals('line', returnedArray[0]);
    }
});