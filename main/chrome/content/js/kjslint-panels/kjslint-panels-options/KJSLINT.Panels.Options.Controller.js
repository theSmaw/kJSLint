/*global window*/

window.extensions = window.extensions || {};
window.extensions.KJSLINT = window.extensions.KJSLINT || {};
window.extensions.KJSLINT.Panels = window.extensions.KJSLINT.Panels || {};
window.extensions.KJSLINT.Panels.Options = window.extensions.KJSLINT.Panels.Options || {};

/**
 * Controller for the Options panel
 *
 * @namespace
 * @requires window.extensions.KJSLINT.Panels.Options.Data
 * @requires window.extensions.KJSLINT.Panels.Options.View
 */
window.extensions.KJSLINT.Panels.Options.Controller = (function () {
    var CONSTANTS,
        currentFilePath,
        currentFilePreferences,
        mode = 'default';   // default or custom
        
    /**
     * @constant
     */
    CONSTANTS = {
        modeIndex : {                                   // selected index of mode radio buttons when in particular mode
            customMode                  : 1,
            defaultMode                 : 0
        },
        modes : {
            customMode                  : 'custom',     // if user defined options differ from default options   
            defaultMode                 : 'default'     // if user defined options are the same as default options   
        },
        temporaryFilepathForUnsavedFile : 'temp'
    };
    
    /**
     * Gets the path of the file being edited.
     * If the file is new and doesn't have a filepath, assigns temporary file path
     *
     * @private
     */
    function getCurrentFilePath(e) {
        try {
            currentFilePath = e.originalTarget.document.file.URI.replace(/\"/g, '');
        }
        catch (err) {
            currentFilePath = CONSTANTS.temporaryFilepathForUnsavedFile;
        }
    }
    
    /**
     * Gets the preferences for the file being edited.
     *
     * @private
     * @requires window.extensions.KJSLINT.Panels.Options.Data.getPreferencesForFile
     */
    function getCurrentPreferences() {
        currentFilePreferences = window.extensions.KJSLINT.Panels.Options.Data.getPreferencesForFile(currentFilePath);
    }
    
    /**
     * Determines if the preferences for the current file require default or custom mode.
     * Mode is Default if all boolean options match default options
     *
     * @private
     */
    function determineMode() {
        var allTestedPreferencesInDefaultState = true,
            preference,
            preferenceUnderTest;
        
        for (preference in currentFilePreferences) {
            if (currentFilePreferences.hasOwnProperty(preference)) {
                preferenceUnderTest = currentFilePreferences;
                if ((typeof(preferenceUnderTest) === 'boolean') && (preferenceUnderTest !== CONSTANTS.defaultPreferences[preference])) {
                    allTestedPreferencesInDefaultState = false;
                    
                    break;
                }
            }
        }
        
        if (allTestedPreferencesInDefaultState) {
            mode = 'default';
        } else {
            mode = 'custom';
        }
    }
    
    /**
     * Updates the options panel with the preferences for the file being edited.
     * Panel goes into custom mode if the preferences for the file differ from the default setting for JSLint.
     *
     * @private
     */
    function updatePanelWithCurrentPreferences() {
        determineMode();
        window.extensions.KJSLINT.Panels.Options.View.updateWithCurrentPreferences(currentFilePreferences);
    }
    
    /**
     * When the user switched to editing a different file.
     *
     * @public
     * @param e {object} Event object created during switching to a different file
     */
    function fileSwitched(e) {
        getCurrentFilePath(e);
        getCurrentPreferences();
        updatePanelWithCurrentPreferences();
    }
    
    /**
     * Gets the default options that comprise the Good Parts.
     *
     * @public
     * @requires window.extensions.KJSLINT.Panels.Options.Data.getDefaultPreferences
     * @returns {object} Default options
     */
    function getDefaultPreferences() {
        var defaultPreferences = window.extensions.KJSLINT.Panels.Options.Data.getDefaultPreferences();
        
        return defaultPreferences;
    }
    
    /**
     * Returns the current mode of the options panel.
     * Returns default if the checkbox options on the panel match default settings for JSLint.
     *
     * @public
     * @returns {string} ('default' or 'custom') Mode of the options panel
     */
    function getMode() {
        
        return mode;
    }
    
    /**
     * Initializes the Options panel
     *
     * @public
     * @requires window.extensions.KJSLINT.Panels.Options.Data.load
     */
    function init() {
      //  currentFilePath = window.extensions.KJSLINT.Page.Controller.getPathOfCurrentFile();
      //  currentFilePreferences = window.extensions.KJSLINT.Panels.Options.Data.getPreferencesForFile(currentFilePath);
    }
    
    /**
     * Finds the checkbox associated with a label.
     *
     * @private
     * @param {object} Label element
     * @returns {object} Checkbox element
     */
    function findCheckboxFromLabel(label) {
        var previousNode = label.previousSibling;
        
        while (previousNode.nodeType !== 1) {
            previousNode = previousNode.previousSibling;
        }
        
        return previousNode;
    }    
    
    /**
     * Updates a preference for the current file.
     *
     * @public
     * @param {string} preference Preference to update
     * @param {boolean|string} value Preference value
     */
    function updatePreference(preference, value) {
        currentFilePreferences[preference] = value;
    }
    
    /**
     * Puts the panel in default mode.
     *
     * @private
     * @requires window.extensions.KJSLINT.Panels.Options.View.putCheckboxesInDefaultMode
     */
    function enterDefaultMode() {
        mode = CONSTANTS.modes.defaultMode;
        window.extensions.KJSLINT.Panels.Options.View.putCheckboxesInDefaultMode();
    }
    
    /**
     * Puts the panel in custom mode.
     *
     * @private
     * @requires window.extensions.KJSLINT.Panels.Options.View.putCheckboxesInDefaultMode
     */
    function enterCustomMode() {
        mode = CONSTANTS.modes.customMode;
        window.extensions.KJSLINT.Panels.Options.View.putCheckboxesInCustomMode();
    }
    
    /**
     * Toggles the mode of the panel.
     * Updates checkbox preferences to reflect default or custom mode.
     *
     * @public
     * @param {number} modeIndex Mode radio buttons have a selected index value that lets us know what mode they are set to
     */
    function toggleMode(modeIndex) {
        if (modeIndex === CONSTANTS.modeIndex.defaultMode) {
            enterDefaultMode();   
        } else {
            enterCustomMode();
        }
    }
    
    /**
     * Toggles an option if the panel is in Custom mode and updates the preferences object for the file.
     *
     * @public
     * @param {object} clickedElement Element that has been clicked
     * @requires window.extensions.KJSLINT.Panels.Options.View.toggleCheckboxState
     */
    function toggleOptionIfCustomMode(clickedElement) {
        var checkbox;
            
        if (mode === CONSTANTS.modes.customMode) {
        
            // if the label is checked rather than the checkbox
            if (clickedElement.value) {
                checkbox = findCheckboxFromLabel(clickedElement);
                
                // clicking the label doesn't change the checkbox state (bad Komodo), so I need to do it manually
                window.extensions.KJSLINT.Panels.Options.View.toggleCheckboxState(checkbox);
            }
            
            // the checkbox has been clicked
            else {
                checkbox = clickedElement;
            }
            
            updatePreference(checkbox.id, checkbox.checked);
        }
    }
    
    /**
     * Retrives the JSLint settings for the file being edited.
     *
     * @public
     * @returns {object} JSLint settings for the file being edited
     */
    function getPreferences() {
        
        return currentFilePreferences;
    }
    
    /**
     * Sets the preferences for a particular file within the preference object for all files that is saved on application close.
     *
     * @public
     * @requires window.extensions.KJSLINT.Panels.Options.Data.setPreferencesForFile
     */
    function storeFilePreferencesToBeSaved() {
        window.extensions.KJSLINT.Panels.Options.Data.setPreferencesForFile(currentFilePath, currentFilePreferences);
    }
    
    /**
     * Adds the preferences for a new file to the preferences object for all files.
     *
     * @private
     */
    function createFilePreferencesIfNewFile() {
        if (typeof(currentFilePreferences.indent) === 'undefined') {
            window.extensions.KJSLINT.Panels.Options.Data.createPreferencesForFile(currentFilePath);
        }
    }
    
    /**
     * When the user saves a file.
     *
     * @public
     */
    function fileSaved() {
        createFilePreferencesIfNewFile();
    }
    
    /**
     * Gets the preference and value for each of the checkboxes on the options panel.
     *
     * @public
     * @requires window.extensions.KJSLINT.Panels.Options.View.getCheckboxValues
     * @returns {object} Preference and value for each of the checkboxes on the options panel
     */
    function getCheckboxValues() {
        var checkboxValues = window.extensions.KJSLINT.Panels.Options.View.getCheckboxValues();
        
        return checkboxValues;
    }
    
    /**
     * Gets the preference and value for each of the text inputs on the options panel.
     *
     * @public
     * @requires window.extensions.KJSLINT.Panels.Options.View.getInputValues
     * @returns {object} Preference and value for each of the text inputs on the options panel
     */
    function getInputValues() {
        var inputValues = window.extensions.KJSLINT.Panels.Options.View.getInputValues();
        
        return inputValues;
    }
    
    /**
     * Saves the preferences object for all files.
     *
     * @public
     * @requires window.extensions.KJSLINT.Panels.Options.Data.save
     */
    function saveAllPreferences() {
        window.extensions.KJSLINT.Panels.Options.Data.save();
    }
    
    /**
     * Allows other modules to show the Options panel.
     *
     * @public
     * @requires window.extensions.KJSLINT.Panels.Options.View.show
     * @example window.extensions.KJSLINT.Panels.Options.Controller.show();
     */
    function show() {
        window.extensions.KJSLINT.Panels.Options.View.show();
    }
    
    return {
        fileSaved                       : fileSaved,
        fileSwitched                    : fileSwitched,
        getCheckboxValues               : getCheckboxValues,
        getDefaultPreferences           : getDefaultPreferences,
        getInputValues                  : getInputValues,
        getMode                         : getMode,
        getPreferences                  : getPreferences,
        init                            : init,
        saveAllPreferences              : saveAllPreferences,
        show                            : show,
        storeFilePreferencesToBeSaved   : storeFilePreferencesToBeSaved,
        toggleOptionIfCustomMode        : toggleOptionIfCustomMode,
        toggleMode                      : toggleMode,
        updatePreference                : updatePreference
    };
}());