function operacoesMatematica (num1, num2, operacao)  {
    if (operacao === "somar"){
        return num1 + num2;
    }
    else if (operacao === "subtrair"){
        return num1 - num2;
    }
    else if (operacao == "multiplicar")
        return num1 * num2;
    else{
        return num1 / num2;
    }
}
console.log(operacoesMatematica (10, 20, "somar"));


function verificaMaiorIdade(idade){
if (idade >= 19){
    return "Voce é maior de idade"
}
else if(idade >=13){
    return "Voce é adolescente"
}
else if(idade <=12){
    return ("Voce é criança")
}
}

const pessoa1 = verificaMaiorIdade(24)
const pessoa2 = verificaMaiorIdade(15)
const pessoa3 = verificaMaiorIdade(11)
console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)

function verificarRoupa (calca, camisa){
    if (calca == "preto" && camisa == "preto"){
        return ("Voce pode entrar")
    }
    else {
        return ("Voce nao pode entrar")
    }
}
const convidado1 = verificarRoupa("preto", "preto")
const convidado2 = verificarRoupa("azul", "rosa")
const convidado3 = verificarRoupa("preto", "marrom")

console.log(convidado1)
console.log(convidado2)
console.log(convidado3)

function verificaDiaSemana(diaSemana){
    switch(diaSemana){
        case 1:
            return "Domingo"
         case 2:
            return "Segunda"
            case 3:
            return "Terca"
            case 4:
            return "Quarta"
            case 5:
            return "Quinta"
            case 6:
            return "Sexta"
            case 7:
            return "Sabado"
    }
}


let cor = "vermelho";
switch(cor){
    case "vermelho":
        console.log("A cor é vermelho.");
    case "azul":
        console.log("A cor é azul.");
    case "amarelo":
        console.log("A cor é amarelo.");
}

let idade = 20;
let status = idade>=18 ? "Maior de idade" : "Menor de idade"
console.log(status)

function notaRecuperacao(nota1,nota2,){
const media = (nota1 + nota2)/2
    if ( media>= 7){
    return ("Voce esta aprovado!!")
}
else if(media>=5){
    return ("Voce esta de recuperacao!!")
}
else if(media<=4){
    return ("Voce esta reprovado!!")
}
}
console.log(notaRecuperacao(10, 10))