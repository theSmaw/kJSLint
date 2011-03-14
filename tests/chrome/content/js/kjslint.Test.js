TestCase('testKJSlint', {
    
    setup : function() {},
    
    tearDown : function () {},
    
    'test KJSLINT.run does not throw an exception' : function () {
        assertNoException(window.extensions.KJSLINT.run);
    }
});