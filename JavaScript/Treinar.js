// 1 - subtrair dois valores, e exibir o texto “sucesso”, se o resultado da operação for igual ou maior que 100. E se, o resultado for menor que 50, exibir a mensagem “média”
let sub1 = 150;
let sub2 = 10;
let subtracao = sub1-sub2;
if(subtracao >=100){
    console.log("sucesso");
}
if(subtracao<50){
    console.log("média");
}
// 2 -  ler uma variável do tipo texto e exibir uma mensagem se o valor da variável for “casa”. E se e o valor for “moto” exibir outra mensagem.
let texto = "polia";

if(texto == "casa"){
    console.log("É CASA");
}
if(texto == "moto"){
    console.log("é moto");
}

// 3 - multiplicar dois valores, e exibir uma mensagem se o resultado for maior ou igual à 100. Senão, outra mensagem deve ser exibida.

let mult1 = 5;
let mult2 = 5;

if((mult1*mult2)>=100){
    console.log("maior que 100");
}
else{
    console.log("menor que 100")
}

// 4 - ler um número inteiro, armazenar em uma variável, calcular o dobro, e exibir. 

const var4 = 85;
const dobro = var4 * 2;
console.log(dobro);

console.log(var4*2)

console.log(95*2)

// 5 - ler três números inteiros, armazenar em variáveis, e exibir a soma, a subtração, multiplicação e a média dos três números digitados. 

const var1 = 10;
const var2 = 20;
let var3 = 30;

const soma =  var1+var2+var3;
console.log("o valor é: " + soma);

let sub = var3-var2-var1;
console.log("subtração "+sub);

const mult = var3*var2*var1;
console.log("multiplicação "+mult);

//média = somar/3

let media = soma/3;
console.log("media "+media)

/* 6 - ler duas notas, calcular a média. 
E SE - a média > 5 Exibir aprovado;
SE a média < que 5 exibir reprovado;
Se media = 5 exibir exame.*/

// media = soma/2

const nota1 = 5;
const nota2 = 8;

const med = (nota1+nota2)/2;
console.log("média "+med)

if(med>5){
    console.log("Aprovado");
}
if(med<5){
    console.log("Reprovado");
}
if(med==5){
    console.log("Exame");
}