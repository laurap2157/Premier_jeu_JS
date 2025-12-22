var temps = document.querySelector('#timer');
var donald = document.querySelector('#donald');

// La fonction suivante permet le déclenchement du timer, son déroulement jusqu'à 120 secondes / 2 minutes, puis son arrêt (elle permet aussi son affichage dans le span timer)//

function timer () {
    var secondes = 0;
    var pointsDonald = 0;
    var time = setInterval (() => {
        secondes++;
        temps.innerText = secondes;

        if (secondes % 10 === 0) {
            pointsDonald++;
            donald.innerText = pointsDonald;
        }

        if (secondes >= 120) {
            clearInterval (time);
        }
    }, 1000);
    return time;
}

var monTimer = timer();
console.log (monTimer)


// La fonction suivante permet à Donald de gagner un point toutes les 10 secondes//

