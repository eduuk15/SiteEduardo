function insereNota() {
    var form = document.querySelector("form");
    form.insertAdjacentHTML('beforeend', '<div><input class="nota" type="text" placeholder="Insira sua nota aqui"><input class="peso" type="text" placeholder="Insira o peso da prova"></div>');
}

function calculaMedia() {
    // var notas = document.querySelector(".nota").value;
    // console.log(notas);

    let nota = document.querySelectorAll(".nota");

        let notas = [].map.call(nota, function (input) {
          return input.value;
        })

        console.log(notas);
}