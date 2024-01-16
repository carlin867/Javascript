var idade = 18;
if (idade < 16) {
  console.log("Não Vota!");
} else {
  if (idade == 16 || idade == 17) {
    console.log("Voto Opcional!");
  } else {
    console.log("Voto Obrigatorio!");
  }
}
