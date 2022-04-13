function calculaDeterminante() {
    var num1 = document.getElementById("1").value;
    var num2 = document.getElementById("2").value;
    var num3 = document.getElementById("3").value;
    var num4 = document.getElementById("4").value;
    var num5 = document.getElementById("5").value;
    var num6 = document.getElementById("6").value;
    var num7 = document.getElementById("7").value;
    var num8 = document.getElementById("8").value;
    var num9 = document.getElementById("9").value;
    var num10 = document.getElementById("10").value;
    var num11 = document.getElementById("11").value;
    var num12 = document.getElementById("12").value;
    var num13 = document.getElementById("13").value;
    var num14 = document.getElementById("14").value;
    var num15 = document.getElementById("15").value;
    var num16 = document.getElementById("16").value;
    
    var cofator1 = ((-1)**(document.getElementById("1").id) + 2)
    * (((num6 * num11 * num16) + (num10 * num15 * num8) + (num14 + num7 * num12))
    - ((num10 * num7 * num16) + (num6 * num15 * num12) + (num14 * num11 * num8)));

    var cofator2 = ((-1)**(document.getElementById("2").id) + 1)
    * (((num5 * num11 * num16) + (num9 * num15 * num8) + (num13 + num7 * num12))
    - ((num9 * num7 * num16) + (num5 * num15 * num12) + (num13 * num11 * num8)));

    var cofator3 = ((-1)**(document.getElementById("3").id) + 2)
    * (((num5 * num10 * num16) + (num9 * num14 * num8) + (num13 + num6 * num12))
    - ((num9 * num6 * num16) + (num5 * num14 * num12) + (num13 * num10 * num8)));

    var cofator4 = ((-1)**(document.getElementById("4").id) + 1)
    * (((num5 * num10 * num15) + (num9 * num14 * num7) + (num13 + num6 * num11))
    - ((num9 * num6 * num15) + (num5 * num14 * num11) + (num13 * num10 * num7)));

    var det = (num1 * cofator1) + (num2 * cofator2) + (num3 * cofator3) + (num4 * cofator4);
    document.getElementById("determinante").innerHTML = "det = " + det;
}
