alert("Bem vindos ao jogo secreto");

// ler um numero 

/*var numeroSecreto = parseInt(Math.random() * 10);
let tentativas = 0;

while (tentativas < 3){
    let numero = parseInt(prompt("Digite um numero de 0 a 10")); // prompt é uma função que recebe um valor do usuario

    if (numero == numeroSecreto){
        alert("Parabens você acertou. É o número :" + numeroSecreto);
        break;
    }

    else if (numero > numeroSecreto){
        alert("O numero secreto é menor");
    }

    else if (numero < numeroSecreto){
        alert("O numero secreto é maior");
    }

    else{
        alert("Você errou");
    }

    tentativas++;
} */


// usar em forma de front
// class="container__texto-azul
let h2 = document.querySelector("h2");
let tituloErro = document.querySelector(".container__texto-azul");
let tentativas = 0;
let numeroSecreto = parseInt(Math.random() * 10);
alert("Bem vindos ao jogo secreto");
let numero = parseInt(prompt("Digite um numero de 0 a 10")); // prompt é uma função que recebe um valor do usuario

function ChutaNumero(){
    let numero = parseInt(prompt("Digite um numero de 0 a 10")); // prompt é uma função que recebe um valor do usuario

    if (numero == numeroSecreto){
        tituloErro.innerHTML = "Acertou!";
        h2.innerHTML = "Parabens você acertou. É o número :" + numeroSecreto;

    }
    else {
        if (numero > numeroSecreto){
            tituloErro.innerHTML = "Errou!";
            h2.innerHTML = "O numero secreto é menor";
        }

        else if (numero < numeroSecreto){
            tituloErro.innerHTML = "Errou!";
            h2.innerHTML = "O numero secreto é maior";
        }

        else{
            tituloErro.innerHTML = "Errou!";
            h2.innerHTML = "Você errou";
        }
    }


}