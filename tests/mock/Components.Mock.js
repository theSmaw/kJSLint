var Components = {
    classes : {
        '@activestate.com/koPrefService;1' : {
        
            getService : function () {
                
                return {
                    prefs : {
                        
                        setStringPref : function () {}
                    }
                };
            }
        },
        '@mozilla.org/observer-service;1' : {
            
            getService : function () {
                
                return {
                    
                    addObserver : function () {},
                    
                    removeObserver : function () {}
                };
            }
        }
    },
    interfaces : {
        koIPrefService : {}
    }
};