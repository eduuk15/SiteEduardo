function insereValor() {
    let form = document.querySelector("form");
    const randomID = `${Date.now().toString(36)}${Math.random().toString(36).substr(2)}`;
    form.insertAdjacentHTML('beforeend', '<div class="div" id="' + randomID + '"><input class="valor" type="text" placeholder="Insira o valor aqui"><input type="button" class="special_remove" value="Remover" onclick="removeValor(\'' + randomID +'\')"></div>');
}

function removeValor(idToRemove) {
  const el = document.getElementById(idToRemove)
  el.parentNode.removeChild(el)
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
