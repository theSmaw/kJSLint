var ko = {
    run : {
        output : {
            
            show : function () {
                ko.run.output.show.called = true;
            }
        }
    },
    uilayout : {
        
        ensureTabShown : function (parameter) {
            ko.uilayout.ensureTabShown.called = true;
            ko.uilayout.ensureTabShown.calledWith = parameter;
        }
    },
    views : {
        manager : {
            currentView : {
                document : {
                    buffer : 'fileAccessed',
                    file : {
                        URI : ''
                    }
                }, 
                scimoz : {
                    
                    ensureVisibleEnforcePolicy : function (lineNumber) {
                        ko.views.manager.currentView.scimoz.ensureVisibleEnforcePolicy.called = true;
                        ko.views.manager.currentView.scimoz.ensureVisibleEnforcePolicy.calledWith = lineNumber;
                    },
                    
                    gotoPos : function () {
                        ko.views.manager.currentView.scimoz.gotoPos.called = true;
                    },
                    
                    positionAtColumn : function (lineNumber) {
                        ko.views.manager.currentView.scimoz.positionAtColumn.called = true;
                        ko.views.manager.currentView.scimoz.positionAtColumn.calledWith = lineNumber;
                    }
                },
                
                setFocus : function () {
                    ko.views.manager.currentView.setFocus.called = true;
                }
            }
        }
    }
};