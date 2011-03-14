if (typeof(window.extensions) === 'undefined') {
    window.extensions = {};
}

window.extensions.TESTS = (function () {
    tests = function () {
        alert('a');
    }
    
    return {
        tests : tests
    };
}());
