const prompt = require('prompt-sync')();

let nota = prompt("Digite a nota (de 0 a 10): ");
nota = parseFloat(nota);

if (isNaN(nota) || nota < 0 || nota > 10) {
  console.log("Por favor, digite uma nota válida entre 0 e 10.");
} else {
  if (nota >= 7) {
    console.log("Aprovado");
  } else if (nota >= 5) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
}
