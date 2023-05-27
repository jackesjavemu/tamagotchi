var hunger = 50;
var happiness = 0;

function feed() {
    hunger--;
    updateStatus();
}

function play() {
    happiness++;
    var imageContainer = document.querySelector('.image');
    imageContainer.classList.add('hovershake');
    setTimeout(function () {
        imageContainer.classList.remove('hovershake');
    }, 500);
    updateStatus();
}

function updateStatus() {
    document.getElementById("hunger").textContent = hunger;
    document.getElementById("happiness").textContent = happiness;
}

function reiniciar(){
    hunger=50;
    happiness=0;
    updateStatus();
}