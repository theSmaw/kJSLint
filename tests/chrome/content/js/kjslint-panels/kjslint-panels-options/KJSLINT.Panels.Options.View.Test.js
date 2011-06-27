/*global assertEquals, assertFunction, assertNoException, assertObject, assertTrue, setupFunctions, TestCase, window*/

TestCase('testKJSlint.Panels.Options.View.getCheckboxValues', {
    
    setUp : function () {
        setupFunctions.createMarkupForCommandPanel();
        setupFunctions.createMarkupForOptionsPanel();
    },
    
    tearDown : function () {
        document.getElementsByTagName('body')[0].innerHTML = '';
    },
    
    'test KJSLINT.Panels.Options.View.getCheckboxValues is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.View.getCheckboxValues);
    },
    
    'test KJSLINT.Panels.Options.View.getCheckboxValues does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Options.View.getCheckboxValues();
        });
    },
    
    'test KJSLINT.Panels.Options.View.getCheckboxValues returns an object' : function () {
        var returnedObject = window.extensions.KJSLINT.Panels.Options.View.getCheckboxValues();
        
        assertObject(returnedObject);
    },
    
    'test KJSLINT.Panels.Options.View.getCheckboxValues returns the values of the checkboxes' : function () {
        var returnedObject;
        
        returnedObject = window.extensions.KJSLINT.Panels.Options.View.getCheckboxValues();
        assertTrue(returnedObject.onevar);
    }
});

TestCase('testKJSlint.Panels.Options.View.getInputValues', {
    
    setUp : function () {
        setupFunctions.createMarkupForCommandPanel();
        setupFunctions.createMarkupForOptionsPanel();
    },
    
    tearDown : function () {
        document.getElementsByTagName('body')[0].innerHTML = '';
    },
    
    'test KJSLINT.Panels.Options.View.getInputValues is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.View.getInputValues);
    },
    
    'test KJSLINT.Panels.Options.View.getInputValues does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Options.View.getInputValues();
        });
    },
    
    'test KJSLINT.Panels.Options.View.getInputValues returns an object' : function () {
        var returnedObject = window.extensions.KJSLINT.Panels.Options.View.getInputValues();
        
        assertObject(returnedObject);
    },
    
    'test KJSLINT.Panels.Options.View.getInputValues returns the values of the inputs' : function () {
        var returnedObject;
        
        returnedObject = window.extensions.KJSLINT.Panels.Options.View.getInputValues();
        assertEquals('predefined', returnedObject.predef);
    }
});

TestCase('testKJSlint.Panels.Options.View.handleEvent', {
    
    setUp : function () {
        setupFunctions.createMarkupForCommandPanel();
        setupFunctions.createMarkupForOptionsPanel();
    },
    
    tearDown : function () {
        document.getElementsByTagName('body')[0].innerHTML = '';
    },
    
    'test KJSLINT.Panels.Options.View.handleEvent is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.View.handleEvent);
    },
    
    'test KJSLINT.Panels.Options.View.handleEvent does not throw an exception' : function () {
        assertNoException(window.extensions.KJSLINT.Panels.Options.View.handleEvent);
    }
});

TestCase('testKJSlint.Panels.Options.View.putCheckboxesInCustomMode', {
    
    setUp : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Panels.Options.View.putCheckboxesInCustomMode is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.View.putCheckboxesInCustomMode);
    },
    
    'test KJSLINT.Panels.Options.View.putCheckboxesInCustomMode does not throw an exception' : function () {        
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Options.View.putCheckboxesInCustomMode({});
        });
    }
});

TestCase('testKJSlint.Panels.Options.View.putCheckboxesInDefaultMode', {
    
    setUp : function () {
        setupFunctions.createMarkupForCommandPanel();
        setupFunctions.createMarkupForOptionsPanel();
    },
    
    tearDown : function () {
        document.getElementsByTagName('body')[0].innerHTML = '';
    },
    
    'test KJSLINT.Panels.Options.View.putCheckboxesInDefaultMode is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.View.putCheckboxesInDefaultMode);
    },
    
    'test KJSLINT.Panels.Options.View.putCheckboxesInDefaultMode does not throw an exception' : function () {        
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Options.View.putCheckboxesInDefaultMode({});
        });
    },
    
    'test KJSLINT.Panels.Options.View.putCheckboxesInDefaultMode checks the checkboxes correctly' : function () {        
        document.getElementById('eqeqeq').checked = 'false';
        window.extensions.KJSLINT.Panels.Options.View.handleEvent();
        window.extensions.KJSLINT.Panels.Options.Controller.fileSwitched({
            originalTarget : {
                document : {
                    file : {
                        URI : 'testPutInDefaultModeFile'
                    }
                }
            }
        });
        window.extensions.KJSLINT.Panels.Options.View.putCheckboxesInDefaultMode();
        assertTrue(document.getElementById('eqeqeq').checked);
    }
});

TestCase('testKJSlint.Panels.Options.View.updateViewWithCurrentPreferences', {
    
    setUp : function () {
        setupFunctions.createMarkupForCommandPanel();
        setupFunctions.createMarkupForOptionsPanel();
    },
    
    tearDown : function () {
        document.getElementsByTagName('body')[0].innerHTML = '';
    },
    
    'test KJSLINT.Panels.Options.View.updateWithCurrentPreferences is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.View.updateWithCurrentPreferences);
    },
    
    'test KJSLINT.Panels.Options.View.updateWithCurrentPreferences does not throw an exception' : function () {
        window.extensions.KJSLINT.Panels.Options.View.handleEvent();
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Options.View.updateWithCurrentPreferences({});
        });
    }
});

TestCase('testKJSlint.Panels.Options.View.toggleCheckboxState', {
    
    setUp : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Panels.Options.View.toggleCheckboxState is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.View.toggleCheckboxState);
    },
    
    'test KJSLINT.Panels.Options.View.toggleCheckboxState does not throw an exception' : function () {        
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Options.View.toggleCheckboxState({});
        });
    }
});

TestCase('testKJSlint.Panels.Options.View.show', {
    
    setUp : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Panels.Options.View.show is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.View.show);
    },
    
    'test KJSLINT.Panels.Options.View.show does not throw an exception' : function () {        
        assertNoException(window.extensions.KJSLINT.Panels.Options.View.show);
    }
});