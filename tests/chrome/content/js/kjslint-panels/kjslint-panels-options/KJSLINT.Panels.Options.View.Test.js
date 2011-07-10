/*global assertEquals, assertFunction, assertNoException, assertNotEquals, assertObject, assertTrue, setupFunctions, TestCase, window*/

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
    
    setUp : function () {
        setupFunctions.createMarkupForCommandPanel();
        setupFunctions.createMarkupForOptionsPanel();
    },
    
    tearDown : function () {
        document.getElementsByTagName('body')[0].innerHTML = '';
    },
    
    'test KJSLINT.Panels.Options.View.putCheckboxesInCustomMode is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Panels.Options.View.putCheckboxesInCustomMode);
    },
    
    'test KJSLINT.Panels.Options.View.putCheckboxesInCustomMode does not throw an exception' : function () {        
        
        assertNoException(function () {
            window.extensions.KJSLINT.Panels.Options.View.putCheckboxesInCustomMode({});
        });
    },
    
    'test KJSLINT.Panels.Options.View.putCheckboxesInCustomMode reveals hidden checkboxes' : function () {        
        document.getElementById('fragment').parentNode.className = 'hidden';
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
        window.extensions.KJSLINT.Panels.Options.View.putCheckboxesInCustomMode();
        assertNotEquals('hidden', document.getElementById('fragment').parentNode.className);
    },
    
    'test KJSLINT.Panels.Options.View.putCheckboxesInCustomMode selects the custom mode radio' : function () {        
        document.getElementById('kjslint2_radiogroup_presets').selectedIndex = 0;
        window.extensions.KJSLINT.Panels.Options.View.handleEvent();
        window.extensions.KJSLINT.Panels.Options.Controller.fileSwitched({
            originalTarget : {
                document : {
                    file : {
                        URI : 'testPutInDefaultModeRadios'
                    }
                }
            }
        });
        window.extensions.KJSLINT.Panels.Options.View.putCheckboxesInCustomMode();
        assertEquals(1, document.getElementById('kjslint2_radiogroup_presets').selectedIndex);
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
    },
    
    'test KJSLINT.Panels.Options.View.putCheckboxesInDefaultMode selects the custom mode radio' : function () {        
        document.getElementById('kjslint2_radiogroup_presets').selectedIndex = 1;
        window.extensions.KJSLINT.Panels.Options.View.handleEvent();
        window.extensions.KJSLINT.Panels.Options.Controller.fileSwitched({
            originalTarget : {
                document : {
                    file : {
                        URI : 'testPutInDefaultModeRadios'
                    }
                }
            }
        });
        window.extensions.KJSLINT.Panels.Options.View.putCheckboxesInDefaultMode();
        assertEquals(0, document.getElementById('kjslint2_radiogroup_presets').selectedIndex);
    },
    
    'test KJSLINT.Panels.Options.View.putCheckboxesInDefaultMode updates the file preferences object to contain default preferences' : function () {        
        window.extensions.KJSLINT.Panels.Options.View.handleEvent();
        window.extensions.KJSLINT.Panels.Options.Controller.fileSwitched({
            originalTarget : {
                document : {
                    file : {
                        URI : 'testPutInDefaultModeUpdatesPreferences'
                    }
                }
            }
        });
        window.extensions.KJSLINT.Panels.Options.Controller.updatePreference('strict', false);
        window.extensions.KJSLINT.Panels.Options.View.putCheckboxesInDefaultMode();
        window.extensions.KJSLINT.Panels.Options.Controller.fileSwitched({
            originalTarget : {
                document : {
                    file : {
                        URI : 'testPutInDefaultModeUpdatesPreferences'
                    }
                }
            }
        });
        assertEquals(true, document.getElementById('strict').checked);
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