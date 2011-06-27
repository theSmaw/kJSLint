/*global assertFunction, assertNoException, assertString, setupFunctions, TestCase, window*/

TestCase('testKJSLINT.Page.Controller.applicationClosing', {
    
    setup : function () {
        setupFunctions.createMarkupForOptionsPanel();
    },
    
    tearDown : function () {
        document.getElementsByTagName('body')[0].innerHTML = '';
    },
    
    'test KJSLINT.Page.Controller.applicationClosing is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Page.Controller.applicationClosing);
    },
    
    'test KJSLINT.Page.Controller.applicationClosing does not throw an exception' : function () {
        assertNoException(window.extensions.KJSLINT.Page.Controller.applicationClosing);
    }
});

TestCase('testKJSLINT.Page.Controller.fileClosed', {
    
    setUp : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Page.Controller.fileClosed is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Page.Controller.fileClosed);
    },
    
    'test KJSLINT.Page.Controller.fileClosed does not throw an exception' : function () {
        
        assertNoException(function () {
            window.extensions.KJSLINT.Page.Controller.fileClosed();
        });
    }
});

TestCase('testKJSLINT.Page.Controller.fileSaved', {
    
    setUp : function () {
        setupFunctions.createMarkupForCommandPanel();
        setupFunctions.createMarkupForOptionsPanel();
    },
    
    tearDown : function () {
        document.getElementsByTagName('body')[0].innerHTML = '';
    },
    
    'test KJSLINT.Page.Controller.fileSaved is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Page.Controller.fileSaved);
    },
    
    'test KJSLINT.Page.Controller.fileSaved does not throw an exception' : function () {
        window.extensions.KJSLINT.Panels.Options.View.handleEvent();
        window.extensions.KJSLINT.Panels.Options.Controller.fileSwitched();
        
        assertNoException(function () {
            window.extensions.KJSLINT.Page.Controller.fileSaved();
        });
    }
});

TestCase('testKJSLINT.Page.Controller.fileSwitched', {
    
    setUp : function () {
        setupFunctions.createMarkupForCommandPanel();
        setupFunctions.createMarkupForOptionsPanel();
    },
    
    tearDown : function () {
        document.getElementsByTagName('body')[0].innerHTML = '';
    },
    
    'test KJSLINT.Page.Controller.fileSwitched is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Page.Controller.fileSwitched);
    },
    
    'test KJSLINT.Page.Controller.fileSwitched does not throw an exception' : function () {
        window.extensions.KJSLINT.Panels.Options.View.handleEvent();
        
        assertNoException(function () {
            window.extensions.KJSLINT.Page.Controller.fileSwitched();
        });
    }
});

TestCase('testKJSLINT.Page.Controller.getPathOfCurrentFile', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Page.Controller.getPathOfCurrentFile is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Page.Controller.getPathOfCurrentFile);
    },
    
    'test KJSLINT.Page.Controller.getPathOfCurrentFile does not throw an exception' : function () {
        assertNoException(window.extensions.KJSLINT.Page.Controller.getPathOfCurrentFile);
    },
    
    'test KJSLINT.Page.Controller.getPathOfCurrentFile returns a string' : function () {
        assertString(window.extensions.KJSLINT.Page.Controller.getPathOfCurrentFile());
    }
});

TestCase('testKJSLINT.Page.Controller.jumpToLocationInFile', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Page.Controller.jumpToLocationInFile is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Page.Controller.jumpToLocationInFile);
    },
    
    'test KJSLINT.Page.Controller.jumpToLocationInFile does not throw an exception' : function () {
        assertFunction(window.extensions.KJSLINT.Page.Controller.jumpToLocationInFile);
    }
});

TestCase('testKJSLINT.Page.Controller.menuOptionsClicked', {
    
    setup : function () {
        ko.uilayout.ensureTabShown.called = undefined;
        ko.uilayout.ensureTabShown.calledWith = undefined;
    },
    
    tearDown : function () {},
    
    'test KJSLINT.Page.Controller.menuOptionsClicked is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Page.Controller.menuOptionsClicked);
    },
    
    'test KJSLINT.Page.Controller.menuOptionsClicked does not throw an exception' : function () {
        assertFunction(window.extensions.KJSLINT.Page.Controller.menuOptionsClicked);
    },
    
    'test KJSLINT.Page.Controller.menuOptionsClicked calls ko.uilayout.ensureTabShown' : function () {
        window.extensions.KJSLINT.Page.Controller.menuOptionsClicked();
        assertTrue(ko.uilayout.ensureTabShown.called);
    },
    
    'test KJSLINT.Page.Controller.menuOptionsClicked calls ko.uilayout.ensureTabShown with the id of the options panel' : function () {
        window.extensions.KJSLINT.Page.Controller.menuOptionsClicked();
        assertEquals('kjslint2_options_tab', ko.uilayout.ensureTabShown.calledWith);
    }
});

TestCase('testKJSLINT.Page.Controller.run', {
    
    setUp : function () {
        setupFunctions.createMarkupForCommandPanel();
        setupFunctions.createMarkupForOptionsPanel();
        ko.run.output.show.called = undefined;
    },
    
    tearDown : function () {
        document.getElementsByTagName('body')[0].innerHTML = '';
    },
    
    'test KJSLINT.Page.Controller.run is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Page.Controller.run);
    },
    
    'test KJSLINT.Page.Controller.run does not throw an exception' : function () {
        window.extensions.KJSLINT.Panels.Command.Controller.init();
        
        assertNoException(function () {
            window.extensions.KJSLINT.Page.Controller.run();
        });
    },
    
    'test KJSLINTS.Page.Controller.run calls ko.run.output.show' : function () {
        window.extensions.KJSLINT.Page.Controller.run();
        assertTrue(ko.run.output.show.called);
    }
});