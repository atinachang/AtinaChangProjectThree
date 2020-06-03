

$(function() {
    var audTag = document.getElementsByTagName('audio');
        // console.log(audTag);


    $(".southside").on("click", function() {
        const audio = $(".p1")[0];
        audio.play();
    });
    $(document).keydown(function(e){
        if (e.keyCode === 87) {
            document.getElementsByClassName('p1')[0].play();
            return false
        }
    })
    


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
});