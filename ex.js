
// 1 - Desconto 
const valorCompra = 2500;

let desconto = 0;

if (valorCompra >= 1000) {
    desconto = 0.20;
} else if (valorCompra >= 500 && valorCompra < 1000) {
    desconto = 0.10;
} else {
    desconto = 0;
}

const valorFinal = valorCompra - (valorCompra * desconto);

console.log(`Valor final: R$ ${valorFinal}`);

//2 - Sistema de pontos de fidelidade

const categoria = "Ouro";

switch (categoria) 

{
    case "Ouro":
    console.log('Parabéns, você ganhou 20 pontos!');
    break;

    case "Prata":
    console.log('Parabéns, você ganhou 15 pontos!')
    break;

    case "Bronze":
    console.log('Parabéns, você ganhou 10 pontos!')
    break;

    default:
    console.log('Categoria Inválida');

}

// 3 Frequência de Fibonacci
let a = 0
let b = 1

console.log("Os 10 primeiros termos da Sequência de Fibonacci:")
for (let i = 0; i < 10; i++) {


    console.log(a);

    let proximo = a + b;
    a = b;
    b = proximo;
}

//4 - Bateria
let nivelBateria = 100;
    while (nivelBateria > 0)
        {
    console.log (`Nível de bateria ${nivelBateria}%`)
nivelBateria -= 10}
console.log (`Bateria esgotada ${nivelBateria}%!`)

//5

//6 - Aprovação Escolar
const nota1 = 8;
const nota2 = 9;
const nota3 = 7
const nota4 = 8;
const media = (nota1 + nota2 + nota3 + nota4) / 4;
const frequencia = 85;
if (media >= 6 && frequencia >= 75) {
    console.log("Aprovado");
}    else {
console.log("Reprovado");
}

// 7 - Menor Número
const listaDeNumeros = [90, 55, 100, 40, 20]
let menorNumero = listaDeNumeros [0];
for (const numero of listaDeNumeros) {
    if (numero < menorNumero) {
 menorNumero = numero;}
}

console.log(`O menor número na lista é: ${menorNumero}`)
