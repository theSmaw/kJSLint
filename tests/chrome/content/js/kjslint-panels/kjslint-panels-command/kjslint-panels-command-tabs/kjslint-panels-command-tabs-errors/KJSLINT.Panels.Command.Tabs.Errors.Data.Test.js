/*global assertArray, assertEquals, assertFunction, assertNoException, assertObject, ko, TestCase, window*/

TestCase('testKJSLINT.Panels.Command.Tabs.Errors.Data.getNoErrorsData', {
    
    setUp : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Panels.Command.Tabs.Errors.Data.getNoErrorsData is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Command.Tabs.Errors.Data.getNoErrorsData);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Errors.Data.getNoErrorsData does not throw an exception' : function () {
        assertNoException(window.extensions.KJSLINT.Panels.Command.Tabs.Errors.Data.getNoErrorsData);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Errors.Data.getNoErrorsData returns an array' : function () {
        var shouldBeAnArray = window.extensions.KJSLINT.Panels.Command.Tabs.Errors.Data.getNoErrorsData();
        
        assertArray(shouldBeAnArray);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Errors.Data.getNoErrorsData returns an array with expected data' : function () {
        var returnedArray = window.extensions.KJSLINT.Panels.Command.Tabs.Errors.Data.getNoErrorsData();
        
        assertEquals('-', returnedArray[0].line);
    }
});

TestCase('testKJSLINT.Panels.Command.Tabs.Errors.Data.getOutputOrder', {
    
    setUp : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Panels.Command.Tabs.Errors.Data.getOutputOrder is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Command.Tabs.Errors.Data.getOutputOrder);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Errors.Data.getOutputOrder does not throw an exception' : function () {
        assertNoException(window.extensions.KJSLINT.Panels.Command.Tabs.Errors.Data.getOutputOrder);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Errors.Data.getOutputOrder returns an array' : function () {
        var shouldBeAnArray = window.extensions.KJSLINT.Panels.Command.Tabs.Errors.Data.getOutputOrder();
        
        assertArray(shouldBeAnArray);
    },
    
    'test KJSLINT.Panels.Command.Tabs.Errors.Data.getOutputOrder returns an array with expected data' : function () {
        var returnedArray = window.extensions.KJSLINT.Panels.Command.Tabs.Errors.Data.getOutputOrder();
        
        assertEquals('line', returnedArray[0]);
    }
});