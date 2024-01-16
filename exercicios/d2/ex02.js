function verificar() {
  var ano = document.getElementById("ano");
  var res = document.getElementById("res");
  var data = new Date();
  var agora = data.getFullYear();

  if (ano.value.length == 0 || Number(ano.value) > agora) {
    alert("Verifique os Dados novamente!");
  } else {
    var sex = document.getElementsByName("sexo");
    var idade = agora - Number(ano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "imagem");
    if (sex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 12) {
        img.setAttribute("src", "imagens/h-criança.webp");
      } else if (idade >= 12 && idade < 18) {
        img.setAttribute("src", "imagens/h-adolescente.jpeg");
      } else if (idade >= 18 && idade < 65) {
        img.setAttribute("src", "imagens/h-adulto.jpg");
      } else {
        img.setAttribute("src", "imagens/h-idoso.jpg");
      }
    } else {
      genero = "Mulher";
      if (idade >= 0 && idade < 12) {
        img.setAttribute("src", "imagens/m-criança.webp");
      } else if (idade >= 12 && idade < 18) {
        img.setAttribute("src", "imagens/m-adolescente.jpg");
      } else if (idade >= 18 && idade < 65) {
        img.setAttribute("src", "imagens/m-adulta.jpg");
      } else {
        img.setAttribute("src", "imagens/m-idosa.jpg");
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Idade e Gênero Calculados: ${idade} anos e ${genero}`;
    res.appendChild(img);
  }
}
