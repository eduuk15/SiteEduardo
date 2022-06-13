/**
 * @author Eduardo Knopp
 * @since 13/06/2022
 *
 * Método responsável pela inserção de novos inputs que podem receber novos valores
 */
function insereValor() {
  // Criação do form proveniente do HTML
  let form = document.querySelector("form");
  // Criação de um ID aleatório
  const randomID = `${Date.now().toString(36)}${Math.random().toString(36).substr(2)}`;
  // Insere, antes do final do "form", um novo input, assim como um botão "Remover"
  form.insertAdjacentHTML('beforeend',
  `<div class="div" id="${randomID}">
            <input class="valor" type="text" placeholder="Insira o valor aqui">
            <input type="button" class="special_remove" value="Remover" onclick="removeValor('${randomID}')">
          </div>`);
}

/**
 * @author Eduardo Knopp
 * @since 13/06/2022
 *
 * Método responsável por remover um input adicionado pelo método "insereValor"
 *
 * @param {*} idToRemove
 */
function removeValor(idToRemove) {
  // Criação de "el", como elemento a ser removido do HTML
  const el = document.getElementById(idToRemove)
  // Remove "el" do HTML
  el.parentNode.removeChild(el)
}

/**
 * @author Eduardo Knopp
 * @since 13/06/2022
 *
 * Método responsável por calcular a média geométrica
 */
function calculaMedia() {
  // Criação de "valores", números recebidos dos inputs
    let valores = document.querySelectorAll(".valor");
    // Criação de "valor", que separa todos os "valores" encontrados num array
    let valor = [].map.call(valores, function (input) {
      return parseFloat(input.value);
    });

    let totalValores = 0
    let somaInversoValores = 0;
    // Enquanto "i" for menor que a quantidade de valores...
    for (let i = 0; i < valor.length; i++) {
        totalValores = valor.length;
        // Soma o inverso de cada um dos valores encontrados
        somaInversoValores += 1/valor[i];
    }

    // Criação do resultado que recebe a razão entre o total e a soma dos inversos
    let resultado = (totalValores) / (somaInversoValores);
    // Caso não exista resultado exibe um erro
    if (!resultado) {
      resultado = 'Não foi possível realizar o cálculo...';
    }

    // Mostra o resultado em tela
    document.getElementById("resultado").innerHTML = "Média Harmônica = " + resultado;
  }
