var temps = document.querySelector('#timer');
var donald = document.querySelector('#donald');
var secondes = 0;

function timer () {
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

// La fonction suivante permettra au chasseur de gagner des points à chaque clic sur Donald, uniquement pendant les 120 secondes que dure la partie//

var chasseur = document.querySelector('#hunter');
var perso = document.querySelector('#perso');
var pointsChasseur = 0;

function toggleScore () {
    if (secondes < 120) {
        pointsChasseur ++;
        chasseur.innerText = pointsChasseur;
    }
}    

perso.addEventListener("click", toggleScore);

// La fonction suivante permettra au joueur contrôlant Donald de le déplacer //

var speed = 1;
perso.style.top = '0vh'; //vh et vw : importants pour pouvoir s'adapter aux différentes tailles d'écran (ce n'est pas parfait... j'espère apprendre des choses à la correction :))//
perso.style.left = '0vw';

document.addEventListener('keydown', function(e) {
    var top = parseInt(perso.style.top);
    var left = parseInt(perso.style.left);

    if(e.key == 'ArrowRight') {
        left = left + speed;
        if(left >= 76) {
            left = 76;
    0    }
    }

    if(e.key == 'ArrowLeft') {
        left = left - speed;
        if(left <= -13) {
            left = -13;
        }
    }

    if(e.key == 'ArrowUp') {
        top = top - speed;
        if(top <= 0) {
            top = 0;
        }
    }

    if(e.key == 'ArrowDown') {
        top = top + speed;
        if(top >= 68) {
            top = 68;
        }
    }

    perso.style.top = top + 'vh';
    perso.style.left = left + 'vw';
});
