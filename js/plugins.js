$(function () {
    "use strict";
    var typed = new Typed('.typeme', {
        strings: ["Welcome To My Portfolio Website."],
        typeSpeed: 30,
        showCursor: false    
    });
    var typed2 = new Typed('.typeme2', {
        strings: ["Do What You Want Do What You Love.And remember That |It's Not About What You Have It's About What You Do With Waht You Have.|"],
        typeSpeed: 30,
        showCursor: false,
        startDelay: 3000
    });
    $("html").niceScroll({
        cursorcolor: "#FFFF00",
        cursorwidth: "7px"
    });
    var scrollbutton = $("#scroll-up");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 400) {
            scrollbutton.show();
        } else {
            scrollbutton.hide();
        }
    });
    scrollbutton.click(function () {
        $("html,body").animate({scrollTop: 0}, 1000);   
    });
});