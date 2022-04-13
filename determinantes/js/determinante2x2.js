function calculaDeterminante() {
    var num1 = document.getElementById("1").value;
    var num2 = document.getElementById("2").value;
    var num3 = document.getElementById("3").value;
    var num4 = document.getElementById("4").value;

    var det = ((num1 * num4) - (num2 * num3));
    document.getElementById("determinante").innerHTML = "det = " + det;
}