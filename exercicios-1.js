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

let idade = 22;
console.log(idade);
idade = 23;
console.log(idade);
// Tente alterar o valor de uma variável criada com const e observe o erro. Explique com um comentário no código.
const nome = "Rodrigo";
console.log(nome);

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
let divisao = numero1 / numero2;
let resto = numero1 % numero2;

console.log(soma);
console.log(subtração);
console.log(multiplicação);
console.log(divisao);
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

let diaDeclassico = tomouCafe 
// Declare uma variável com valor undefined e outra com valor null. Mostre o tipo de cada uma.

// Crie um array com 5 nomes. Exiba o primeiro e o último nome usando índice.

// Modifique o terceiro nome do array criado acima por outro nome. Mostre o array atualizado.

// Crie um array com 3 números e mostre a soma deles usando os índices.

// Crie um objeto representando uma pessoa com nome, idade e cidade. Exiba cada propriedade separadamente.

// Adicione a esse objeto uma nova propriedade chamada profissao. Mostre o objeto atualizado.

// Delete a propriedade idade do objeto. Exiba o objeto novamente.

// Crie um objeto representando um produto (nome e preço). Mostre o tipo de cada propriedade usando typeof.

// Crie um array com 3 objetos representando alunos (nome e nota). Exiba apenas a nota do segundo aluno.

// Crie um array com tipos misturados (string, number, boolean). Exiba o tipo de cada item.

// Use template string para exibir uma frase como: “Meu nome é X e tenho Y anos”, usando variáveis.

// Crie uma variável saldo e outra gasto. Use operadores matemáticos para atualizar o valor do saldo e exibir o resultado.

// Crie duas variáveis: senhaCorreta e senhaDigitada. Use operadores lógicos para verificar se a senha está correta.