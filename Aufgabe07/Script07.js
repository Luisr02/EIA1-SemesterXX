// Array mit verschieden Beats
var differentBeats = [
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
// Funktion playsample
function playSample(sample) {
    var sound = new Audio(sample);
    sound.play();
}
// Belegung der einzelnen Buttons
window.addEventListener("load", function () {
    document.querySelector(".b1").addEventListener("click", function () { playSample(differentBeats[0]); });
    document.querySelector(".b2").addEventListener("click", function () { playSample(differentBeats[1]); });
    document.querySelector(".b3").addEventListener("click", function () { playSample(differentBeats[2]); });
    document.querySelector(".b4").addEventListener("click", function () { playSample(differentBeats[3]); });
    document.querySelector(".b5").addEventListener("click", function () { playSample(differentBeats[4]); });
    document.querySelector(".b6").addEventListener("click", function () { playSample(differentBeats[5]); });
    document.querySelector(".b7").addEventListener("click", function () { playSample(differentBeats[6]); });
    document.querySelector(".b8").addEventListener("click", function () { playSample(differentBeats[7]); });
    document.querySelector(".b9").addEventListener("click", function () { playSample(differentBeats[8]); });
});
//# sourceMappingURL=Script07.js.map