
// let more = document.querySelector('.download-btn');

const { VolumeDown } = require("@material-ui/icons");

// let audioArr = document.getElementsByTagName('audio');
// console.log(audioArr);

// more.addEventListener('mouseenter',()=>{
//     audioArr[0].play()

// });

// const audio = new Audio();
// audio.src="click.mp3"


// const btn = new Audio();
// btn.src="click.mp3"

function cplay(){
    var audio =document.getElementById("click");
    audio.play();
    
}

function play(){
    var audio = document.getElementById("bg-track");
    audio.play();
}

function pause(){
    var audio = document.getElementById("bg-track");
    audio.pause();
}