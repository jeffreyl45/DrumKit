// detecting button press

const drums = document.querySelectorAll(".drum");
const numberOfDrumButtons = drums.length;
for (let i = 0; i <  numberOfDrumButtons; i ++) {
    drums[i].addEventListener("click", function() {
        const buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });

}

// detecting key press

function makeSound(key) {
    let fileName = null;
    switch (key) {
        case "w":
                fileName = "sounds/tom-1.mp3";
            break;
        case "a":
                fileName = "sounds/tom-2.mp3";
            break;
        case "s":
                fileName = "sounds/tom-3.mp3";
            break;
        case "d":
                fileName = "sounds/tom-4.mp3";
            break;
        case "j":
                fileName = "sounds/snare.mp3";
            break;
        case "k":
                fileName = "sounds/crash.mp3";
            break;
        case "l":
                fileName = "sounds/kick-bass.mp3";
            break;
    }
    if (fileName != null) {
        const drum = new Audio(fileName);
        drum.play();
    }
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function buttonAnimation(currentKey) {
    const activeButton = document.querySelector("." + currentKey);
    if (activeButton != null) {
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    } 
}