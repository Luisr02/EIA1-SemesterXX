// Array mit verschieden Beats
var differentBeats: any = [
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

// Variablen
var loop: number = setInterval(function () {}, 4000);
var randomButton: number = setInterval(function () {}, 500);

// Funktion playSample
function playSample2 (sample: HTMLAudioElement): void {
    sample.play();
}

// Belegung der einzelnen Buttons
window.addEventListener("load", function () {
    document.querySelector(".b1").addEventListener("click", function (): void {playSample2(differentBeats[0]); });
    document.querySelector(".b2").addEventListener("click", function (): void {playSample2(differentBeats[1]); });
    document.querySelector(".b3").addEventListener("click", function (): void {playSample2(differentBeats[2]); });
    document.querySelector(".b4").addEventListener("click", function (): void {playSample2(differentBeats[3]); });
    document.querySelector(".b5").addEventListener("click", function (): void {playSample2(differentBeats[4]); });
    document.querySelector(".b6").addEventListener("click", function (): void {playSample2(differentBeats[5]); });
    document.querySelector(".b7").addEventListener("click", function (): void {playSample2(differentBeats[6]); });
    document.querySelector(".b8").addEventListener("click", function (): void {playSample2(differentBeats[7]); });
    document.querySelector(".b9").addEventListener("click", function (): void {playSample2(differentBeats[8]); });
});

// Play/Pause Toggle
document.getElementById("play").addEventListener("click", function(): void {
    this.classList.add("is-hidden");
    document.getElementById("pause").classList.remove("is-hidden");
});
document.getElementById("pause").addEventListener("click", function(): void {
    this.classList.add("is-hidden");
    document.getElementById("play").classList.remove("is-hidden");
});

// Abzuspielender Beat
document.querySelector("#play").addEventListener("click", function (): void {beat(); 
});

function beat (): void {
    loop = setInterval(function (): void {
         setTimeout(function (): void { differentBeats[0].play(); }, 500); 
         setTimeout(function (): void { differentBeats[1].play(); }, 1000);
         setTimeout(function (): void { differentBeats[2].play(); }, 1500);
         setTimeout(function (): void { differentBeats[0].play(); }, 2000); 
         setTimeout(function (): void { differentBeats[1].play(); }, 2500);
         setTimeout(function (): void { differentBeats[2].play(); }, 3000);
         setTimeout(function (): void { differentBeats[6].play(); }, 3500);
         setTimeout(function (): void { differentBeats[7].play(); }, 4000);
},                     4000);
}

document.querySelector("#pause").addEventListener("click", function (): void {stopSounds(); });

function stopSounds(): void {
        clearInterval(loop);
}

// Remix-Button
document.querySelector("#remix").addEventListener("click", function () {random(); });

function random(): void {
    randomButton = setInterval(function(): void {
    playSample2(differentBeats[Math.floor(Math.random() * 9)]);
    console.log (randomButton);
},                             500);
}

// Delete-Button
document.querySelector("#delete").addEventListener("click", function () {deleteRemix(); });
function deleteRemix(): void {
    clearInterval(randomButton);
}


