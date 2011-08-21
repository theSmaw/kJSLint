/*global window*/

window.extensions = window.extensions || {};
window.extensions.KJSLINT = window.extensions.KJSLINT || {};
window.extensions.KJSLINT.Panels = window.extensions.KJSLINT.Panels || {};

/**
 * Users can set preferences for individual files through the options panel.
 * These options are saved to Komodo's XML for each file, to be retrieved and re-set when the file is re-opened.
 *
 * @namespace
 * @see window.extensions.KJSLINT.Panels.Options.Controller
 * @see window.extensions.KJSLINT.Panels.Options.Data
 * @see window.extensions.KJSLINT.Panels.Options.Model
 */
window.extensions.KJSLINT.Panels.Options = window.extensions.KJSLINT.Panels.Options || {};

/**
 * Model for the Options panel
 *
 * @namespace
 * @requires window.extensions.KJSLINT.KomodoAdaptor
 */
window.extensions.KJSLINT.Panels.Options.Data = (function () {
    var CONSTANT,
        preferences; // object of user preferences
        
    /**
     * @constant
     */
    CONSTANT = {
        defaultPreferences : {
            adsafe      : false,        // if ADsafe should be enforced
            bitwise     : true,         // if bitwise operators should not be allowed
            browser     : false,        // if the standard browser globals should be predefined
            cap         : false,        // if upper case HTML should be allowed
            css         : false,        // if CSS workarounds should be tolerated
            debug       : false,        // if debugger statements should be allowed
            devel       : false,        // if logging should be allowed (console, alert, etc.)
            eqeqeq      : true,         // if === should be required
            es5         : false,        // if ES5 syntax should be allowed
            evil        : false,        // if eval should be allowed
            forin       : false,        // if for in statements must filter
            fragment    : false,        // if HTML fragments should be allowed
            immed       : true,         // if immediate invocations must be wrapped in parens
            indent      : 4,
            laxbreak    : false,        // if line breaks should not be checked
            maxerr      : 50,
            maxlen      : 250,
            newcap      : true,         // if constructor names must be capitalized
            nomen       : true,         // if names should be checked
            on          : false,        // if HTML event handlers should be allowed
            onevar      : true,         // if only one var statement per function should be allowed
            passfail    : false,        // if the scan should stop on first error
            plusplus    : true,         // if increment/decrement should not be allowed
            predef      : '', 
            regexp      : true,         // if the . should not be allowed in regexp literals
            rhino       : false,        // if the Rhino environment globals should be predefined
            undef       : true,         // if variables should be declared before used
            safe        : false,        // if use of some browser features should be restricted
            windows     : false,        // if MS Windows specific globals should be predefined
            strict      : true,         // require the "use strict"; pragma
            sub         : false,        // if all forms of subscript notation are tolerated
            white       : true,         // if strict whitespace rules apply
            widget      : false         // if the Yahoo Widgets globals should be predefined
        }
    };
    
    /**
     * Loads the KJSLint preferences.
     *
     * @private
     * @requires window.extensions.KJSLINT.KomodoAdaptor.getPreferencesObject
     */
    function loadPreferences() {
        preferences = window.extensions.KJSLINT.KomodoAdaptor.getPreferencesObject();
    }
    
    /**
     * Gets the default options that comprise the Good Parts.
     *
     * @public
     * @returns {object} Default options
     */
    function getDefaultPreferences() {
        
        return CONSTANT.defaultPreferences;
    }
    
    /**
     * Returns the preferences for a particular file.
     *
     * @public
     * @param filepath {string} Path of the file to get preferences for
     * @returns {object} Preferences for a particular file
     */
    function getPreferencesForFile(filepath) {
        if (!preferences) {
            loadPreferences();
        }
                    
        if (!preferences[filepath]) {
            preferences[filepath] = {};
        }
        
        return preferences[filepath];
    }
    
    /**
     * Sets the preferences for a particular file.
     *
     * @public
     * @param filepath {string} Path of the file to set preferences for
     * @param preferencesForFile {object} Preferences for the file
     */
    function setPreferencesForFile(filepath, preferencesForFile) {
        if (!preferences) {
            loadPreferences();
        }
        
        preferences[filepath] = preferencesForFile;
    }
    
    /**
     * Saves the preferences for the file.
     *
     * @public
     */
    function save() {
        window.extensions.KJSLINT.KomodoAdaptor.updatePreferencesObject(preferences);
    }
    
    /**
     * Converts the predef preference value from a comma separated string to an array.
     * filePreferences object is passed as a reference so no need for a return value
     *
     * @private
     * @param {object} filePreferences Preferences for a file
     */
    function convertPredefValueToArray(filePreferences) {
        filePreferences.predef = filePreferences.predef.split(' ').join('').split(',');
    }
    
    /**
     * Adds the checkbox preferences for a file to the preferences object for that file.
     * filePreferences object is passed as a reference so no need for a return value
     *
     * @private
     * @param {object} filePreferences Preferences for a file
     * @requires window.extensions.KJSLINT.Panels.Options.Controller.getCheckboxValues
     */
    function addCheckboxValuesToFilePreferences(filePreferences) {
        var checkbox,
            checkboxValues = window.extensions.KJSLINT.Panels.Options.Controller.getCheckboxValues();
            
        for (checkbox in checkboxValues) {
            if (checkboxValues.hasOwnProperty(checkbox)) {
                filePreferences[checkbox] = checkboxValues[checkbox];
            }
        }
    }
    
    /**
     * Adds the input preferences for a file to the preferences object for that file.
     * filePreferences object is passed as a reference so no need for a return value
     *
     * @private
     * @param {object} filePreferences Preferences for a file
     * @requires window.extensions.KJSLINT.Panels.Options.Controller.getInputValues
     */
    function addInputValuesToFilePreferences(filePreferences) {
        var input,
            inputValues = window.extensions.KJSLINT.Panels.Options.Controller.getInputValues();
            
        convertPredefValueToArray(inputValues);
        for (input in inputValues) {
            if (inputValues.hasOwnProperty(input)) {
                filePreferences[input] = inputValues[input];
            }
        }
    }
    
    /**
     * Adds the preferences for a new file to the preferences object for all files.
     *
     * @public
     * @param filepath {string} Path of the file to create preferences for
     */
    function createPreferencesForFile(filepath) {
        var filePreferences = {};
            
        addCheckboxValuesToFilePreferences(filePreferences);
        addInputValuesToFilePreferences(filePreferences);
        preferences[filepath] = filePreferences;
    }
    
    return {
        createPreferencesForFile    : createPreferencesForFile,
        getDefaultPreferences       : getDefaultPreferences,
        getPreferencesForFile       : getPreferencesForFile,
        setPreferencesForFile       : setPreferencesForFile,
        save                        : save
    };
}());

/*
    
    // when a tab is closed, if its options are all default, we don't want to save its preferences to file
    function removeUnchangedPrefs() {
        var keep = false, // set to false if we want to remove the preference
            property;

        for (property in prefsObject[currentPath]) {
            if (prefsObject[currentPath][property] !== options[property]) {
                if (property === 'predef') {
                    
                    // I'm sure there is a better way to do this
                    if (!prefsObject[currentPath][property] || (JSON.stringify(prefsObject[currentPath][property]) === '[""]')) {
                        
                        continue;
                    }
                }
                keep = true;
                
                break;
            }
        }
        if (!keep) {
            
            delete prefsObject[currentPath];
        }
    }
    
*/