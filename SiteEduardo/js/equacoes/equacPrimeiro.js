function calculaEquacao() {
    let sinais = ["+", "-"];
    let equacao = document.getElementById("equacao").value;
    let ladosIgualdade = equacao.split(" = ");

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

    console.log(equacao);
    console.log(ladosIgualdade);
    console.log(ladoEsquerdo);
    console.log(elementosLadoEsquerdo);
    console.log(ladoDireito);
    console.log(elementosLadoDireito);
}