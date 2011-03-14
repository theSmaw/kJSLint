TestCase('testKJSlint.Core', {
    
    setup : function() {},
    
    tearDown : function () {},
    
    'test KJSLINT.Core.init does not throw an exception' : function () {
        assertNoException(window.extensions.KJSLINT.Core.init);
    }
});