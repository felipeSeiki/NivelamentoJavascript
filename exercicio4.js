InputEvent("Escreva uma letra: ", letra)

do{
    switch (letra) {
        case "A":
            console.log("Opção A selecionada")
            break;
        case "B":
            console.log("Opção B selecionada")
            break;
        case "S":
            console.log("Saindo.")
            break;
        default:
            console.log("Opção inválida")
            break;
    }
} while(letra != "S");

