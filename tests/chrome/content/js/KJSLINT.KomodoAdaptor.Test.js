TestCase('testKJSlint.KomodoAdaptor.getPreferencesObject', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.KomodoAdaptor.getPreferencesObject is a function' : function () {
        assertFunction(window.extensions.KJSLINT.KomodoAdaptor.getPreferencesObject);
    },
    
    'test KJSLINT.KomodoAdaptor.getPreferencesObject returns an object' : function () {
        var preferencesObject = window.extensions.KJSLINT.KomodoAdaptor.getPreferencesObject();
        
        assertObject(preferencesObject);
    }
});

TestCase('testKJSlint.KomodoAdaptor.updatePreferencesObject', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.KomodoAdaptor.updatePreferencesObject is a function' : function () {
        assertFunction(window.extensions.KJSLINT.KomodoAdaptor.updatePreferencesObject);
    }
});

TestCase('testKJSlint.KomodoAdaptor.getFilePath', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.KomodoAdaptor.getFilePath is a function' : function () {
        assertFunction(window.extensions.KJSLINT.KomodoAdaptor.getFilePath);
    }
});

TestCase('testKJSlint.KomodoAdaptor.ensureTabShown', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.KomodoAdaptor.ensureTabShown is a function' : function () {
        assertFunction(window.extensions.KJSLINT.KomodoAdaptor.ensureTabShown);
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
    
    'test KJSLINT.KomodoAdaptor.showCommandPanel calls ko.run.output.show' : function () {
        window.extensions.KJSLINT.KomodoAdaptor.showCommandPanel();
        assertTrue(ko.run.output.show.called);
    }
});