// for (let i = 1; i<= 5; i++){
//     console.log(` ${i} `);
// }

// for (let a = 0; a <= 9; a++){
//     console.log(`5 x ${a} = ${5 * a}`)
// }

// for (let b = 0; b <= 9; b++){
//     console.log(`5 x ${b} = ${9 * b}`)
// }

// function tabuada(operacao){
//     console.log(`tabuada de ${operacao}`)
//     for (let k = 1; k <=9; k++ ){
//         console.log(`${operacao} x ${k} = ${operacao * k}`);
//     }
// }
// tabuada(2)

// const CestaDeFruta =  ["Banana", "Uva", "Morango", "Abacaxi"];
// for (let i = 0; i < CestaDeFruta.length; i++){
//     if (CestaDeFruta[i] === "Uva"){
//         CestaDeFruta[i] = "Manga";
//     }
// }
// console.log(CestaDeFruta)

const estoque = [
  {
    marca: "Nike",
    preco: 300.0,
    quantidade: 30,
    tamanho: [37, 38, 39, 40],
  },
  {
    marca: "Adidas",
    preco: 450.0,
    quantidade: 20,
    tamanho: [37, 38, 39, 40],
  },
  {
    marca: "Puma",
    preco: 550.0,
    quantidade: 60,
    tamanho: [37, 38, 39, 40],
  },
  {
    marca: "Asics",
    preco: 299.0,
    quantidade: 70,
    tamanho: [37, 38, 39, 40],
  },
];
estoque.forEach(tenis => {
    tenis.quantidade -=10;
});

estoque.forEach(tenis => {
(estoque.marca === "Nike") 
{estoque.preco = 400.00}             
});

estoque.forEach(tenis =>{
    if (tenis.marca === "Asics"){
        tenis.tamanho.push(42);
    }
})



console.log(estoque)



//1- houve um erro no estoque e a quantidade de todos os tenis diminuiu em 10 tenis, ou seja, reduza 10 unidades de cada tenis
//2- o tenis nike teve reajuste de preco para 400.00
//3- o asics recebeu uma nova numeracao (42)