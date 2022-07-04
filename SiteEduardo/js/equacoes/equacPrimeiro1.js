
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


    let multiplicadorEsquerdo = 1;
    for (i = 0; i < elementosLadoEsquerdo.length; i++) {
        if (elementosLadoEsquerdo[i] === '*') {
            multiplicadorEsquerdo *= elementosLadoEsquerdo[i + 1];
            ladoEsquerdo = ladoEsquerdo.replace(multiplicadorEsquerdo, '');
            ladoEsquerdo = ladoEsquerdo.replace('*', '');
        }
    }


    let multiplicadorDireito = 1;
    for (i = 0; i < elementosLadoDireito.length; i++) {
        if (elementosLadoDireito[i] === '*') {
            multiplicadorDireito *= elementosLadoDireito[i + 1];
            ladoDireito = ladoDireito.replace(multiplicadorDireito, '');
            ladoDireito = ladoDireito.replace('*', '');
        }
    }


    let divisorEsquerdo = 1;
    for (i = 0; i < elementosLadoEsquerdo.length; i++) {
        if (elementosLadoEsquerdo[i] === '/') {
            divisorEsquerdo *= elementosLadoEsquerdo[i + 1];
            ladoEsquerdo = ladoEsquerdo.replace(divisorEsquerdo, '');
            ladoEsquerdo = ladoEsquerdo.replace('/', '');
        }
    }


    let divisorDireito = 1;
    for (i = 0; i < elementosLadoDireito.length; i++) {
        if (elementosLadoEsquerdo[i] === '/') {
            divisorDireito *= elementosLadoDireito[i + 1];
            ladoDireito = ladoDireito.replace(divisorDireito, '');
            ladoDireito = ladoDireito.replace('/', '');
        }
    }

    ladoEsquerdo = ladoEsquerdo.replace(/\s/g, "");
    ladoDireito = ladoDireito.replace(/\s/g, "");

    if (!ladoEsquerdo) {
        ladoEsquerdo = 0;
    }

    if (!ladoDireito) {
        ladoDireito = 0;
    }


    let ladoEsquerdoSemIncognita = parseFloat(eval(ladoEsquerdo));
    console.log(ladoEsquerdoSemIncognita);
    let ladoDireitoSemIncognita = parseFloat(eval(ladoDireito));
    console.log(ladoDireitoSemIncognita);

    let resultadoEntreLados = (parseFloat(ladoDireitoSemIncognita) - parseFloat(ladoEsquerdoSemIncognita));
    console.log(resultadoEntreLados);
    let resultadoCoeficiente = parseFloat(somaCoeficientesEsquerdo) - parseFloat(somaCoeficientesDireito);
    console.log(resultadoCoeficiente);
    let resultadoFinal = resultadoEntreLados / resultadoCoeficiente;
    let solucao = `{(${parseFloat(ladoDireitoSemIncognita)} - ${parseFloat(ladoEsquerdoSemIncognita)}) * ${parseFloat(multiplicadorDireito)} / ${parseFloat(multiplicadorEsquerdo)}} /
    (${parseFloat(somaCoeficientesEsquerdo)} - ${parseFloat(somaCoeficientesDireito)})`;

    document.getElementById("resultado").innerHTML = "Resultado: " + incognita + " = " + resultadoFinal;
    document.getElementById("solucao").innerHTML = `Solução: ${incognita} = ${solucao}`;
}
