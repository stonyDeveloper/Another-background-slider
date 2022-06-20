let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}






function startTime() {

    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDate();
    let t = today.getMonth() + 1;
    let y = today.getFullYear();


    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        }; // add zero in front of numbers < 10
        return i;

    }
    s = checkTime(s);
    m = checkTime(m);



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

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        }; // add zero in front of numbers < 10
        return i;

    }

    function timeOnly(date) {


        let hours = date.getHours();
        hours = checkTime(hours);
        let minutes = date.getMinutes();
        minutes = checkTime(minutes);
        return hours + ":" + minutes;



    }

    var here = new Date();
    var china = changeTimezone(here, "Asia/Chongqing");
    china = timeOnly(china);
    var london = changeTimezone(here, "Europe/London");
    london = timeOnly(london);
    var newyork = changeTimezone(here, "America/New_York");
    newyork = timeOnly(newyork);








    if (document.querySelector("#toggler input:checked")) {
        document.getElementById('txt').innerHTML = h + ":" + m;
        setTimeout(startTime, 1000);

    } else if (document.querySelector("#toggle input:checked")) {
        document.getElementById('txt').innerHTML = china;
        setTimeout(startTime, 1000);

    } else if (document.querySelector("#toggl input:checked")) {
        document.getElementById('txt').innerHTML = london;
        setTimeout(startTime, 1000);

    } else if (document.querySelector("#togg input:checked")) {
        document.getElementById('txt').innerHTML = newyork;
        setTimeout(startTime, 4000);

    }


    document.getElementById('secs').innerHTML = s;
    setTimeout(startTime, 1000);

    document.getElementById('day').innerHTML = d + " / ";

    document.getElementById('month').innerHTML = t + " / ";;

    document.getElementById('year').innerHTML = y;




}






function clickFunction() {
    var targetDiv = document.getElementById("box");

    if (targetDiv.style.display === "none") {
        targetDiv.style.display = "block";
    } else {
        targetDiv.style.display = "none";
    }
};

// function changeTimezone(date, ianatz) {

//     // suppose the date is 12:00 UTC
//     var invdate = new Date(date.toLocaleString('en-US', {
//         timeZone: ianatz
//     }));

//     // then invdate will be 07:00 in Toronto
//     // and the diff is 5 hours
//     var diff = date.getTime() - invdate.getTime();

//     // so 12:00 in Toronto is 17:00 UTC
//     return new Date(date.getTime() - diff); // needs to substract


// }

// var here = new Date();
// var there = changeTimezone(here, "America/Toronto");
