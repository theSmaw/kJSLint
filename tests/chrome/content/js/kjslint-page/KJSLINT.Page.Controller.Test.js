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

TestCase('testKJSLINT.Page.Controller.jumpToLine', {
    
    setup : function () {},
    
    tearDown : function () {},
    
    'test KJSLINT.Page.Controller.jumpToLine is a function' : function () {
        assertFunction(window.extensions.KJSLINT.Page.Controller.jumpToLine);
    },
    
    'test KJSLINT.Page.Controller.jumpToLine does not throw an exception' : function () {
        assertFunction(window.extensions.KJSLINT.Page.Controller.jumpToLine);
    }
});

TestCase('testKJSLINT.Page.Controller.run', {
    
    setUp : function () {
        setupFunctions.createMarkupForCommandPanel();
        setupFunctions.createMarkupForOptionsPanel();
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
    }
});