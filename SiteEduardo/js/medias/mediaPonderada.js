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
  // Insere, antes do final do "form", dois novos inputs, assim como um botão "Remover"
  form.insertAdjacentHTML('beforeend',
  `<div class="div" id="${randomID}">
            <input class="valor" type="number" placeholder="Insira o valor aqui">
            <input class="peso" type="number" placeholder="Insira o peso aqui">
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
  const el = document.getElementById(idToRemove);
  // Remove "el" do HTML
  el.parentNode.removeChild(el);
}

/**
 * @author Eduardo Knopp
 * @since 13/06/2022
 *
 * Método responsável por calcular a média ponderada
 */
function calculaMedia() {
  // Criação de "valores", números recebidos dos inputs
  let valores = document.querySelectorAll(".valor");
  // Criação de "valor", que separa todos os "valores" encontrados num array
  let valor = [].map.call(valores, function (input) {
    return parseFloat(input.value);
  });

  // Criação de "pesos", números recebidos dos inputs
  let pesos = document.querySelectorAll(".peso");
  // Criação de "peso", que separa todos os "pesos" encontrados num array
  let peso = [].map.call(pesos, function (input) {
    return parseFloat(input.value);
  });

  let somaValores = 0
  let somaPesos = 0;
  // Enquanto "i" for menor que a quantidade de valores...
  for (let i = 0; i < valor.length; i++) {
    // Soma o produto de cada valor pelo seu respectivo peso
      somaValores += valor[i] * peso[i];
      // Soma os pesos encontrados
      somaPesos += peso[i]
  }

  // Criação do resultado que recbe a razão entre a soma dos produtos do valores e a soma do pesos
  let resultado = somaValores / somaPesos;
  // Caso não exista resultado, exibe um erro
  if (!resultado) {
    resultado = 'Não foi possível realizar o cálculo...';
  }

  // Mostra o resultado em tela
  document.getElementById("resultado").innerHTML = "Média Final = " + resultado;
}
