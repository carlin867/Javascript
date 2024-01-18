var sel = document.querySelector("select#res");
var num = document.getElementById("n");
var res = document.getElementById("r");
var valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}
function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `O valor adicionado foi ${num.value}`;
    sel.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("Valor Inválido ou já encontrado na lista.");
  }
  num.value = "";
  num.focus();
}
function finalizar() {
  if (valores.length == 0) {
    alert("Digite  Por Favor!!!");
  } else {
    var total = valores.length;
    var maior = valores[0]
    var menor = valores[0]
    var soma = 0
    var media = 0
    for(var pos in valores){
      soma = soma + valores[pos]
      media = soma / total
      if(valores[pos] > maior){
        maior = valores[pos]
      }
      if(valores[pos < menor]){
        menor = valores[pos]
      }
    }

    res.innerHTML = "";

    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados!</p>`;
    res.innerHTML += `<p>O maior Valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor Valor informado foi ${menor}</p>`
    res.innerHTML += `<p>A soma de todos os numeros é ${soma}</p>`
    res.innerHTML += `<p>A média de todos os numeros é ${media}</p>`
    
  }
}
