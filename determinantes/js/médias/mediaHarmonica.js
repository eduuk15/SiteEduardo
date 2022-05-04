function insereValor() {
    let form = document.querySelector("form");
    form.insertAdjacentHTML('beforeend', '<div><input class="valor" type="text" placeholder="Insira o valor aqui"></div>');
}

function calculaMedia() {

    let valor = document.querySelectorAll(".valor");
    let valores = [].map.call(valor, function (input) {
      return parseFloat(input.value);
    });

    let totalValores = 0
    let somaInversoValores = 0;
    for (let i = 0; i < valores.length; i++) {
        totalValores = valores.length;
        somaInversoValores += 1/valores[i];
    }

    let resultado = (totalValores) / (somaInversoValores);

    if (!resultado) {
      resultado = 'Não foi possível realizar o cálculo...';
    }

    document.getElementById("resultado").innerHTML = "Média Harmônica = " + resultado;
  }
