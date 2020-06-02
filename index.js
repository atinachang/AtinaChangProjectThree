
$(function() {
    var audTag = document.getElementsByTagName('audio');
    // console.log(audTag);
    
    // $(".southside").on("click", "keydown", function() {
    //     if (keyCode===87) 
    //     var audio = $(".p1")[0];
    //     audio.play();
    // });
    
    // document.addEventListener('keydown', function(e) {
    //     if (e.keyCode == 87) {
    //     document.getElementsByTagName('.p1').play(audio);
    //     }
    // });
    $(".southside").on("click", function() {
        var audio = $(".p1")[0];
        audio.play();
    });

    $(".bangladesh").on("click", function() {
        var audio = $(".p2")[0];
        audio.play();
    });
    $(".charlieHeat").on("click", function() {
        var audio = $(".p3")[0];
        audio.play();
    });
    $(".murdaBeatz").on("click", function() {
        var audio = $(".p4")[0];
        audio.play();
    });
    $(".daytrip").on("click", function() {
        var audio = $(".p5")[0];
        audio.play();
    });
    $(".drummaBoy").on("click", function() {
        var audio = $(".p6")[0];
        audio.play();
    });
    $(".mikeWill").on("click", function() {
        var audio = $(".p7")[0];
        audio.play();
    });
    $(".djMustard").on("click", function() {
        var audio = $(".p8")[0];
        audio.play();
    });
    $(".metroBoomin").on("click", function() {
        var audio = $(".p9")[0];
        audio.play();
    });
    $(".cannon").on("click", function() {
        var audio = $(".p10")[0];
        audio.play();
    });
    $(".blaze").on("click", function() {
        var audio = $(".p11")[0];
        audio.play();
    });
    $(".banner").on("click", function() {
        var audio = $(".p12")[0];
        audio.play();
    });
});