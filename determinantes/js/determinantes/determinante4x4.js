function calculaDeterminante() {
    let num1 = document.getElementById("1").value;
    let num2 = document.getElementById("2").value;
    let num3 = document.getElementById("3").value;
    let num4 = document.getElementById("4").value;
    let num5 = document.getElementById("5").value;
    let num6 = document.getElementById("6").value;
    let num7 = document.getElementById("7").value;
    let num8 = document.getElementById("8").value;
    let num9 = document.getElementById("9").value;
    let num10 = document.getElementById("10").value;
    let num11 = document.getElementById("11").value;
    let num12 = document.getElementById("12").value;
    let num13 = document.getElementById("13").value;
    let num14 = document.getElementById("14").value;
    let num15 = document.getElementById("15").value;
    let num16 = document.getElementById("16").value;

    let cofator1 = ((-1)**parseInt((document.getElementById("1").id) + 1))
    * (((num6 * num11 * num16) + (num10 * num15 * num8) + (num14 + num7 * num12))
    - ((num10 * num7 * num16) + (num6 * num15 * num12) + (num14 * num11 * num8)));
    console.log(cofator1);

    let cofator2 = ((-1)**parseInt((document.getElementById("2").id) + 1))
    * (((num5 * num11 * num16) + (num9 * num15 * num8) + (num13 + num7 * num12))
    - ((num9 * num7 * num16) + (num5 * num15 * num12) + (num13 * num11 * num8)));
    console.log(cofator2);

    let cofator3 = ((-1)**parseInt((document.getElementById("3").id) + 1))
    * (((num5 * num10 * num16) + (num9 * num14 * num8) + (num13 + num6 * num12))
    - ((num9 * num6 * num16) + (num5 * num14 * num12) + (num13 * num10 * num8)));
    console.log(cofator3);

    let cofator4 = ((-1)**(parseInt(document.getElementById("4").id) + 1))
    * (((num5 * num10 * num15) + (num9 * num14 * num7) + (num13 + num6 * num11))
    - ((num9 * num6 * num15) + (num5 * num14 * num11) + (num13 * num10 * num7)));
    console.log(cofator4);
    console.log(parseInt(document.getElementById("4").id) + 1);

    let det = (num1 * cofator1) + (num2 * cofator2) + (num3 * cofator3) + (num4 * cofator4);
    document.getElementById("determinante").innerHTML = "det = " + det;
}

function transpoeMatriz() {
    let num5 = document.getElementById("5").value;
    let num9 = document.getElementById("9").value;
    let num13 = document.getElementById("13").value;
    let num2 = document.getElementById("2").value;
    let num10 = document.getElementById("10").value;
    let num14 = document.getElementById("14").value;
    let num3 = document.getElementById("3").value;
    let num7 = document.getElementById("7").value;
    let num15 = document.getElementById("15").value;
    let num4 = document.getElementById("4").value;
    let num8 = document.getElementById("8").value;
    let num12 = document.getElementById("12").value;

    document.getElementById("5").value = num2;
    document.getElementById("9").value = num3;
    document.getElementById("13").value = num4;
    document.getElementById("2").value = num5;
    document.getElementById("10").value = num7;
    document.getElementById("14").value = num8;
    document.getElementById("3").value = num9;
    document.getElementById("7").value = num10;
    document.getElementById("15").value = num12;
    document.getElementById("4").value = num13;
    document.getElementById("8").value = num14;
    document.getElementById("12").value = num15;
}
