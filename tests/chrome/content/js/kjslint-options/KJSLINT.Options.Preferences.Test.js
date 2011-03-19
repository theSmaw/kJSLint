/*global TestCase*/

TestCase('testKJSlint.Options.Preferences.load', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Options.Preferences.load is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Options.Preferences.load);
    },
    
    'test KJSLINT.Options.Preferences.load returns an object' : function () {
        var preferencesObject = window.extensions.KJSLINT.Options.Preferences.load();
        
        assertObject(preferencesObject);
    }  
});

TestCase('testKJSlint.Options.Preferences.save', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Options.Preferences.save is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Options.Preferences.save);
    }
});