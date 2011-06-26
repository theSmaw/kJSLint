/*global assertEquals, assertFunction, assertObject, assertNoException, assertTrue, ko, TestCase, window*/

TestCase('testKJSlint.KomodoAdaptor.addEventObserver', {
    
    setup : function () {
        ko.uilayout.addEventObserver.called = undefined;
    },
    
    tearDown : function () {},
    
    'test KJSLINT.KomodoAdaptor.addEventObserver is a function' : function () {
        assertFunction(window.extensions.KJSLINT.KomodoAdaptor.addEventObserver);
    },
    
    'test KJSLINT.KomodoAdaptor.addEventObserver does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.KomodoAdaptor.addEventObserver();
        });
    }
});

TestCase('testKJSlint.KomodoAdaptor.ensureTabShown', {
    
    setup : function () {
        ko.uilayout.ensureTabShown.called = undefined;
    },
    
    tearDown : function () {},
    
    'test KJSLINT.KomodoAdaptor.ensureTabShown is a function' : function () {
        assertFunction(window.extensions.KJSLINT.KomodoAdaptor.ensureTabShown);
    },
    
    'test KJSLINT.KomodoAdaptor.ensureTabShown does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.KomodoAdaptor.ensureTabShown();
        });
    },
    
    'test KJSLINT.KomodoAdaptor.ensureTabShown calls ko.uilayout.ensureTabShown' : function () {
        window.extensions.KJSLINT.KomodoAdaptor.ensureTabShown();
        assertTrue(ko.uilayout.ensureTabShown.called);
    }
});

TestCase('testKJSlint.KomodoAdaptor.jumpToLocationInFile', {
    
    setup : function () {
        ko.views.manager.currentView.scimoz.ensureVisibleEnforcePolicy.called = undefined;
        ko.views.manager.currentView.scimoz.ensureVisibleEnforcePolicy.calledWith = undefined;
        ko.views.manager.currentView.scimoz.gotoPos.called = undefined;
        ko.views.manager.currentView.scimoz.positionAtColumn.called = undefined;
        ko.views.manager.currentView.scimoz.positionAtColumn.calledWith = undefined;
        ko.views.manager.currentView.setFocus.called = undefined;
    },
    
    tearDown : function () {
        ko.views.manager.currentView.scimoz.ensureVisibleEnforcePolicy.called = undefined;
        ko.views.manager.currentView.scimoz.ensureVisibleEnforcePolicy.calledWith = undefined;
        ko.views.manager.currentView.scimoz.gotoPos.called = undefined;
        ko.views.manager.currentView.scimoz.positionAtColumn.called = undefined;
        ko.views.manager.currentView.scimoz.positionAtColumn.calledWith = undefined;
        ko.views.manager.currentView.setFocus.called = undefined;
    },
    
    'test KJSLINT.KomodoAdaptor.jumpToLocationInFile is a function' : function () {
        assertFunction(window.extensions.KJSLINT.KomodoAdaptor.jumpToLocationInFile);
    },
    
    'test KJSLINT.KomodoAdaptor.jumpToLocationInFile does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.KomodoAdaptor.jumpToLocationInFile({
                character : 2,
                line : 1
            });
        });
    },
    
    'test KJSLINT.KomodoAdaptor.jumpToLocationInFile calls ko.views.manager.currentView.setFocus' : function () {
        window.extensions.KJSLINT.KomodoAdaptor.jumpToLocationInFile({
            character : 2,
            line : 1
        });
        assertTrue(ko.views.manager.currentView.setFocus.called);
    },
    
    'test KJSLINT.KomodoAdaptor.jumpToLocationInFile calls ko.views.manager.currentView.scimoz.positionAtColumn' : function () {
        window.extensions.KJSLINT.KomodoAdaptor.jumpToLocationInFile({
            character : 2,
            line : 1
        });
        assertTrue(ko.views.manager.currentView.scimoz.positionAtColumn.called);
    },
    
    'test KJSLINT.KomodoAdaptor.jumpToLocationInFile calls ko.views.manager.currentView.scimoz.positionAtColumn with the correct line number' : function () {
        window.extensions.KJSLINT.KomodoAdaptor.jumpToLocationInFile({
            character : 2,
            line : 5
        });
        assertEquals(4, ko.views.manager.currentView.scimoz.positionAtColumn.calledWith);
    },
    
    'test KJSLINT.KomodoAdaptor.jumpToLocationInFile calls ko.views.manager.currentView.scimoz.gotoPos' : function () {
        window.extensions.KJSLINT.KomodoAdaptor.jumpToLocationInFile({
            character : 2,
            line : 1
        });
        assertTrue(ko.views.manager.currentView.scimoz.gotoPos.called);
    },
    
    'test KJSLINT.KomodoAdaptor.jumpToLocationInFile calls ko.views.manager.currentView.scimoz.ensureVisibleEnforcePolicy' : function () {
        window.extensions.KJSLINT.KomodoAdaptor.jumpToLocationInFile({
            character : 2,
            line : 1
        });
        assertTrue(ko.views.manager.currentView.scimoz.ensureVisibleEnforcePolicy.called);
    },
    
    'test KJSLINT.KomodoAdaptor.jumpToLocationInFile calls ko.views.manager.currentView.scimoz.ensureVisibleEnforcePolicy with the correct line number' : function () {
        window.extensions.KJSLINT.KomodoAdaptor.jumpToLocationInFile({
            character : 2,
            line : 6
        });
        assertEquals(5, ko.views.manager.currentView.scimoz.ensureVisibleEnforcePolicy.calledWith);
    }
});

