/*global assertArray, assertBoolean, assertFalse, assertFunction, assertNoException, assertObject, assertString, assertTrue, TestCase, window*/

TestCase('testKJSlint.JSLINT', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.JSLINT is a function' : function () {
        assertFunction(window.extensions.KJSLINT.JSLINT);
    },
    
    'test KJSLINT.JSLINT does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.JSLINT('a');
        });
    },
    
    'test KJSLINT.JSLINT returns a boolean' : function () {
        var JSLINTBoolean = window.extensions.KJSLINT.JSLINT('a');
        
        assertBoolean(JSLINTBoolean);
    },
    
    'test KJSLINT.JSLINT returns true if valid JS is passed' : function () {
        var JSLINTBoolean = window.extensions.KJSLINT.JSLINT('');
        
        assertTrue(JSLINTBoolean);
    },
    
    'test KJSLINT.JSLINT returns false if invalid JS is passed' : function () {
        var JSLINTBoolean = window.extensions.KJSLINT.JSLINT('a = b');
        
        assertFalse(JSLINTBoolean);
    },
    
    'test KJSLINT.JSLINT returns a data object if invalid JS is passed' : function () {
        window.extensions.KJSLINT.JSLINT('a = b');
        assertObject(window.extensions.KJSLINT.JSLINT.data());
    },
    
    'test KJSLINT.JSLINT returns a report string if invalid JS is passed' : function () {
        window.extensions.KJSLINT.JSLINT('a = b');
        assertString(window.extensions.KJSLINT.JSLINT.report());
    },
    
    'test KJSLINT.JSLINT returns a data object with errors array if invalid JS is passed' : function () {
        window.extensions.KJSLINT.JSLINT('a = b');
        assertArray(window.extensions.KJSLINT.JSLINT.data().errors);
    }
});