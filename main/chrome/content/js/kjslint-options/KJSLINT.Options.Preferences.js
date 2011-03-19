window.extensions = window.extensions || {};
window.extensions.KJSLINT = window.extensions.KJSLINT || {};

/**
 * Users can set preferences for individual files through the options panel.
 * These options are saved to Komodo's XML for each file, to be retrieved and re-set when the file is re-opened.
 *
 * @namespace
 * @see window.extensions.KJSLINT.Options.Preferences
 * @see window.extensions.KJSLINT.Options.Profiles
 */
window.extensions.KJSLINT.Options = window.extensions.KJSLINT.Options || {};

/**
 * Allow the user to set the JSLint preferences
 *
 * @namespace
 * @requires window.extensions.KJSLINT.KomodoAdaptor
 */
window.extensions.KJSLINT.Options.Preferences = (function () {
    
    /**
     * Loads the preferences for the file, if they have already been set.
     *
     * @public
     * @requires window.extensions.KJSLINT.KomodoAdaptor.getPreferencesObject
     */
    function load() {
        var preferences = window.extensions.KJSLINT.KomodoAdaptor.getPreferencesObject();
        
        return preferences;
    }
    
    /**
     * Saves the preferences for the file.
     *
     * @public
     * @param preferences {object} User's preferences for a file
     */
    function save(preferences) {
        window.extensions.KJSLINT.KomodoAdaptor.updatePreferencesObject(preferences);
    }
    
    return {
        load    : load,
        save    : save
    };
}());