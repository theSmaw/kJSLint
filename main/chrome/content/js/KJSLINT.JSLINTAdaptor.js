/*global window*/

window.extensions = window.extensions || {};
window.extensions.KJSLINT = window.extensions.KJSLINT || {};

/**
 * Adaptor to JSLint
 *
 * @namespace
 * @requires KJSLINT.JSLINT
 */
window.extensions.KJSLINT.JSLINTAdaptor = (function () {
    
    /**
     * Executes JSLint and returns a data structure containing its results
     *
     * @public
     * @param stringToAnalyze {string} String to parse with JSLint
     * @param options {[object]} Options which control the operation of JSLINT
     * @requires window.extensions.KJSLINT.JSLINT
     * @returns {object} Data structure containing JSLint's results
     */
    function runAndReturnResults(stringToAnalyze, options) {
        var runAnalysis = window.extensions.KJSLINT.JSLINT(stringToAnalyze, options),
            analysisResults = window.extensions.KJSLINT.JSLINT.data();
            
        return analysisResults;            
    }
    
    return {
        runAndReturnResults : runAndReturnResults
    };
}());
