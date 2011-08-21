/*global assertArray, assertFunction, assertNoException, assertObject, TestCase, window*/

TestCase('testKJSlint.JSLINTAdaptor.runAndReturnResults', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.JSLINTAdaptor.runAndReturnResults is a function' : function () {
        assertFunction(window.extensions.KJSLINT.JSLINTAdaptor.runAndReturnResults);
    },
    
    'test KJSLINT.JSLINTAdaptor.runAndReturnResults does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.JSLINTAdaptor.runAndReturnResults('a');
        });
    },
    
    'test KJSLINT.JSLINTAdaptor.runAndReturnResults returns a data object if invalid JS is passed' : function () {
        assertObject(window.extensions.KJSLINT.JSLINTAdaptor.runAndReturnResults('a = b;'));
    },
    
    'test KJSLINT.JSLINTAdaptor.runAndReturnResults returns a data object with errors array if invalid JS is passed' : function () {
        assertArray(window.extensions.KJSLINT.JSLINTAdaptor.runAndReturnResults('2 = b;').errors);
    }
});