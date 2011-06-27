/*global assertEquals, assertFalse, assertFunction, assertNoException, assertObject, assertString, assertTrue, setupFunctions, TestCase, window*/

TestCase('testKJSLINT.Panels.Options.Controller.fileSaved', {
    
    setUp : function () {
        setupFunctions.createMarkupForCommandPanel();
        setupFunctions.createMarkupForOptionsPanel();
    },
    
    tearDown : function () {
        document.getElementsByTagName('body')[0].innerHTML = '';
    },
    
    'test KJSLINT.Panels.Options.Controller.fileSaved is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.Controller.fileSaved);
    },
        
    'test KJSLINT.Panels.Options.Controller.fileSaved does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Options.Controller.fileSaved();
        });
    }
});

TestCase('testKJSLINT.Panels.Options.Controller.fileSwitched', {
    
    setUp : function () {
        setupFunctions.createMarkupForCommandPanel();
        setupFunctions.createMarkupForOptionsPanel();
    },
    
    tearDown : function () {
        document.getElementsByTagName('body')[0].innerHTML = '';
    },
    
    'test KJSLINT.Panels.Options.Controller.fileSwitched is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.Controller.fileSwitched);
    },
        
    'test KJSLINT.Panels.Options.Controller.fileSwitched does not throw an exception' : function () {
        window.extensions.KJSLINT.Panels.Options.View.handleEvent();
        window.extensions.KJSLINT.Panels.Options.Data.setPreferencesForFile('temp', {
            indent : 1
        });
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Options.Controller.fileSwitched();
        });
    }
});

TestCase('testKJSlint.Panels.Options.Controller.getCheckboxValues', {
    
    setUp : function () {
        setupFunctions.createMarkupForCommandPanel();
        setupFunctions.createMarkupForOptionsPanel();
    },
    
    tearDown : function () {
        document.getElementsByTagName('body')[0].innerHTML = '';
    },
    
    'test KJSLINT.Panels.Options.Controller.getCheckboxValues is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.Controller.getCheckboxValues);
    },
    
    'test KJSLINT.Panels.Options.Controller.getCheckboxValues does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Options.Controller.getCheckboxValues();
        });
    },
    
    'test KJSLINT.Panels.Options.Controller.getCheckboxValues returns an object' : function () {
        var returnedObject = window.extensions.KJSLINT.Panels.Options.Controller.getCheckboxValues();
        
        assertObject(returnedObject);
    },
    
    'test KJSLINT.Panels.Options.Controller.getCheckboxValues returns the values of the checkboxes' : function () {
        var returnedObject;
        
        returnedObject = window.extensions.KJSLINT.Panels.Options.Controller.getCheckboxValues();
        assertTrue(returnedObject.onevar);
    }
});

TestCase('testKJSlint.Panels.Options.Controller.getDefaultPreferences', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Panels.Options.Controller.getDefaultPreferences is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.Controller.getDefaultPreferences);
    },
    
    'test KJSLINT.Panels.Options.Controller.getDefaultPreferences does not throw an exception' : function () {
        assertNoException(window.extensions.KJSLINT.Panels.Options.Controller.getDefaultPreferences);
    },
    
    'test KJSLINT.Panels.Options.Controller.getDefaultPreferences returns an object' : function () {
        var returnedObject = window.extensions.KJSLINT.Panels.Options.Controller.getDefaultPreferences();
        
        assertObject(returnedObject);
    },
    
    'test KJSLINT.Panels.Options.Controller.getDefaultPreferences returns an object containing the Good Parts' : function () {
        var returnedObject = window.extensions.KJSLINT.Panels.Options.Controller.getDefaultPreferences();
        
        assertFalse(returnedObject.debug);
    }
});

TestCase('testKJSlint.Panels.Options.Controller.getInputValues', {
    
    setUp : function () {
        setupFunctions.createMarkupForCommandPanel();
        setupFunctions.createMarkupForOptionsPanel();
    },
    
    tearDown : function () {
        document.getElementsByTagName('body')[0].innerHTML = '';
    },
    
    'test KJSLINT.Panels.Options.Controller.getInputValues is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.Controller.getInputValues);
    },
    
    'test KJSLINT.Panels.Options.Controller.getInputValues does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Options.Controller.getInputValues();
        });
    },
    
    'test KJSLINT.Panels.Options.Controller.getInputValues returns an object' : function () {
        var returnedObject = window.extensions.KJSLINT.Panels.Options.Controller.getInputValues();
        
        assertObject(returnedObject);
    },
    
    'test KJSLINT.Panels.Options.Controller.getInputValues returns the values of the inputs' : function () {
        var returnedObject;
        
        returnedObject = window.extensions.KJSLINT.Panels.Options.Controller.getInputValues();
        assertEquals('predefined', returnedObject.predef);
    }
});

