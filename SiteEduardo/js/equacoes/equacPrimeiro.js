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
    let incognita = "";
    for (let i = 0; i < alfabeto.length; i++) {
        if (ladoEsquerdo.includes(alfabeto[i])) {
            incognita = alfabeto[i];
        }
    }
    let elementosLadoEsquerdo = ladoEsquerdo.split(" ");
    let somaElementosLadoEsquerdo = 0;
    for (let i = 0; i < elementosLadoEsquerdo.length; i++) {
        if (elementosLadoEsquerdo[i] === sinais[1]) {
            if (isNaN(elementosLadoEsquerdo[i + 1]) === false) {
                elementosLadoEsquerdo[i + 1] *= -1;
            }
            if (elementosLadoEsquerdo[i + 1].toString().includes(`${incognita}`) && elementosLadoEsquerdo[i + 1] !== incognita) {
                elementosLadoEsquerdo[i + 1] = (-1 * parseFloat(elementosLadoEsquerdo[i + 1])) + incognita; 
            }

            if (isNaN(elementosLadoEsquerdo[i]) === true && typeof elementosLadoEsquerdo[i] !== 'string') {
                elementosLadoEsquerdo[i] = -1 + incognita;
            }
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
    for (let i = 0; i < elementosLadoEsquerdo.length; i++) {
        if (elementosLadoEsquerdo[i] )
        if (elementosLadoEsquerdo[i].toString().includes(`${incognita}`)) {

            if (elementosLadoEsquerdo[i] === incognita) {
                elementosLadoEsquerdo[i] = 1;
            }
            coeficiente += parseFloat(elementosLadoEsquerdo[i]);
        }
    }

    ///////////////////////////////////////////////////
    let resultado = (somaElementosLadoDireito - somaElementosLadoEsquerdo) / coeficiente;
    document.getElementById("resultado").innerHTML = "Resultado: " + incognita + " = " + resultado;

    

    // console.log(equacao); 
    // console.log(ladosIgualdade); 
    // console.log(ladoEsquerdo); 
    // console.log(elementosLadoEsquerdo);
    // console.log(ladoDireito); 
    // console.log(elementosLadoDireito); 
    // console.log(somaElementosLadoDireito); 
    // console.log(somaElementosLadoEsquerdo); 
    // console.log(coeficiente); 
    // console.log(resultado); 
    // console.log(incognita); 
}
