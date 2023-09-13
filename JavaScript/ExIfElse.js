// 1 - Faça um algoritmo para subtrair dois valores, e exibir o texto “sucesso”, se o resultado da operação for maior que 5. Senão, exibir o texto “falhou”.

const valor1 = 5;
const valor2 = 3;

let resultado = valor1-valor2;
console.log("Resultado 1: "+resultado);

if(resultado > 5){
    console.log("sucesso");
}
else{
    console.log("falhou");
}

// 2 - ler uma variável do tipo texto e exibir uma mensagem se o valor da variável for “casa”. Senão, outra mensagem deve ser exibida.

let texto = "folha";

if(texto == "casa"){
    console.log("A palavra é casa");
}else{
    console.log("A palavra é outra ");
}

// 3 - Faça um algoritmo para multiplicar dois valores, e exibir uma mensagem se o resultado for maior ou igual à 100. Senão, outra mensagem deve ser exibida.

let valor = (10*2);
if(valor>=100){
    console.log("passou");
}else{
    console.log("reprovado");
}