TestCase('testKJSlint.Panels.Options.Controller.getMode', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Panels.Options.Controller.getMode is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.Controller.getMode);
    },
    
    'test KJSLINT.Panels.Options.Controller.getMode does not throw an exception' : function () {
        assertNoException(window.extensions.KJSLINT.Panels.Options.Controller.getMode);
    },
    
    'test KJSLINT.Panels.Options.Controller.getMode returns a string' : function () {
        assertString(window.extensions.KJSLINT.Panels.Options.Controller.getMode());
    },
    
    'test KJSLINT.Panels.Options.Controller.getMode returns either "default" or "custom"' : function () {
        var returnedString = window.extensions.KJSLINT.Panels.Options.Controller.getMode();
        
        assertTrue((returnedString === 'default') || (returnedString === 'custom'));
    } 
});

TestCase('testKJSlint.Panels.Options.Controller.getPreferences', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Panels.Options.Controller.getPreferences is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.Controller.getPreferences);
    },
    
    'test KJSLINT.Panels.Options.Controller.getPreferences does not throw an exception' : function () {
        assertNoException(window.extensions.KJSLINT.Panels.Options.Controller.getPreferences);
    },
    
    'test KJSLINT.Panels.Options.Controller.getPreferences returns an object' : function () {
        var returnedObject = window.extensions.KJSLINT.Panels.Options.Controller.getPreferences();
        
        assertObject(returnedObject);
    }
});

TestCase('testKJSlint.Panels.Options.Controller.saveAllPreferences', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Panels.Options.Controller.saveAllPreferences is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.Controller.saveAllPreferences);
    },
    
    'test KJSLINT.Panels.Options.Controller.saveAllPreferences does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Options.Controller.saveAllPreferences();
        });
    }
});

TestCase('testKJSLINT.Panels.Options.Controller.show', {
    
    setup : function () {
        ko.uilayout.ensureTabShown.called = undefined;
        ko.uilayout.ensureTabShown.calledWith = undefined;
    },
    
    tearDown : function () {},
    
    'test KJSLINT.Panels.Options.Controller.show is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.Controller.show);
    },
    
    'test KJSLINT.Panels.Options.Controller.show does not throw an exception' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.Controller.show);
    },
    
    'test KJSLINT.Panels.Options.Controller.show calls ko.uilayout.ensureTabShown' : function () {
        window.extensions.KJSLINT.Panels.Options.Controller.show();
        assertTrue(ko.uilayout.ensureTabShown.called);
    },
    
    'test KJSLINT.Panels.Options.Controller.show calls ko.uilayout.ensureTabShown with the id of the options panel' : function () {
        window.extensions.KJSLINT.Panels.Options.Controller.show();
        assertEquals('kjslint2_options_tab', ko.uilayout.ensureTabShown.calledWith);
    }
});

TestCase('testKJSlint.Panels.Options.Controller.storeFilePreferencesToBeSaved', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Panels.Options.Controller.storeFilePreferencesToBeSaved is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.Controller.storeFilePreferencesToBeSaved);
    },
    
    'test KJSLINT.Panels.Options.Controller.storeFilePreferencesToBeSaved does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Options.Controller.storeFilePreferencesToBeSaved();
        });
    },
    
    'test KJSLINT.Panels.Options.Controller.storeFilePreferencesToBeSaved updates preferences for a file' : function () {
        var preferencesObject;
        
        window.extensions.KJSLINT.Panels.Options.Data.setPreferencesForFile('temporaryFile', {
            valueToUpdate : 'updatedValue'
        });
        window.extensions.KJSLINT.Panels.Options.Controller.storeFilePreferencesToBeSaved();
        preferencesObject = window.extensions.KJSLINT.Panels.Options.Data.getPreferencesForFile('temporaryFile');
        assertEquals('updatedValue', preferencesObject.valueToUpdate);
    } 
});

TestCase('testKJSlint.Panels.Options.Controller.toggleMode', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Panels.Options.Controller.toggleMode is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.Controller.toggleMode);
    },
    
    'test KJSLINT.Panels.Options.Controller.toggleMode does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Options.Controller.toggleMode();
        });
    }  
});

TestCase('testKJSlint.Panels.Options.Controller.toggleOptionIfCustomMode', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Panels.Options.Controller.toggleOptionIfCustomMode is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.Controller.toggleOptionIfCustomMode);
    },
    
    'test KJSLINT.Panels.Options.Controller.toggleOptionIfCustomMode does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Options.Controller.toggleOptionIfCustomMode({});
        });
    }  
});

TestCase('testKJSlint.Panels.Options.Controller.updatePreference', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Panels.Options.Controller.updatePreference is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.Controller.updatePreference);
    },
    
    'test KJSLINT.Panels.Options.Controller.updatePreference does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Options.Controller.updatePreference();
        });
    }
});