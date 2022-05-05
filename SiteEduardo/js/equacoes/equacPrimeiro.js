function calculaEquacao() {
    let sinais = ["+", "-"];
    let equacao = document.getElementById("equacao").value;
    let ladosIgualdade = equacao.split(" = ");
    let alfabeto =  [
        "a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J",
        "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", 
        "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];

    ///////////////////////////////////////////////////
    let ladoEsquerdo = ladosIgualdade[0];
    let elementosLadoEsquerdo = ladoEsquerdo.split(" ");
    let somaElementosLadoEsquerdo = 0;
    for (let i = 0; i < elementosLadoEsquerdo.length; i++) {
        if (elementosLadoEsquerdo[i] === sinais[1]) {
            elementosLadoEsquerdo[i + 1] *= -1;
        }

        if (isNaN(elementosLadoEsquerdo[i]) === false) {
            somaElementosLadoEsquerdo += parseFloat(elementosLadoEsquerdo[i]);
        }
    }

    //////////////////////////////////////////////////
    let ladoDireito = ladosIgualdade[1];
    let elementosLadoDireito = ladoDireito.split(" ");
    let somaElementosLadoDireito = 0;
    for (let i = 0; i < elementosLadoDireito.length; i++) {
        if (elementosLadoDireito[i] === sinais[1]) {
            elementosLadoDireito[i + 1] *= -1;
        }

        if (isNaN(elementosLadoDireito[i]) === false) {
            somaElementosLadoDireito += parseFloat(elementosLadoDireito[i]);
        }
    }

    ///////////////////////////////////////////////////
    let coeficiente = 0;
    for (let i = 0; i < alfabeto.length; i++) {
        coeficiente = parseFloat(ladoEsquerdo.split(`${alfabeto[i]}`)[0]);
        if (isNaN(coeficiente) === true && coeficiente != alfabeto[i]) {
            coeficiente = 1;
        }
    }

    let resultado = (somaElementosLadoDireito - somaElementosLadoEsquerdo) / coeficiente;

    

    console.log(equacao);
    console.log(ladosIgualdade);
    console.log(ladoEsquerdo);
    console.log(elementosLadoEsquerdo);
    console.log(ladoDireito);
    console.log(elementosLadoDireito);
    console.log(somaElementosLadoDireito);
    console.log(somaElementosLadoEsquerdo);
    console.log(coeficiente);
    console.log(resultado);
}