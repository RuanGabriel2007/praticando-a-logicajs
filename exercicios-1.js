// ✅ 20 Exercícios de Lógica com JavaScript (nível iniciante)

// Declare três variáveis: uma string, um number e um booleano. Exiba o tipo de cada uma usando typeof.
let pessoa = "Ruan";
let placa = 22;
let possuiCarro = true;

console.log(typeof pessoa);
console.log(typeof placa);
console.log(typeof possuiCarro);


// Crie uma variável contendo seu nome usando aspas simples, outra usando aspas duplas e outra usando template string. Mostre todas no console.

let nome1 = 'Ruan';
let nome2 = "Ruan";
let nome3 = `Ruan`;

console.log(nome1);
console.log(nome2);
console.log(nome3);
// Declare uma variável idade usando let, depois reatribua um novo valor para ela. Exiba antes e depois.

let idadeee = 22;
console.log(idadeee);
idadeee = 23;
console.log(idadeee);

// Tente alterar o valor de uma variável criada com const e observe o erro. Explique com um comentário no código.

const nomeee = "Rodrigo";
console.log(nomeee);

//nome = "Anderson";
//console.log(nome);

//deu erro pois nao é possivel atribuir um novo valor a uma constante.


// Crie duas variáveis numéricas e exiba no console os resultados de: soma, subtração, multiplicação, divisão e resto da divisão.

let numero1 = 50
let numero2 = 5
console.log(numero1);
console.log(numero2);
let soma = numero1 + numero2;
let subtração = numero1 - numero2;
let multiplicação = numero1 * numero2;
let divisaooo = numero1 / numero2;
let resto = numero1 % numero2;

console.log(soma);
console.log(subtração);
console.log(multiplicação);
console.log(divisaooo);
console.log(resto);

// Crie uma variável nota e use operadores de comparação para verificar se a nota é maior que 7, igual a 10 e menor que 5.

let nota = 8

let notaMaiorQue7 = nota > 7; 
let notaIgualA10 = nota == 10;
let notaMenorQue5 = nota < 5;

console.log(nota);
console.log(notaMaiorQue7);
console.log(notaMenorQue5);

// Crie duas variáveis booleanas representando “acordou cedo” e “tomou café”. Use operadores lógicos (&&, ||, !) para testar condições.

let acordouCedo = true
let tomouCafe = false

let diaDeclassico = tomouCafe && acordouCedo; //E
let diaDeGuerra = tomouCafe || acordouCedo; //ou
let diaDePaz = !diaDeGuerra   //inverso

console.log(acordouCedo);
console.log(tomouCafe);
console.log(diaDeclassico);
console.log(diaDeGuerra);
console.log(diaDePaz);


// Declare uma variável com valor undefined e outra com valor null. Mostre o tipo de cada uma.

let profissao = undefined;
let placaDoJogo = null;

console.log(typeof profissao);
console.log(typeof placaDoJogo);

// Crie um array com 5 nomes. Exiba o primeiro e o último nome usando índice.

const ruan = ["dezoito", "thiago", "luiza", "andreia", "ivina"];
console.log(ruan[0]);
console.log(ruan[4]);

// Modifique o terceiro nome do array criado acima por outro nome. Mostre o array atualizado.

ruan[2] = "debora";
console.log(ruan);

// Crie um array com 3 números e mostre a soma deles usando os índices.

const numero = [10, 20, 40];
let acrescetando = numero[0] - numero[1];
let vezes = numero[1] * numero[2];
console.log(numero);
console.log(vezes);
console.log(acrescetando);


// Crie um objeto representando uma pessoa com nome, idade e cidade. Exiba cada propriedade separadamente.

 const identificacao = {
    nome: "Luiza",
    idade: 22,
    cidade: "fortaleza",
};
console.log(identificacao);
console.log(identificacao.nome);
console.log(identificacao.idade);
console.log(identificacao.cidade);

// Adicione a esse objeto uma nova propriedade chamada profissao. Mostre o objeto atualizado.

identificacao.profissao = "fisioterapia";

console.log(identificacao.profissao);

// Delete a propriedade idade do objeto. Exiba o objeto novamente.

delete identificacao.idade;
console.log(identificacao)

// Crie um objeto representando um produto (nome e preço). Mostre o tipo de cada propriedade usando typeof.

const produto = {
    marca: "Iphone",
    valor: 70,  
};
console.log(produto);
console.log(typeof produto.marca);
console.log(typeof produto.valor);

// Crie um array com 3 objetos representando alunos (nome e nota). Exiba apenas a nota do segundo aluno.

const alunos = [
    { nome: "Luis", nota: 7},
    { nome: "Fernando", nota: 9},
    { nome: "Emannuel", nota: 10}
]
console.log(alunos["1"].nota)

// Crie um array com tipos misturados (string, number, boolean). Exiba o tipo de cada item.

const misturas = ["Aniversario", 18, true];
console.log(typeof misturas);

// Use template string para exibir uma frase como: “Meu nome é X e tenho Y anos”, usando variáveis.

let nome = "Fabio";
let  idadeii = 22;
console.log(`meu nome é ${nome} e tenho ${idadeii} anos`);

// Crie uma variável saldo e outra gasto. Use operadores matemáticos para atualizar o valor do saldo e exibir o resultado.

let saldo = 100;
let gastos = 2;
let divisao = saldo / gastos;
console.log(saldo);
console.log(gastos);
console.log(divisao);

// Crie duas variáveis: senhaCorreta e senhaDigitada. Use operadores lógicos para verificar se a senha está correta.

let senhaCorreta = "digittalcolleger";
let senhaDigitada = "estacio";
let senhaEstaCerta = senhaDigitada === senhaCorreta;      //O que o === faz? Ele pergunta: A senhaDigitada é igual à senhaCorreta?


console.log(senhaCorreta);
console.log(senhaDigitada);
console.log(senhaEstaCerta);