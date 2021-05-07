// Array mit verschieden Beats
var differentBeats : any = [
    new Audio("assets/A.mp3"), 
    new Audio("assets/C.mp3"), 
    new Audio("assets/F.mp3"), 
    new Audio("assets/G.mp3"),
    new Audio("assets/hihat.mp3"),
    new Audio("assets/kick.mp3"),
    new Audio("assets/laugh-1.mp3"),
    new Audio("assets/laugh-2.mp3"),
    new Audio("assets/snare.mp3")
];
// Funktion playSample
function playSample (sample) {
    sample.play();
}
// Belegung der einzelnen Buttons
window.addEventListener("load", function() {
    document.querySelector(".b1").addEventListener("click", function () {playSample(differentBeats[0])});
    document.querySelector(".b2").addEventListener("click", function () {playSample(differentBeats[1])});
    document.querySelector(".b3").addEventListener("click", function () {playSample(differentBeats[2])});
    document.querySelector(".b4").addEventListener("click", function () {playSample(differentBeats[3])});
    document.querySelector(".b5").addEventListener("click", function () {playSample(differentBeats[4])});
    document.querySelector(".b6").addEventListener("click", function () {playSample(differentBeats[5])});
    document.querySelector(".b7").addEventListener("click", function () {playSample(differentBeats[6])});
    document.querySelector(".b8").addEventListener("click", function () {playSample(differentBeats[7])});
    document.querySelector(".b9").addEventListener("click", function () {playSample(differentBeats[8])});
})
// Aufgabe 7.2
window.addEventListener("load", function() {
document.querySelector(".PlayButton").addEventListener("click", beat);
function beat () {
    setTimeout(function () {differentBeats[5].play() }, 500);
    setTimeout(function () {differentBeats[8].play() }, 1000);
    setTimeout(function () {differentBeats[4].play() }, 1500);
}})