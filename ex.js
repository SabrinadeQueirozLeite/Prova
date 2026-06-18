
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
