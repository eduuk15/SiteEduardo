
function calculaEquacao() {

    const soma = (elemento1, elemento2, x) => {
        return (parseFloat(elemento1) + parseFloat(elemento2)) + x;
    }

    const multiplicacao = (x, elemento) => {
        return x * parseFloat(elemento);
    }

    const subtracao = (elemento1, elemento2, x) => {
        return (parseFloat(elemento1) - parseFloat(elemento2)) + x;
    }

    const divisao = (x, elemento) => {
        return 1/x * parseFloat(elemento);
    }

    let equacao = '5x + 3x - 2x + 4 * ( x - 2 ) - 5 * ( 2 - 3x ) = 4 * ( 2x - 6 )';

    let ladoEsquerdo = equacao.split(' = ');
    let ladoDireito = equacao.split(' = ');
    let elementosLadoEsquerdo = ladoEsquerdo.split(' ');

    let resultadoLadoEsquerdo = [];
    for (let i = 0; i < elementosLadoEsquerdo.length; i++) {
        if (elementosLadoEsquerdo[i] === '+' && elementosLadoEsquerdo[i - 1].toString().includes('x') === false && elementosLadoEsquerdo[i + 1].toString().includes('x') === false) {
            resultadoLadoEsquerdo.push(soma(elementosLadoEsquerdo[i - 1], elementosLadoEsquerdo[i + 1], ''));
            elementosLadoEsquerdo[i - 1] = 0;
            elementosLadoEsquerdo[i + 1] = soma(elementosLadoEsquerdo[i - 1], elementosLadoEsquerdo[i + 1], '');
            console.log(soma(elementosLadoEsquerdo[i - 1], elementosLadoEsquerdo[i + 1], ''));
        }
        if (elementosLadoEsquerdo[i] === '+' && elementosLadoEsquerdo[i - 1].toString().includes('x') && elementosLadoEsquerdo[i + 1].toString().includes('x')) {
            resultadoLadoEsquerdo.push(soma(elementosLadoEsquerdo[i - 1], elementosLadoEsquerdo[i + 1], 'x'));
            elementosLadoEsquerdo[i - 1] = 0;
            elementosLadoEsquerdo[i + 1] = soma(elementosLadoEsquerdo[i - 1], elementosLadoEsquerdo[i + 1], 'x');
            console.log(soma(elementosLadoEsquerdo[i - 1], elementosLadoEsquerdo[i + 1], 'x'));
        }

    }
}
