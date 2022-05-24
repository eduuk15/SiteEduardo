function calculaEquacao() {
    //////////////////////////////////////////////////// - Criação dos elementos básicos
    let sinais = ["+", "-", "–"];
    let equacao = document.getElementById("equacao").value;
    let ladosIgualdade = equacao.split(" = ");
    let alfabeto =  [
        "a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J",
        "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T",
        "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];

    /////////////////////////////////////////////////// - Tratamento dos elementos do lado esquerdo da igualdade

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
        if (elementosLadoEsquerdo[i] === sinais[1] || elementosLadoEsquerdo[i] === sinais[2]) {
            if (isNaN(elementosLadoEsquerdo[i + 1]) === false) {
                elementosLadoEsquerdo[i + 1] *= -1;
            }
            if (elementosLadoEsquerdo[i + 1].toString().includes(`${incognita}`) && elementosLadoEsquerdo[i + 1] !== incognita) {
                elementosLadoEsquerdo[i + 1] = (-1 * parseFloat(elementosLadoEsquerdo[i + 1])) + incognita;
            }

            if (elementosLadoEsquerdo[i + 1] === incognita) {
                elementosLadoEsquerdo[i + 1] = (-1 + incognita);
            }

            if (isNaN(elementosLadoEsquerdo[i]) === true && typeof elementosLadoEsquerdo[i] !== 'string') {
                elementosLadoEsquerdo[i] = -1 + incognita;
            }
        }

        if (isNaN(elementosLadoEsquerdo[i]) === false) {
            somaElementosLadoEsquerdo += parseFloat(elementosLadoEsquerdo[i]);
        }
    }

    ////////////////////////////////////////////////// - Tratamento dos elementos do lado direito da igualdade
    let ladoDireito = ladosIgualdade[1];
    for (let i = 0; i < alfabeto.length; i++) {
        if (ladoDireito.includes(alfabeto[i])) {
            incognita = alfabeto[i];
        }
    }
    let elementosLadoDireito = ladoDireito.split(" ");
    let somaElementosLadoDireito = 0;
    for (let i = 0; i < elementosLadoDireito.length; i++) {
        if (elementosLadoDireito[i] === sinais[1] || elementosLadoDireito[i] === sinais[2]) {
            if (isNaN(elementosLadoDireito[i + 1]) === false) {
                elementosLadoDireito[i + 1] *= -1;
            }
            if (elementosLadoDireito[i + 1].toString().includes(`${incognita}`) && elementosLadoDireito[i + 1] !== incognita) {
                elementosLadoDireito[i + 1] = (-1 * parseFloat(elementosLadoDireito[i + 1])) + incognita;
            }

            if (elementosLadoDireito[i + 1] === incognita) {
                elementosLadoDireito[i + 1] = (-1 + incognita);
            }

            if (isNaN(elementosLadoDireito[i]) === true && typeof elementosLadoDireito[i] !== 'string') {
                elementosLadoDireito[i] = -1 + incognita;
            }
        }

        if (isNaN(elementosLadoDireito[i]) === false) {
            somaElementosLadoDireito += parseFloat(elementosLadoDireito[i]);
        }
    }

    /////////////////////////////////////////////////// - Tratamento do coeficiente

    let somaCoeficientesEsquerdo = 0;
    for (let i = 0; i < elementosLadoEsquerdo.length; i++) {
        if (elementosLadoEsquerdo[i].toString().includes(`${incognita}`)) {
            if (elementosLadoEsquerdo[i] === incognita) {
                elementosLadoEsquerdo[i] = 1;
            }
            somaCoeficientesEsquerdo += parseFloat(elementosLadoEsquerdo[i]);
        }
    }

    let somaCoeficientesDireito = 0;
    for (let i = 0; i < elementosLadoDireito.length; i++) {
        if (elementosLadoDireito[i].toString().includes(`${incognita}`)) {
            if (elementosLadoDireito[i] === incognita) {
                elementosLadoDireito[i] = 1;
            }
            somaCoeficientesDireito += parseFloat(elementosLadoDireito[i]);
        }
    }

    let coeficiente = somaCoeficientesEsquerdo - somaCoeficientesDireito;

    /////////////////////////////////////////////////// - Tratamento do resultado
    let resultado = (somaElementosLadoDireito - somaElementosLadoEsquerdo) / coeficiente;
    document.getElementById("resultado").innerHTML = "Resultado: " + incognita + " = " + resultado;

    if (somaElementosLadoEsquerdo < 0) {
        somaElementosLadoEsquerdo = `(${somaElementosLadoEsquerdo})`
    }
    document.getElementById("solucao").innerHTML = `Solução: x = (${somaElementosLadoDireito} - ${somaElementosLadoEsquerdo}) / ${coeficiente}`

    // Consoles.log
    console.log('A equação é: ' + equacao);
    // console.log(ladosIgualdade);
    // console.log(ladoEsquerdo);
    console.log('Os elementos do lado esquerdo são: ' + elementosLadoEsquerdo);
    // console.log(ladoDireito);
    console.log('Os elementos do lado direito são: ' + elementosLadoDireito);
    console.log('A soma dos elementos do lado direito é: ' + somaElementosLadoDireito);
    console.log('A soma dos elemetnos do lado esquerdo é: ' + somaElementosLadoEsquerdo);
    console.log('O coeficiente é: ' + coeficiente);
    // console.log(resultado);
    // console.log(incognita);
}
