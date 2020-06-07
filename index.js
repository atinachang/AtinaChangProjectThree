const content = [
    {
        name: `southside`,
        producer: `Southside`,
        audio: './audio/southside.mp3',
        audioClass: "p1"
    },
    {
        name: "bangladesh",
        producer: `Bangladesh`,
        audio: './audio/bangladesh.mp3',
        audioClass: "p2"
    },
    {
        name: "charlieHeat",
        producer: `Charlie Heat`,
        audio: './audio/charlieHeat.mp3',
        audioClass: 'p3',
    },
    {
        name: "metroBoomin",
        producer: `Metro Boomin`,
        audio: './audio/metro-2.mp3',
        audioClass: "p9"
    },
    {
        name: "murdaBeatz",
        producer: `Murda Beatz`,
        audio: './audio/murda.mp3',
        audioClass: 'p4',
    },
    {
        name: "daytrip",
        producer: `Take A Day Trip`,
        audio: './audio/daytrip.mp3',
        audioClass: 'p5',
    },
    {
        name: "drummaBoy",
        producer: `Drumma Boy`,
        audio: './audio/drummaBoy.mp3',
        audioClass: 'p6',
    },
    {
        name: "mikeWill",
        producer: `Mike WiLL Made It`,
        audio: './audio/mikeWill.mp3',
        audioClass: 'p7',
    },
    {
        name: "djMustard",
        producer: `DJ Mustard`,
        audio: './audio/mustard.mp3',
        audioClass: 'p8',
    },
    {
        name: "donCannon",
        producer: `Don Cannon`,
        audio: './audio/cannon.mp3',
        audioClass: 'p10',
    },
    {
        name: "justBlaze",
        producer: `Just Blaze`,
        audio: './audio/justBlaze.mp3',
        audioClass: 'p11',
    },
    {
        name: "davidBanner",
        producer: `David Banner`,
        audio: './audio/davidBanner.mp3',
        audioClass: 'p12',
    },
    {
        name: "tayKeith",
        producer: `Tay Keith`,
        audio: './audio/tayKeith.mp3',
        audioClass: 'p13',
    },
    {
        name: "sonnyDigital",
        producer: `Sonny Digital`,
        audio: './audio/sonnyDigital.mp3',
        audioClass: 'p14',
    },
    {
        name: "youngChop",
        producer: `Young Chop`,
        audio: './audio/youngChop.mp3',
        audioClass: 'p15',
    },
    {
        name: "harryFraud",
        producer: `Harry Fraud`,
        audio: './audio/harryFraud.mp3',
        audioClass: 'p16',
    },
    {
        name: "bobbyJohnson",
        producer: `Bobby Johnson`,
        audio: './audio/bobbyJohnson.mp3',
        image: './images/bobbyJohnson.jpeg',
        audioClass: 'p17',
    },
    {
        name: "darkChild",
        producer: `Dark Child`,
        audio: './audio/darkChild.mp3',
        image: './images/darkChild.jpeg',
        audioClass: 'p18',
    },
    {
        name: "jahlilBeats",
        producer: `Jahlil Beats`,
        audio: './audio/jahlilBeats.mp3',
        audioClass: 'p19',
    },
    {
        name: "londonOnDaTrack",
        producer: `London On Da Track`,
        audio: './audio/londonOnDaTrack.mp3',
        audioClass: 'p20',
    },
    {
        name: "maalyRaw",
        producer: `Maaly Raw`,
        audio: './audio/maalyRaw.mp3',
        audioClass: 'p21',
    },
    {
        name: "nitti",
        producer: `Nitti`,
        audio: './audio/nitti.mp3',
        audioClass: 'p22',
    },
    {
        name: "pierreBourne",
        producer: `Yo Pierre`,
        audio: './audio/pierreBourne.mp3',
        audioClass: 'p23',
    },
    {
        name: "quay",
        producer: `Quay Global`,
        audio: './audio/quay.mp3',
        audioClass: 'p24',
    },
    {
        name: "wheezy",
        producer: `Wheezy Outta Here`,
        audio: './audio/wheezy.mp3',
        audioClass: 'p25',
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

    //sort our array based on random "position" value
    content.sort(function(a, b) {
        return a.position - b.position
    });

    // the number of blocks(divs) to show on the page
    content.length = 9;

    //for each item in the array after adjusting for length, append new li with content from our 'content' array
    content.forEach(block => {
        $('.container').append(`
        <li class="gridItem ${block.name}" id="${block.name}">
        <h2>${block.producer}</h2>  
        </li>
        <audio src="${block.audio}" class="${block.audioClass}" preload="auto" type="audio/mpeg"></audio>
        `);
    });


    $('li').on('click', function() {
        const audio =  $(this).next()[0];
        audio.play();
        //shoutout Sherry for helping me with this
    })
}

$(function() {
    content.init();
    
});