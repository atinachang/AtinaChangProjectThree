$(function() {

    // //randomize divs on page load
    var parent = $(".container");
    var divs = parent.children();
    //loop will run as long as the divs run for the length of the number of divs
    while (divs.length) {
        console.log(divs.length)
        //append items on the container that are removed and readded in a randomized order
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    };
    // //credit: https://jsfiddle.net/C6LPY/2/


    // //select divs on page load and hide the rest
    // const elems = $(".gridItem");
    //     if (elems.length) {
    //     var keep = Math.floor(Math.random() * elems.length);
    //     for (var i = 6; i < elems.length; ++i) {
    //         if (i !== keep) {
    //         $(elems[i]).hide();
    //         }
    //     }
    //     }
    //credit: https://stackoverflow.com/questions/28412995/javascript-random-div-on-page-load


    //play sound assigned to div
    var audTag = document.getElementsByTagName('audio');
        // console.log(audTag);
    $(".southside").on("click", function() {
        const audio = $(".p1")[0];
        audio.play();
    });

    //   $(document).keydown(function(e){
    //     if (e.keyCode === 87) {
    //         document.getElementsByClassName('p1')[0].play();
    //         return false
    //     }
    // })  


    $(".bangladesh").on("click", function() {
        const audio = $(".p2")[0];
        audio.play();
    });
    $(".charlieHeat").on("click", function() {
        const audio = $(".p3")[0];
        audio.play();
    });
    $(".murdaBeatz").on("click", function() {
        const audio = $(".p4")[0];
        audio.play();
    });
    $(".daytrip").on("click", function() {
        const audio = $(".p5")[0];
        audio.play();
    });
    $(".drummaBoy").on("click", function() {
        const audio = $(".p6")[0];
        audio.play();
    });
    $(".mikeWill").on("click", function() {
        const audio = $(".p7")[0];
        audio.play();
    });
    $(".djMustard").on("click", function() {
        const audio = $(".p8")[0];
        audio.play();
    });
    $(".metroBoomin").on("click", function() {
        const audio = $(".p9")[0];
        audio.play();
    });
    $(".cannon").on("click", function() {
        const audio = $(".p10")[0];
        audio.play();
    });
    $(".blaze").on("click", function() {
        const audio = $(".p11")[0];
        audio.play();
    });
    $(".banner").on("click", function() {
        const audio = $(".p12")[0];
        audio.play();
    });
    $(".tayKeith").on("click", function() {
        const audio = $(".p13")[0];
        audio.play();
    });
    $(".sonnyDigital").on("click", function() {
        const audio = $(".p14")[0];
        audio.play();
    });
    $(".youngChop").on("click", function() {
        const audio = $(".p15")[0];
        audio.play();
    });
    $(".harryFraud").on("click", function() {
        const audio = $(".p16")[0];
        audio.play();
    });
});