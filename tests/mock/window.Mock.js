/*global window*/

window.setCursor = function (calledWith) {
    window.setCursor.called = true;
    window.setCursor.calledWith = calledWith;
};