function leValoresForm() {
    valores = []
    for (let i = 1; i < 17; i++) {
        valores.push(document.getElementById(`${i}`).value);
    }
    return valores;
}

function calculaDeterminante() {
    valores = leValoresForm();

    cofatores = [];

    let det1 = ((valores[5] * valores[10] * valores[15]) + (valores[9] * valores[14] * valores[7]) + (valores[13] * valores[6] * valores[11]))
    - ((valores[9] * valores[6] * valores[15]) + (valores[5] * valores[14] * valores[11]) + (valores[13] * valores[10] * valores[7]));
    let cofator1 = 1 * det1;

    let det2 = ((valores[4] * valores[10] * valores[15]) + (valores[8] * valores[14] * valores[7]) + (valores[12] * valores[6] * valores[11]))
    - ((valores[8] * valores[6] * valores[15]) + (valores[4] * valores[14] * valores[11]) + (valores[12] * valores[10] * valores[7]));
    let cofator2 = (-1) * det2;

    let det3 = ((valores[4] * valores[9] * valores[15]) + (valores[8] * valores[14] * valores[7]) + (valores[12] * valores[5] * valores[11]))
    - ((valores[8] * valores[5] * valores[15]) + (valores[4] * valores[14] * valores[11]) + (valores[12] * valores[9] * valores[7]));
    let cofator3 = 1 * det3;

    let det4 = ((valores[4] * valores[9] * valores[14]) + (valores[8] * valores[13] * valores[6]) + (valores[12] * valores[5] * valores[10]))
    - ((valores[8] * valores[5] * valores[14]) + (valores[4] * valores[13] * valores[10]) + (valores[12] * valores[9] * valores[6]));
    let cofator4 = (-1) * det4;

    let resultado = (valores[0] * cofator1) + (valores[1] * cofator2) + (valores[2] * cofator3) + (valores[3] * cofator4);

    cofatores.push(cofator1, cofator2, cofator3, cofator4);

    for (let i = 1; i < 10; i++) {
        if (document.getElementById(`${i}`).value === "") {
            resultado = "Todos os campos devem ser preenchidos."
        }
    }
    document.getElementById("determinante").innerHTML = "det = " + resultado;

    return cofatores
}

function transpoeMatriz() {
    valores = leValoresForm();

    document.getElementById("5").value = valores[1];
    document.getElementById("9").value = valores[2];
    document.getElementById("13").value = valores[3];
    document.getElementById("2").value = valores[4];
    document.getElementById("10").value = valores[6];
    document.getElementById("14").value = valores[7];
    document.getElementById("3").value = valores[8];
    document.getElementById("7").value = valores[9];
    document.getElementById("15").value = valores[11];
    document.getElementById("4").value = valores[12];
    document.getElementById("8").value = valores[13];
    document.getElementById("12").value = valores[14];
}

function mostraSolucao() {

    cofatores = calculaDeterminante();

    document.getElementById("17").value = valores[0];
    document.getElementById("18").value = valores[4];
    document.getElementById("19").value = valores[8];
    document.getElementById("20").value = valores[12];
    document.getElementById("21").value = valores[1];
    document.getElementById("22").value = valores[5];
    document.getElementById("23").value = valores[9];
    document.getElementById("24").value = valores[13];
    document.getElementById("25").value = valores[2];
    document.getElementById("26").value = valores[6];
    document.getElementById("27").value = valores[10];
    document.getElementById("28").value = valores[14];
    document.getElementById("29").value = valores[3];
    document.getElementById("30").value = valores[7];
    document.getElementById("31").value = valores[11];
    document.getElementById("32").value = valores[15];

    document.getElementById("solucao").innerHTML = '(' + valores[0] + ' X ' + cofatores[0] + ')' + ' + ' + '(' + valores[1] + ' X ' + cofatores[1] + ')' + ' + ' + '(' + valores[2] + ' X ' + cofatores[2] + ')' + ' + ' + '(' + valores[3] + ' X ' + cofatores[3] + ')';
}
