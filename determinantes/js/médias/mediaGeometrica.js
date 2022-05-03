function insereValor() {
    let form = document.querySelector("form");
    form.insertAdjacentHTML('beforeend', '<div><input class="valor" type="text" placeholder="Insira o valor aqui"></div>');
}

function calculaMedia() {

    let valor = document.querySelectorAll(".valor");
    let valores = [].map.call(valor, function (input) {
      return parseFloat(input.value);
    });

    console.log(valores);


    let totalValores = 0
    let produtoValores = 1;
    for (let i = 0; i < valores.length; i++) {
        totalValores = valores.length;
        produtoValores *= valores[i];
        
        console.log(totalValores);
        console.log(produtoValores);
    }

    let resultado = (produtoValores) ** (1/totalValores);
    console.log(resultado);

    if (!resultado) {
      resultado = 'Não foi possível realizar o cálculo...';
    }

    document.getElementById("resultado").innerHTML = "Média Geométrica = " + resultado;
  }
