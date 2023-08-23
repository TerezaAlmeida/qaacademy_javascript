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

if(exemploRetorno() == false){
    console.log("maior")
}
else{
    console.log("menor");
}

function somaComRetorno(a,b,i){
    const somatoria = a+b+i;
    return somatoria;
}

//console.log(somaComRetorno(10,20,30))

function subtracaoComRetorno(x,y,z){
    const subtracao = y-x-z
    return subtracao
}
console.log(subtracaoComRetorno(25,85,850))