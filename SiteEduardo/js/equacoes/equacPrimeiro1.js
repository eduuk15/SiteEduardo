
function calculaEquacao() {
    const alfabeto = [
        "a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J",
        "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T",
        "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"
    ];

    const equacao = document.getElementById("equacao").value;
    const ladoEquacao = equacao.split(' = ');

    let ladoEsquerdo = ladoEquacao[0];
    let ladoDireito = ladoEquacao[1];

    let elementosLadoEsquerdo = ladoEsquerdo.split(' ');

    let elementosLadoDireito = ladoDireito.split(' ');


    let incognita = '';


    for (let i = 0; i < alfabeto.length; i++) {
        if (ladoEsquerdo.includes(alfabeto[i])) {
            incognita = alfabeto[i];
        }
        if (ladoDireito.includes(alfabeto[i])) {
            incognita = alfabeto[i];
        }
    }


    let somaCoeficientesEsquerdo = 0;
    for (i = 0; i < elementosLadoEsquerdo.length; i++) {
        if (elementosLadoEsquerdo[i].toString().includes(incognita)) {
            if (elementosLadoEsquerdo[i] === incognita) {
                elementosLadoEsquerdo[i] = 1 + incognita;
            }
            if (elementosLadoEsquerdo[i] === '-' + incognita) {
                elementosLadoEsquerdo[i] = -1 + incognita;
            }
            if (elementosLadoEsquerdo[i - 1] === '-') {
                elementosLadoEsquerdo[i] = -1 + elementosLadoEsquerdo[i];
            }
            somaCoeficientesEsquerdo += parseFloat(elementosLadoEsquerdo[i]);
            if (elementosLadoEsquerdo[i] === 1 + incognita) {
                elementosLadoEsquerdo[i] = incognita;
            }
            ladoEsquerdo = ladoEsquerdo.replace(elementosLadoEsquerdo[i], "");
            console.log(ladoEsquerdo);
        }
    }


    let somaCoeficientesDireito = 0;
    for (i = 0; i < elementosLadoDireito.length; i++) {
        if (elementosLadoDireito[i].toString().includes(incognita)) {
            if (elementosLadoDireito[i] === incognita) {
                elementosLadoDireito[i] = 1 + incognita;
            }
            if (elementosLadoDireito[i] === '-' + incognita) {
                elementosLadoDireito[i] = -1 + incognita;
            }
            if (elementosLadoDireito[i - 1] === '-') {
                elementosLadoDireito[i] = -1 + elementosLadoDireito[i];
            }
            somaCoeficientesDireito += parseFloat(elementosLadoDireito[i]);
            if (elementosLadoDireito[i] === 1 + incognita) {
                elementosLadoDireito[i] = incognita;
            }
            ladoDireito = ladoDireito.replace(elementosLadoDireito[i], "");
        }
    }

    ladoEsquerdo = ladoEsquerdo.replace(/\s/g, "");
    ladoDireito = ladoDireito.replace(/\s/g, "");

    if (!ladoEsquerdo) {
        ladoEsquerdo = 0;
    }

    let ladoEsquerdoSemIncognita = parseFloat(eval(ladoEsquerdo));
    let ladoDireitoSemIncognita = parseFloat(eval(ladoDireito));

    let resultadoEntreLados = parseFloat(ladoDireitoSemIncognita) - parseFloat(ladoEsquerdoSemIncognita);
    let resultadoCoeficiente = parseFloat(somaCoeficientesEsquerdo) - parseFloat(somaCoeficientesDireito);
    let resultadoFinal = resultadoEntreLados / resultadoCoeficiente;
    let solucao = `${parseFloat(ladoDireitoSemIncognita)} - ${parseFloat(ladoEsquerdoSemIncognita)} / ${parseFloat(somaCoeficientesEsquerdo)} - ${parseFloat(somaCoeficientesDireito)}`

    document.getElementById("resultado").innerHTML = "Resultado: " + incognita + " = " + resultadoFinal;
    document.getElementById("solucao").innerHTML = `Solução: ${incognita} = ${solucao}`;
}
