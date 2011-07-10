/*global window*/

window.extensions = window.extensions || {};
window.extensions.KJSLINT = window.extensions.KJSLINT || {};
window.extensions.KJSLINT.Panels = window.extensions.KJSLINT.Panels || {};
window.extensions.KJSLINT.Panels.Options = window.extensions.KJSLINT.Panels.Options || {};

/**
 * View for the Options panel
 *
 * @namespace
 * @requires window.extensions.KJSLINT.KomodoAdaptor
 * @requires window.extensions.KJSLINT.Panels.Options.Controller
 */
window.extensions.KJSLINT.Panels.Options.View = (function () {
    var CONSTANTS,
        currentPreferences = {},
        elements = {};
        
    /**
     * @constant
     */
    CONSTANTS = {
        headings : {
            mode : {
                customMode      : 'Custom',
                defaultMode     : 'Default (The Good Parts)'
            }
        },
        ids : {
            indentationInput    : 'kjslint2_textbox_indent',
            maxerrInput         : 'kjslint2_textbox_maxerr',
            maxlenInput         : 'kjslint2_textbox_maxlen',
            modeHeading         : 'kjslint2_h4_custom',
            modeRadios          : 'kjslint2_radiogroup_presets',
            optionsContainer    : 'kjslint2_groupbox_custom_options',
            panel               : 'kjslint2_options_panel',
            predefInput         : 'kjslint2_textbox_predef',
            runButton           : 'kjslint2_button_run',
            tab                 : 'kjslint2_options_tab'
        },
        mode : {
            customMode          : 'custom',
            defaultMode         : 'default'
        },
        modeSelectedIndex : {
            customMode          : 1,
            defaultMode         : 0 
        }
    };
    
    /**
     * Gets references to required DOM elements.
     *
     * @private
     */
    function getElements() {
        elements.panel = document.getElementById(CONSTANTS.ids.panel);
        elements.checkboxes = elements.panel.getElementsByTagName('checkbox');
        elements.indentationInput = document.getElementById(CONSTANTS.ids.indentationInput);
        elements.maxerrInput = document.getElementById(CONSTANTS.ids.maxerrInput);
        elements.maxlenInput = document.getElementById(CONSTANTS.ids.maxlenInput);
        elements.modeHeading = document.getElementById(CONSTANTS.ids.modeHeading);
        elements.modeRadios = document.getElementById(CONSTANTS.ids.modeRadios);
        elements.optionsContainer = document.getElementById(CONSTANTS.ids.optionsContainer);
        elements.predefInput = document.getElementById(CONSTANTS.ids.predefInput);
        elements.runButton = document.getElementById(CONSTANTS.ids.runButton);
    }
    
    /**
     * Toggles the state of a checkbox.
     *
     * @public
     * @param checkbox {object} Checkbox element to toggle state of
     */
    function toggleCheckboxState(checkbox) {
        if (checkbox.checked) {
            checkbox.checked = false;
        } else {
            checkbox.checked = true;
        }
    }
    
    /**
     * Called when user has interacted with a checkbox on the options panel.
     *
     * @private
     * @param e {object} Event object
     * @requires window.extensions.KJSLINT.Panels.Options.Controller.toggleOptionIfCustomMode
     */
    function optionToggled(e) {
        window.extensions.KJSLINT.Panels.Options.Controller.toggleOptionIfCustomMode(e.target);
    }
    
    /**
     * Called when the user has interacted with the Mode options.
     *
     * @private
     * @requires window.extensions.KJSLINT.Panels.Options.Controller.toggleMode
     */
    function modeToggled() {
        var modeIndex = elements.modeRadios.selectedIndex;
        
        window.extensions.KJSLINT.Panels.Options.Controller.toggleMode(modeIndex);
    }
    
    /**
     * Observes events on the option checkboxes.
     *
     * @private
     */
    function observeCheckboxEvents() {
        elements.optionsContainer.addEventListener('click', optionToggled, false);
    }
    
    /**
     * Observes events on the mode radio buttons.
     *
     * @private
     */
    function observeModeEvents() {
        elements.modeRadios.addEventListener('click', modeToggled, false);
    }
    
    /**
     * Notifes the controller that the indentation input has changed.
     * Passes the updated value to the controller
     *
     * @private
     */
    function indentationInputUpdated() {
        window.extensions.KJSLINT.Panels.Options.Controller.updatePreference('indent', parseInt(elements.indentationInput.value, 10));
    }
    
    /**
     * Observes events on the indentation input.
     *
     * @private
     */
    function observeIndentationInputEvents() {
        elements.indentationInput.addEventListener('change', indentationInputUpdated, false);
        elements.indentationInput.addEventListener('keyup', indentationInputUpdated, false);
    }
    
    /**
     * Notifes the controller that the maxerr input has changed.
     * Passes the updated value to the controller
     *
     * @private
     */
    function maxerrInputUpdated() {
        window.extensions.KJSLINT.Panels.Options.Controller.updatePreference('maxerr', parseInt(elements.maxerrInput.value, 10));
    }
    
    /**
     * Observes events on the maxerr input.
     *
     * @private
     */
    function observeMaxerrInputEvents() {
        elements.maxerrInput.addEventListener('change', maxerrInputUpdated, false);
        elements.maxerrInput.addEventListener('keyup', maxerrInputUpdated, false);
    }
    
    /**
     * Notifes the controller that the maxlen input has changed.
     * Passes the updated value to the controller
     *
     * @private
     */
    function maxlenInputUpdated() {
        window.extensions.KJSLINT.Panels.Options.Controller.updatePreference('maxlen', parseInt(elements.maxlenInput.value, 10));
    }
    
    /**
     * Observes events on the maxlen input.
     *
     * @private
     */
    function observeMaxlenInputEvents() {
        elements.maxlenInput.addEventListener('change', maxlenInputUpdated, false);
        elements.maxlenInput.addEventListener('keyup', maxlenInputUpdated, false);
    }
    
    /**
     * Notifes the controller that the predef input has changed.
     * Passes the updated value to the controller
     *
     * @private
     */
    function predefInputUpdated() {
        window.extensions.KJSLINT.Panels.Options.Controller.updatePreference('predef', elements.predefInput.value.split(' ').join('').split(','));
    }
        
    /**
     * Observes events on the predef input.
     *
     * @private
     */
    function observePredefInputEvents() {
        elements.predefInput.addEventListener('keyup', predefInputUpdated, false);
    }
    
    /**
     * Observes events on the text inputs.
     *
     * @private
     */
    function observeInputEvents() {
        observeIndentationInputEvents();
        observeMaxerrInputEvents();
        observeMaxlenInputEvents();
        observePredefInputEvents();
    }
    
    /**
     * Acts on the Run button being pressed.
     *
     * @private
     * @requires window.extensions.KJSLINT.Page.Controller.run
     */
    function runButtonPressed() {
        window.extensions.KJSLINT.Page.Controller.run();
    }
    
    /**
     * Observes the Run button on the Options panel.
     *
     * @private
     */
    function observeRunButton() {
        var that = this;
        
        elements.runButton.addEventListener('click', function () {
            runButtonPressed.apply(that);
        }, false);
        
        elements.runButton.addEventListener('keyup', function () {
            runButtonPressed.apply(that);
        }, false);
    }
    
    /**
     * Observes events on the Options panel.
     *
     * @private
     */
    function observeEvents() {
        observeCheckboxEvents();
        observeModeEvents();
        observeInputEvents();
        observeRunButton();
    }
    
    /**
     * Handles the application onload event.
     *
     * @public
     */
    function applicationLoaded() {
        getElements();
        observeEvents();
    }
    
    /**
     * Changes the mode heading.
     *
     * @private
     * @param {string} value String for the heading
     */
    function updateModeHeading(value) {
        elements.modeHeading.setAttribute('label', CONSTANTS.headings.mode.customMode);
    }
    
    /**
     * Changes the mode radio controls.
     *
     * @private
     * @param {number} value 1 to put custom mode radio in selected state, 2 to select default mode radio control
     */
    function updateModeRadio(value) {
        elements.modeRadios.selectedIndex = value;
    }
    
    /**
     * Sets the checkboxes to the options selected in the preferences for the file.
     * Reveals hidden checkboxes and allows them to be used.
     *
     * @public
     * @requires window.extensions.KJSLINT.Panels.Options.Controller.getDefaultPreferences
     */
    function putCheckboxesInCustomMode() {
        var currentCheckbox,
            currentPreference,
            defaultPreferences = window.extensions.KJSLINT.Panels.Options.Controller.getDefaultPreferences(),
            i, 
            numberOfCheckboxes = elements.checkboxes.length;
        
        updateModeHeading(CONSTANTS.headings.mode.customMode);
        updateModeRadio(CONSTANTS.modeSelectedIndex.customMode);
        for (i = 0; i < numberOfCheckboxes; i += 1) {
            currentCheckbox = elements.checkboxes[i];
            currentPreference = currentCheckbox.id;
            currentCheckbox.disabled = false;
            currentCheckbox.checked = currentPreferences[currentPreference];
            if (defaultPreferences[currentPreference] === false) {
                currentCheckbox.parentNode.className = '';
            }
        }
    }
    
    /**
     * Sets the checkboxes to the default options.
     * Hides non-default radio buttons.
     * Prevents radio buttons being clickable.
     *
     * @private
     * @requires window.extensions.KJSLINT.Panels.Options.Controller.getDefaultPreferences
     */
    function putCheckboxesInDefaultMode() {
        var currentCheckbox,
            currentPreference,
            defaultPreferences = window.extensions.KJSLINT.Panels.Options.Controller.getDefaultPreferences(),
            i, 
            numberOfCheckboxes = elements.checkboxes.length;

        
        updateModeHeading(CONSTANTS.headings.mode.defaultMode); 
        updateModeRadio(CONSTANTS.modeSelectedIndex.defaultMode);
        for (i = 0; i < numberOfCheckboxes; i += 1) {
            currentCheckbox = elements.checkboxes[i];
            currentPreference = currentCheckbox.id;               
            currentCheckbox.checked = defaultPreferences[currentPreference];
            window.extensions.KJSLINT.Panels.Options.Controller.updatePreference(currentPreference, defaultPreferences[currentPreference]);
            if (defaultPreferences[currentPreference] === false) {
                currentCheckbox.parentNode.className = 'hidden';
            }
            currentCheckbox.disabled = true;
        }
    }
    
    /**
     * Shows the options panel.
     * Currently responds to DOM Level 0 event on #kjslint2-menu element in kjslint2.xul
     *
     * @public
     * @requires window.extensions.KJSLINT.KomodoAdaptor.ensureTabShown
     */
    function show() {
        window.extensions.KJSLINT.KomodoAdaptor.ensureTabShown(CONSTANTS.ids.tab);
        elements.panel.focus();
    }
    
    /**
     * Updates the checkbox options to reflect those stored for the current file.
     *
     * @private
     */
    function updateCheckboxes() {
        var mode = window.extensions.KJSLINT.Panels.Options.Controller.getMode();
        
        if (mode === CONSTANTS.mode.defaultMode) {
            putCheckboxesInDefaultMode();
        } else {
            putCheckboxesInCustomMode();
        }
    }
    
    /**
     * Updates the text input options to reflect those stored for the current file.
     *
     * @private
     */
    function updateTextInputs() {
        elements.indentationInput.value = currentPreferences.indent;
        elements.maxerrInput.value = currentPreferences.maxerr;
        elements.maxlenInput.value = currentPreferences.maxlen;
        elements.predefInput.value = currentPreferences.predef;
    }
    
     /**
     * Set the options to reflect those stored for the current file.
     *
     * @public
     * @param preferences {object} Preferences for the current file
     */
    function updateWithCurrentPreferences(preferences) {
        currentPreferences = preferences;
        updateCheckboxes();
        updateTextInputs();
    }
    
    /**
     * Get the value of a checkbox as a boolean,
     *
     * @private
     * @param {object} checkbox Checkbox element to get value from
     * @returns {boolean} True if the checkbox is checked
     */
    function getCheckboxValue(checkbox) {
        var checkboxValue = checkbox.getAttribute('checked');
        
        if (checkboxValue === 'true') {
            checkboxValue = true;
        } else {
            checkboxValue = false;
        }
        
        return checkboxValue;
    }
    
    /**
     * Gets the preference name and value for each of the checkboxes on the options panel.
     *
     * @public
     * @returns {object} Preference and value for each of the checkboxes on the options panel
     */
    function getCheckboxValues() {
        var checkboxValue,
            checkboxValues = {},
            currentCheckbox,
            i,
            numberOfCheckboxes = elements.checkboxes.length;
        
        for (i = 0; i < numberOfCheckboxes; i += 1) {
            currentCheckbox = elements.checkboxes[i];
            checkboxValue = getCheckboxValue(currentCheckbox);
            checkboxValues[currentCheckbox.id] = checkboxValue;
        }
        
        return checkboxValues;
    }
    
    /**
     * Gets the preference name and value for each of the text inputs on the options panel.
     *
     * @public
     * @returns {object} Preference and value for each of the text inputs on the options panel
     */
    function getInputValues() {
        var inputValues = {
                indent : elements.indentationInput.getAttribute('value') || '',
                maxerr : elements.maxerrInput.getAttribute('value') || '',
                maxlen : elements.maxlenInput.getAttribute('value') || '',
                predef : elements.predefInput.getAttribute('value') || ''
            };
            
        return inputValues;
    }
    
    return {
        getCheckboxValues               : getCheckboxValues,
        getInputValues                  : getInputValues,
        handleEvent                     : applicationLoaded, // this automatically gets called as a result of passing this object to the eventlistener below
        putCheckboxesInCustomMode       : putCheckboxesInCustomMode,
        putCheckboxesInDefaultMode      : putCheckboxesInDefaultMode,
        show                            : show,
        toggleCheckboxState             : toggleCheckboxState,
        updateWithCurrentPreferences    : updateWithCurrentPreferences
    };
}());

window.addEventListener('load', window.extensions.KJSLINT.Panels.Options.View, false);