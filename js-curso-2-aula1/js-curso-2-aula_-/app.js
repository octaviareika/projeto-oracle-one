let titulo = document.querySelector('h1');
titulo.innerHTML = "Jogo do número secreto";


let paragrado = document.querySelector('p');
paragrado.innerHTML = "Tente adivinhar o número secreto entre 0 e 10";

let botaoReiniciar = document.querySelector('#reiniciar');
let campoChute = document.querySelector('input');


function gerarNumeroSecreto(){
    return Math.round(Math.random() * 10);
}

let numeroSecreto = gerarNumeroSecreto();
console.log(numeroSecreto);

function verificarChute(){
    if (Number(campoChute.value) === numeroSecreto){
        paragrado.innerHTML = "Você acertou!";
    }
    else{
        paragrado.innerHTML = "Você errou!";
    }
}

// id="reiniciar"
function reiniciarJogo(){
    
    botaoReiniciar.addEventListener('click', function(){
        campoChute.value = "";
        paragrado.innerHTML = "Tente adivinhar o número secreto entre 0 e 10";
    });
}

verificarChute();
reiniciarJogo();