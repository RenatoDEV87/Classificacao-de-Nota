# Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

# Exercício 03 – Classificação de Nota

---

## 📑 Índice

1. [📖 Descrição](#descrição)  
2. [💻 Código](#código)  
3. [🚀 Como Executar](#como-executar)   
4. [🛠️ Tecnologias Utilizadas](#tecnologias-utilizadas)  
5. [📜 Licença](#licença)  

---

## Descrição

Este programa em JavaScript solicita que o usuário digite uma nota de **0 a 10** e classifica o resultado como:

- **Aprovado**: nota igual ou maior que 7  
- **Recuperação**: nota entre 5 e 6.9  
- **Reprovado**: nota menor que 5  

A classificação é feita utilizando estruturas de controle `if-else if`, ideal para quem está aprendendo os fundamentos da linguagem.

---

## Código

Abaixo está o código-fonte do programa:

```JavaScript
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

```

---

## Como Executar

🛠️ Instruções para executar localmente

1. Instale o Node.js se ainda não tiver: https://nodejs.org

2. Abra o terminal e instale o prompt-sync (usado para entrada do usuário):

```
npm install prompt-sync
```

3. Salve o arquivo como `exercicio_02.js` e execute com:

```
node exercicio_02.js
```

---

## Tecnologias Utilizadas

- Linguagem: JavaScrpit
- Node.Js

---

## Licença

Este projeto está licenciado sob a MIT License.

