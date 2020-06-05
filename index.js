//OPTION 2 - SHOWING RANDOM 9 ELEMENTS OUT OF SELECTION
const content = [
    {
        name: `southside`,
        producer: `Southside`,
        audio: './audio/southside.mp3',
        image: './images/southSide.jpeg',
        audioClass: "p1"
    },
    {
        name: "bangladesh",
        producer: `Bangladesh`,
        audio: './audio/bangladesh.mp3',
        image: './images/bangladesh.jpeg',
        audioClass: "p2"
    },
    {
        name: "charlieHeat",
        producer: `Charlie Heat`,
        audio: './audio/charlieHeat.mp3',
        image: './images/charlieHeat.jpeg',
        audioClass: 'p3',
    },
    {
        name: "metroBoomin",
        producer: `Metro Boomin`,
        audio: './audio/metro-2.mp3',
        image: './images/metroBoomin.jpeg',
        audioClass: "p9"
    },
    {
        name: "murdaBeatz",
        producer: `Murda Beatz`,
        audio: './audio/murda.mp3',
        image: './images/murdaBeatz.jpeg',
        audioClass: 'p4',
    },
    {
        name: "daytrip",
        producer: `Take A Day Trip`,
        audio: './audio/daytrip.mp3',
        image: './images/daytrip.jpeg',
        audioClass: 'p5',
    },
    {
        name: "drummaBoy",
        producer: `Drumma Boy`,
        audio: './audio/drummaBoy.mp3',
        image: './images/drummaBoy.jpeg',
        audioClass: 'p6',
    },
    {
        name: "mikeWill",
        producer: `Mike WiLL Made It`,
        audio: './audio/mikeWill.mp3',
        image: './images/mikeWill.jpeg',
        audioClass: 'p7',
    },
    {
        name: "djMustard",
        producer: `DJ Mustard`,
        audio: './audio/Mustard.mp3',
        image: './images/djMustard.png',
        audioClass: 'p8',
    },
    {
        name: "donCannon",
        producer: `Don Cannon`,
        audio: './audio/cannon.mp3',
        image: './images/donCannon.jpeg',
        audioClass: 'p10',
    },
    {
        name: "justBlaze",
        producer: `Just Blaze`,
        audio: './audio/justBlaze.mp3',
        image: './images/justBlaze.jpeg',
        audioClass: 'p11',
    },
    {
        name: "davidBanner",
        producer: `David Banner`,
        audio: './audio/davidBanner.mp3',
        image: './images/davidBanner.png',
        audioClass: 'p12',
    },
    {
        name: "tayKeith",
        producer: `Tay Keith`,
        audio: './audio/tayKeith.mp3',
        image: './images/tayKeith.jpeg',
        audioClass: 'p13',
    },
    {
        name: "sonnyDigital",
        producer: `Sonny Digital`,
        audio: './audio/sonnyDigital.mp3',
        image: './images/sonnyDigital.jpeg',
        audioClass: 'p14',
    },
    {
        name: "youngChop",
        producer: `Young Chop`,
        audio: './audio/youngChop.mp3',
        image: './images/youngChop.jpeg',
        audioClass: 'p15',
    },
    {
        name: "harryFraud",
        producer: `Harry Fraud`,
        audio: './audio/harryFraud.mp3',
        image: './images/harryFraud.jpeg',
        audioClass: 'p16',
    },
];


content.init = () => {
    
    //function that gives random integer
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
    content.length = 9;

    //for each item in the array after adjusting for length, append new li with content from our 'content' array
    content.forEach(block => {
        $('.container').append(`
        <li class="gridItem ${block.name}">
        <h2>${block.producer}</h2>  
        </li>
        <audio src="${block.audio}" class="${block.audioClass}" preload="auto" type="audio/mpeg"></audio>
        `);
    });
}

$(function() {
	content.init();

        //play sound assigned to div - KEEP THIS
    $(".southside").on("click", function() {
        const audio = $(".p1")[0];
        audio.play();
    });

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

    $(".donCannon").on("click", function() {
        const audio = $(".p10")[0];
        audio.play();
    });

    $(".justBlaze").on("click", function() {
        const audio = $(".p11")[0];
        audio.play();
    });

    $(".davidBanner").on("click", function() {
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


// END OPTION 2 - TURN THIS OFF/ON TO ACTIVATE
// $(function() {

//     // OPTION 1 - SHOWING 16 ELEMENTS AT ONCE

//     // // //randomize divs on page load
//     // var parent = $(".container");
//     // var divs = parent.children();
//     // //loop will run as long as the divs run for the length of the number of divs
//     // while (divs.length) {
//     //     // console.log(divs.length)
//     //     //append items on the container that are removed and readded in a randomized order
//     //     parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
//     // };
//     // // //credit: https://jsfiddle.net/C6LPY/2/

//     // END OPTION 1



// });