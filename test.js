function changeTimezone(date, ianatz) {

    // suppose the date is 12:00 UTC
    var invdate = new Date(date.toLocaleString('en-US', {
        timeZone: ianatz
    }));

    // then invdate will be 07:00 in Toronto
    // and the diff is 5 hours
    var diff = date.getTime() - invdate.getTime();

    // so 12:00 in Toronto is 17:00 UTC
    return new Date(date.getTime() - diff); // needs to substract


}

function timeOnly(date) {
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        }; // add zero in front of numbers < 10
        return i;

    }

    let hours = date.getHours();
    let minutes = date.getMinutes();
    minutes = checkTime(minutes);
    return hours + ":" + minutes;



}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;

}

var here = new Date();
var there = changeTimezone(here, "Asia/Chongqing");

console.log(timeOnly(there))