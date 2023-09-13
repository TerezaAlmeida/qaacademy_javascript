function somar(){
    const a = 10;
    const b = 20;
    const resultado = a+b;
    console.log(resultado);
}

function subtracao(){
    const a = 100;
    const b = 50;
    const resultado = a-b;
    console.log(resultado);
}


function somaComParametro(a,b){
    const soma = a+b // soma
    console.log(soma)
}
//somaComParametro(15,25)


// numero + numero => soma
// texto + texto => concatenação/ juntar
// texto + numero => concatenação/ juntar

function subtracaoComParametro(x,y){
    const sub = x-y;
    console.log("Valor da subtração: "+sub);
}
//subtracaoComParametro(50,25)


function exemploRetorno(){
    //...
    return true;
}

// if(exemploRetorno() == false){
//     console.log("maior")
// }
// else{
//     console.log("menor");
// }

function somaComRetorno(a,b,i){
    const somatoria = a+b+i;
    return somatoria;
}

//console.log(somaComRetorno(10,20,30))

function subtracaoComRetorno(x,y,z){
    const subtracao = y-x-z
    return subtracao
}
//console.log(subtracaoComRetorno(25,85,850))

// Ex 2 - Crie um método que retorne a multiplicação de 2 valores e imprima o retorno.

function mult(a,b){
    const mult = a*b;
    return mult;
}

console.log(mult(52,10))

// 3 -Crie um método que retorne uma frase e imprima o retorno. 

function imprimirFrase(frase){
    return frase;
}
console.log(imprimirFrase("o amor é lindo"));

// 1-) Faça um método sem retorno e sem parâmetro para ler e exibir uma palavra.

function palavraSemRetorno(){
    const palavra = "mousepad";
    console.log(palavra)
}
palavraSemRetorno();

//2-) Faça um método com retorno que receba como parâmetro 
//dois valores e retorne os valores das variáveis, trocados.

function trocarValores(valor1,valor2){
    const trocar = valor2;
    valor2 = valor1;
    valor1 = trocar;

    //console.log("valor1:"+valor1 + " valor2:"+ valor2)
    console.log("valor1:" +valor1+ " valor2:" + valor2);
}
trocarValores(30,20);

// 3-)Faça um método com retorno que receba como parâmetro um número inteiro e
// retorne true se o valor do parâmetro divido por 2 for igual a 0. 
//Caso contrário, retornar false.

function dividirPorDois(param){
    return param;
}
const valor = dividirPorDois(15);

if(valor/2 == 0){
    console.log("igual a zero")
    return true;
}
else{
    console.log("retorno inválido")
    return false;
}



