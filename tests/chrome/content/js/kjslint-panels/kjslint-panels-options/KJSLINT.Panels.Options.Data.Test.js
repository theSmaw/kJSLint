/*global assertEquals, assertFalse, assertFunction, assertNoException, assertObject, TestCase, window*/

TestCase('testKJSlint.Panels.Options.Data.createPreferencesForFile', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Panels.Options.Data.createPreferencesForFile is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.Data.createPreferencesForFile);
    },
    
    'test KJSLINT.Panels.Options.Data.createPreferencesForFile does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Options.Data.createPreferencesForFile();
        });
    } 
});

TestCase('testKJSlint.Panels.Options.Data.getDefaultPreferences', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Panels.Options.Data.getDefaultPreferences is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.Data.getDefaultPreferences);
    },
    
    'test KJSLINT.Panels.Options.Data.getDefaultPreferences does not throw an exception' : function () {
        assertNoException(window.extensions.KJSLINT.Panels.Options.Data.getDefaultPreferences);
    },
    
    'test KJSLINT.Panels.Options.Data.getDefaultPreferences returns an object' : function () {
        var returnedObject = window.extensions.KJSLINT.Panels.Options.Data.getDefaultPreferences();
        
        assertObject(returnedObject);
    },
    
    'test KJSLINT.Panels.Options.Data.getDefaultPreferences returns an object containing the Good Parts' : function () {
        var returnedObject = window.extensions.KJSLINT.Panels.Options.Data.getDefaultPreferences();
        
        assertFalse(returnedObject.debug);
    }
});

TestCase('testKJSlint.Panels.Options.Data.getPreferencesForFile', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Panels.Options.Data.getPreferencesForFile is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.Data.getPreferencesForFile);
    },
    
    'test KJSLINT.Panels.Options.Data.getPreferencesForFile does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Options.Data.getPreferencesForFile();
        });
    },
    
    'test KJSLINT.Panels.Options.Data.getPreferencesForFile returns an object' : function () {
        assertObject(window.extensions.KJSLINT.Panels.Options.Data.getPreferencesForFile());
    } 
});

TestCase('testKJSlint.Panels.Options.Data.save', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Panels.Options.Data.save is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.Data.save);
    },
    
    'test KJSLINT.Panels.Options.Data.save does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Options.Data.save();
        });
    }
});

TestCase('testKJSlint.Panels.Options.Data.setPreferencesForFile', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Panels.Options.Data.setPreferencesForFile is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.Data.setPreferencesForFile);
    },
    
    'test KJSLINT.Panels.Options.Data.setPreferencesForFile does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Options.Data.setPreferencesForFile();
        });
    },
    
    'test KJSLINT.Panels.Options.Data.setPreferencesForFile updates preferences for a file' : function () {
        var preferencesObject;
        
        window.extensions.KJSLINT.Panels.Options.Data.setPreferencesForFile('temporaryFile', {
            valueToUpdate : 'updatedValue'
        });
        preferencesObject = window.extensions.KJSLINT.Panels.Options.Data.getPreferencesForFile('temporaryFile');
        assertEquals('updatedValue', preferencesObject.valueToUpdate);
    } 
});