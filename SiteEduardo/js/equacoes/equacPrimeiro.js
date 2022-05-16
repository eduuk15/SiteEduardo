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
    let incognita = "";
    let coeficiente = 0;
    for (let i = 0; i < alfabeto.length; i++) {
        if (ladoEsquerdo.includes(alfabeto[i])) {
            incognita = alfabeto[i];
        }
    }

    for (let i = 0; i < elementosLadoEsquerdo.length; i++) {
        if (elementosLadoEsquerdo[i].toString().includes(`${incognita}`)) {
            coeficiente += parseFloat(elementosLadoEsquerdo[i]);
            console.log('entrou');
            console.log(elementosLadoEsquerdo[i]);
            console.log(coeficiente);
        }
        if (isNaN(coeficiente) === true && coeficiente !== incognita) {
            coeficiente = 1;
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
