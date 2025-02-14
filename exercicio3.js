const numero = 9;
let contagem = 1;
let l = 1
let soma = l


if(numero > 0){
    console.log("Número é positivo!");
} else if(numero < 0){
    console.log("Número é negativo!");
} else{
    console.log("Número é 0!")
}

for(i = 1; i <= 10; i++){
    console.log(i);
}

while(contagem <= 5){
    soma += contagem;
    contagem++;
    console.log("Soma: ", soma);
}