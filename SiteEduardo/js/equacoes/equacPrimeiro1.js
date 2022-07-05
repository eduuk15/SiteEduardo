
function calculaEquacao() {
    const alfabeto = [
        "a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J",
        "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T",
        "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"
    ];

    const equacao = document.getElementById("equacao").value;
    const ladoEquacao = equacao.split(' = ');


    const multiplicacao = (x, incognita) => {
        return x * parseFloat(incognita);
    }

    const subtracao = (incognita1, incognita2, x) => {
        return (parseFloat(incognita1) - parseFloat(incognita2)) + x;
    }

    const divisao = (x, incognita) => {
        return 1/x * parseFloat(incognita);
    }


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
            if (elementosLadoEsquerdo[i + 1] === '*') {
                ladoEsquerdo = ladoEsquerdo.replace(elementosLadoEsquerdo[i], "");
                if (elementosLadoEsquerdo[i + 2].toString().includes('(')) {
                    elementosLadoEsquerdo[i + 2] = elementosLadoEsquerdo[i + 2].replace('(', '');
                    elementosLadoEsquerdo[i + 2] = elementosLadoEsquerdo[i + 2].replace(')', '');
                }
                elementosLadoEsquerdo[i] = parseFloat(elementosLadoEsquerdo[i]) * parseFloat(eval(elementosLadoEsquerdo[i + 2])) + incognita;
                ladoEsquerdo = ladoEsquerdo.replace(elementosLadoEsquerdo[i + 2], '');
                ladoEsquerdo = ladoEsquerdo.replace('*', '');
            }
            if (elementosLadoEsquerdo[i - 1] === '*') {
                ladoEsquerdo = ladoEsquerdo.replace(elementosLadoEsquerdo[i], "");
                if (elementosLadoEsquerdo[i - 2].toString().includes('(')) {
                    elementosLadoEsquerdo[i - 2] = elementosLadoEsquerdo[i - 2].replace('(', '');
                    elementosLadoEsquerdo[i - 2] = elementosLadoEsquerdo[i - 2].replace(')', '');
                }
                elementosLadoEsquerdo[i] = parseFloat(elementosLadoEsquerdo[i]) * parseFloat(eval(elementosLadoEsquerdo[i - 2])) + incognita;
                ladoEsquerdo = ladoEsquerdo.replace(elementosLadoEsquerdo[i - 2], '');
                ladoEsquerdo = ladoEsquerdo.replace('*', '');
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
            if (elementosLadoDireito[i + 1] === '*') {
                ladoDireito = ladoDireito.replace(elementosLadoDireito[i], "");
                if (elementosLadoDireito[i + 2].toString().includes('(')) {
                    elementosLadoDireito[i + 2] = elementosLadoDireito[i + 2].replace('(', '');
                    elementosLadoDireito[i + 2] = elementosLadoDireito[i + 2].replace(')', '');
                }
                elementosLadoDireito[i] = parseFloat(elementosLadoDireito[i]) * parseFloat(eval(elementosLadoDireito[i + 2])) + incognita;
                ladoDireito = ladoDireito.replace(elementosLadoDireito[i + 2], '');
                ladoDireito = ladoDireito.replace('*', '');
            }
            if (elementosLadoDireito[i - 1] === '*') {
                ladoDireito = ladoDireito.replace(elementosLadoDireito[i], "");
                if (elementosLadoDireito[i - 2].toString().includes('(')) {
                    elementosLadoDireito[i - 2] = elementosLadoDireito[i - 2].replace('(', '');
                    elementosLadoDireito[i - 2] = elementosLadoDireito[i - 2].replace(')', '');
                }
                elementosLadoDireito[i] = parseFloat(eval(elementosLadoDireito[i])) * parseFloat(elementosLadoDireito[i - 2]) + incognita;
                ladoDireito = ladoDireito.replace(elementosLadoDireito[i - 2], '');
                ladoDireito = ladoDireito.replace('*', '');
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

    if (!ladoEsquerdo || ladoEsquerdo === '+' || ladoEsquerdo === '-' || ladoEsquerdo === '*' || ladoEsquerdo === '/' || ladoEsquerdo === '()') {
        ladoEsquerdo = 0;
    }

    if (!ladoDireito || ladoDireito === '+' || ladoDireito === '-' || ladoDireito === '*' || ladoDireito === '/') {
        ladoDireito = 0;
    }

    const soma = (elemento1, elemento2, x) => {
        return (parseFloat(elemento1) + parseFloat(elemento2)) + x;
    }

    let resultadoLadoEsquerdo = [];
    for (let i = 0; i < elementosLadoEsquerdo.length; i++) {
        if (elementosLadoEsquerdo[i] === '+' && elementosLadoEsquerdo[i - 1].toString().includes('x') === false && elementosLadoEsquerdo[i + 1].toString().includes('x') === false) {
            resultadoLadoEsquerdo.push(soma(elementosLadoEsquerdo[i - 1], elementosLadoEsquerdo[i + 1], ''));
            elementosLadoEsquerdo[i + 1] = soma(elementosLadoEsquerdo[i - 1], elementosLadoEsquerdo[i + 1], '');
            elementosLadoEsquerdo[i - 1] = 0;
        }
        if (elementosLadoEsquerdo[i] === '+' && elementosLadoEsquerdo[i - 1].toString().includes('x') && elementosLadoEsquerdo[i + 1].toString().includes('x')) {
            resultadoLadoEsquerdo.push(soma(elementosLadoEsquerdo[i - 1], elementosLadoEsquerdo[i + 1], 'x'));
            elementosLadoEsquerdo[i + 1] = soma(elementosLadoEsquerdo[i - 1], elementosLadoEsquerdo[i + 1], 'x');
            elementosLadoEsquerdo[i - 1] = 0;
        }
    }
    console.log(resultadoLadoEsquerdo);

    console.log(elementosLadoEsquerdo);
    let ladoEsquerdoSemIncognita = parseFloat(eval(ladoEsquerdo));
    console.log(ladoEsquerdoSemIncognita);
    let ladoDireitoSemIncognita = parseFloat(eval(ladoDireito));
    console.log(ladoDireitoSemIncognita);

    let resultadoEntreLados = (parseFloat(ladoDireitoSemIncognita) - parseFloat(ladoEsquerdoSemIncognita));
    console.log(resultadoEntreLados);
    console.log(somaCoeficientesEsquerdo);
    let resultadoCoeficiente = parseFloat(somaCoeficientesEsquerdo) - parseFloat(somaCoeficientesDireito);
    console.log(resultadoCoeficiente);
    let resultadoFinal = resultadoEntreLados / resultadoCoeficiente;
    let solucao = `{(${parseFloat(ladoDireitoSemIncognita)} - ${parseFloat(ladoEsquerdoSemIncognita)}) /
    (${parseFloat(somaCoeficientesEsquerdo)} - ${parseFloat(somaCoeficientesDireito)})`;

    document.getElementById("resultado").innerHTML = "Resultado: " + incognita + " = " + resultadoFinal;
    document.getElementById("solucao").innerHTML = `Solução: ${incognita} = ${solucao}`;
}