TestCase('testKJSlint.KomodoAdaptor.getFileAsString', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.KomodoAdaptor.getFileAsString is a function' : function () {
        assertFunction(window.extensions.KJSLINT.KomodoAdaptor.getFileAsString);
    },
    
    'test KJSLINT.KomodoAdaptor.getFileAsString does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.KomodoAdaptor.getFileAsString();
        });
    },
    
    'test KJSLINT.KomodoAdaptor.getFileAsString accesses ko.views.manager.currentView.document.buffer' : function () {
        var bufferAccessed = window.extensions.KJSLINT.KomodoAdaptor.getFileAsString();
        
        assertEquals('fileAccessed', bufferAccessed);
    }
});

TestCase('testKJSlint.KomodoAdaptor.getFilePath', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.KomodoAdaptor.getFilePath is a function' : function () {
        assertFunction(window.extensions.KJSLINT.KomodoAdaptor.getFilePath);
    },
    
    'test KJSLINT.KomodoAdaptor.getFilePath does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.KomodoAdaptor.getFilePath();
        });
    }
});

TestCase('testKJSlint.KomodoAdaptor.getPreferencesObject', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.KomodoAdaptor.getPreferencesObject is a function' : function () {
        assertFunction(window.extensions.KJSLINT.KomodoAdaptor.getPreferencesObject);
    },
    
    'test KJSLINT.KomodoAdaptor.getPreferencesObject does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.KomodoAdaptor.getPreferencesObject();
        });
    },
    
    'test KJSLINT.KomodoAdaptor.getPreferencesObject returns an object' : function () {
        var preferencesObject = window.extensions.KJSLINT.KomodoAdaptor.getPreferencesObject();
        
        assertObject(preferencesObject);
    }
});

TestCase('testKJSlint.KomodoAdaptor.removeEventObservers', {
    
    setup : function () {
        ko.run.output.show.called = undefined;
    },
    
    tearDown : function () {
        ko.run.output.show.called = undefined;
    },
    
    'test KJSLINT.KomodoAdaptor.removeEventObservers is a function' : function () {
        assertFunction(window.extensions.KJSLINT.KomodoAdaptor.removeEventObservers);
    },
    
    'test KJSLINT.KomodoAdaptor.removeEventObservers does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.KomodoAdaptor.removeEventObservers();
        });
    }
});

TestCase('testKJSlint.KomodoAdaptor.showCommandPanel', {
    
    setup : function () {
        ko.run.output.show.called = undefined;
    },
    
    tearDown : function () {
        ko.run.output.show.called = undefined;
    },
    
    'test KJSLINT.KomodoAdaptor.showCommandPanel is a function' : function () {
        assertFunction(window.extensions.KJSLINT.KomodoAdaptor.showCommandPanel);
    },
    
    'test KJSLINT.KomodoAdaptor.showCommandPanel does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.KomodoAdaptor.showCommandPanel();
        });
    },
    
    'test KJSLINT.KomodoAdaptor.showCommandPanel calls ko.run.output.show' : function () {
        window.extensions.KJSLINT.KomodoAdaptor.showCommandPanel();
        assertTrue(ko.run.output.show.called);
    }
});

TestCase('testKJSlint.KomodoAdaptor.updatePreferencesObject', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.KomodoAdaptor.updatePreferencesObject is a function' : function () {
        assertFunction(window.extensions.KJSLINT.KomodoAdaptor.updatePreferencesObject);
    },
    
    'test KJSLINT.KomodoAdaptor.updatePreferencesObject does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.KomodoAdaptor.updatePreferencesObject();
        });
    }
});