function converterParaMaiusculas(palavra) {
    const mensagem = "mensagem"
    palavra = palavra.toUpperCase()
    console.log(palavra);
}
let palavra = "comida"
converterParaMaiusculas(palavra);
console.log("Não é possível acessar a constante mensagem devido ao fato de caso ela seja declarada dentro de uma função somente podera ser usada dentro da mesma.")