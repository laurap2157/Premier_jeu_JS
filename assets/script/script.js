var temps = document.querySelector('#timer');
var donald = document.querySelector('#donald');

function timer () {
    var secondes = 0;
    var pointsDonald = 0;
    var time = setInterval (() => {
        secondes++;
        temps.innerText = secondes; //Cette partie de la fonction permet au temps d'augmenter et de s'afficher dans le span timer//

        if (secondes % 10 === 0) {
            pointsDonald++;
            donald.innerText = pointsDonald;
        } // Cette partie de la fonction permet à Donald de gagner des points toutes les 10 secondes//

        if (secondes >= 120) {
            clearInterval (time);
        } // Cette partie de la fonction permet au timer de s'arrêter au bout de 120 secondes//
    }, 1000);
    return time;
}

var monTimer = timer();

var chasseur = document.querySelector('#hunter');
var points = 0;

function toggleScore () {
    points ++;
    chasseur.innerText = points;
}    

donald.addEventListener("click", toggleScore);

var pointsHunter = toggleScore();
