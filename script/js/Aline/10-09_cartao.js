// Aula de JavaScript 10 de setembro de 2025

// Exemplo de utilização de condicional switch-case (condicional com multiplas possibilidades de "se)"

var cartao = "1";

switch (cartao) {
    case "1":
        console.log("Você pediu um cartão novo");
        break;

    case "2":
        console.log("Sua fatura é R$500.00")
        break;

    case "3":
        console.log("Seu limite é de R$1000,00");
        break;
    
    case "4":
        console.log("VocÊ pediu um empréstimo");
        break;
    
    default:
        console.log("Você falará com um atendente")
}
