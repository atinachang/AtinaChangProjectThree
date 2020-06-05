//OPTION 2 - SHOWING RANDOM 9 ELEMENTS OUT OF SELECTION
$(function() {
	
	const content = [
		{
			name: `southside`,
			producer: `Southside`,
			audio: './audio/southside.mp3',
			image: './images/southSide.jpeg',
			audioClass: "p1"
		},
		{
			name: "metroBoomin",
			producer: `Metro Boomin`,
			audio: './audio/metro-2.mp3',
			image: './images/metroBoomin.jpeg',
			audioClass: "p2"
		},
		{
			name: "bangladesh",
			producer: `Bangladesh`,
			audio: './audio/bangladesh.mp3',
			image: './images/bangladesh.jpeg',
			audioClass: "p3"
		},
		{
			name: "drummaBoy",
			producer: `Drumma Boy`,
			audio: './audio/drummaBoy.mp3',
			image: './images/drummaBoy.jpeg',
			audioClass: 'p4',
		}
	];


    //function that gives random intteger
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    //for each 'block' in the content array, give each block a random "position" between 1 and 9
    content.forEach(block => {
        block.position = getRandomInt(25);
    });

    //sort our array based on "position" value
    content.sort(function(a, b) {
        return a.position - b.position
    });

    //the number of blocks(divs) to show on the page
    content.length = 3;

    //for each item in the array after adjusting for length, append new li with content from our 'content' array
    content.forEach(block => {
        $('.container').append(`
        <li class="gridItem ${block.name}">
        <h2>${block.producer}</h2>  
        </li>
        <audio src="${block.audio}" class="${block.audioClass}" preload="auto" type="audio/mpeg"></audio>
        `);
    });

});


// END OPTION 2 - TURN THIS OFF/ON TO ACTIVATE
$(function() {

    // OPTION 1 - SHOWING 16 ELEMENTS AT ONCE

    // // //randomize divs on page load
    // var parent = $(".container");
    // var divs = parent.children();
    // //loop will run as long as the divs run for the length of the number of divs
    // while (divs.length) {
    //     // console.log(divs.length)
    //     //append items on the container that are removed and readded in a randomized order
    //     parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    // };
    // // //credit: https://jsfiddle.net/C6LPY/2/

    // END OPTION 1


    //play sound assigned to div - KEEP THIS
    var audTag = document.getElementsByTagName('audio');
        // console.log(audTag);
    $(".southside").on("click", function() {
        const audio = $(".p1")[0];
        audio.play();
    });


    $(".bangladesh").on("click", function() {
        const audio = $(".p3")[0];
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
        const audio = $(".p4")[0];
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
        const audio = $(".p2")[0];
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