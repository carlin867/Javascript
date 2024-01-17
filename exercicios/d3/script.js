/*
Id's
inicio
fim
passo
contar
res
*/

function contar() {
  var res = document.getElementById("res");
  var inicio = document.getElementById("inicio");
  var fim = document.getElementById("fim");
  var passo = document.getElementById("passo");

  if (
    inicio.value.lenght == 0 ||
    fim.value.lenght == 0 ||
    passo.value.lenght == 0
  ) {
    alert("Digite algum Numero nas Caixas Por Favor!");
  } else {
    res.innerHTML = `Contando: `;
    var i = Number(inicio.value);
    var f = Number(fim.value);
    var p = Number(passo.value);

    if (i > f) {
      for (var c = i; c >= f; c = c - p) {
        res.innerHTML += `${c} `;
      }
    } else {
      for (var c = i; c <= f; c = c + p) {
        res.innerHTML += `${c} `;
      }
    }
  }
}
