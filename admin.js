/**
 * Created by asifsiddiqui on 03/03/2017.
 */
var dtimeElment, atimeElement, dDateElement, aDateElement;


var fillDTimeList = function (dtimeElement) {

    var hours, minutes;
    for (hours = 0; hours < 24; hours += 1) {
        var hh = hours.toString();
        if (hh.length < 2) {
            hh = "0" + hh;
        }

        dtimeElement.options[dtime.options.length] = new Option(hh + ":00");
        dtimeElement.options[dtime.options.length] = new Option(hh + ":30");

    }
    selectNearestDTime(dtimeElement);
};
//Sets the time <select> field to show the time nearest to now.
var selectNearestDTime = function (dtimeElement) {
    var t = new Date();
    var n = t.getHours()*2 + Math.floor(t.getMinutes()/30);
    dtime.options[n].selected = true;
};
var fillATimeList = function (atimeElement) {

    var hours, minutes;
    for (hours = 0; hours < 24; hours += 1) {
        var hh = hours.toString();
        if (hh.length < 2) {
            hh = "0" + hh;
        }

        atimeElement.options[atime.options.length] = new Option(hh + ":00");
        atimeElement.options[atime.options.length] = new Option(hh + ":30");

    }
    selectNearestATime(atimeElement);
};
//Sets the time <select> field to show the time nearest to now.
var selectNearestATime = function (atimeElement) {
    var t = new Date();
    var n = t.getHours()*2 + Math.floor(t.getMinutes()/30);
    atime.options[n].selected = true;
};


$(document).ready(function () {

    dtimeElement = $('#dtime')[0];
    atimeElement = $('#atime')[0];
    dDateElement = $('#ddate')[0];
    aDateElement = $('#adate')[0];
    fillDTimeList(dtimeElement);
    fillATimeList(atimeElement);



});
