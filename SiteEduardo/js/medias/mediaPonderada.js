function insereValor() {
    let form = document.querySelector("form");
    form.insertAdjacentHTML('beforeend', '<div><input class="valor" type="number" placeholder="Insira o valor aqui"><input class="peso" type="number" placeholder="Insira o peso aqui"</div>');
}

function calculaMedia() {

    let valor = document.querySelectorAll(".valor");
    let valores = [].map.call(valor, function (input) {
      return parseFloat(input.value);
    });

    let peso = document.querySelectorAll(".peso");
    let pesos = [].map.call(peso, function (input) {
      return parseFloat(input.value);
    });

    let somaValores = 0
    let somaPesos = 0;
    for (let i = 0; i < valores.length; i++) {
        somaValores += valores[i] * pesos[i];
        somaPesos += pesos[i]
    }

    let resultado = somaValores / somaPesos;

    if (!resultado) {
      resultado = 'Não foi possível realizar o cálculo...';
    }

    document.getElementById("resultado").innerHTML = "Média Final = " + resultado;
  }
