// var obj = {
//     showContext: function showContext() {
//         setTimeout(() => {
//             this.log('after 1000ms');
//         }, 1000);
//     },
//     log: function log(value) {
//         console.log(value);
//     }
// };

// obj.showContext();

// var obj = {
//         showContext: function showContext() {
//             setTimeout(function() {
//                 this.log("teste");
//             }.bind(this), 1000);
//         },
//         log: function log(value) {
//             console.log(value);
//         }
//     };

//     obj.showContext();


// Estruturas de dados e algoritmos com JavaScript by Groner, Loiane (z-lib.org).pdf
// capitulo 1
console.log('5 & 1:', (5 & 1));
console.log('5 | 1:', (5 | 1));
console.log('~ 5:', (~5));
console.log('5 ^ 1:', (5 ^ 1));
console.log('5 << 1:', (5 << 1));
console.log('5 >> 1:', (5 >> 1));

console.log('typeof num:', typeof num);
console.log('typeof Packt:', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1, 2, 3]);
console.log('typeof {name:John}:', typeof { name: 'John' });

var myObj = { name: 'John', age: 21 };
delete myObj.age;
console.log(myObj); //exibe Object {name: "John"}


function testTruthy(val) {
    return val ? console.log('truthy') : console.log('falsy');
}
testTruthy(true); // true
testTruthy(false); // false
testTruthy(new Boolean(false)); // true (objeto é sempre true)
testTruthy(''); // false
testTruthy('Packt'); // true
testTruthy(new String('')); // true (objeto é sempre true)
testTruthy(1); // true
testTruthy(-1); // true
testTruthy(NaN); // false
testTruthy(new Number(NaN)); // true (objeto é sempre true)
testTruthy({}); // true (objeto é sempre true)
var obj = { name: 'John' };
testTruthy(obj); // true
testTruthy(obj.name); // true
testTruthy(obj.age); // age (propriedade não existe)

// Funções dos operadores deigualdade(== e ===)
console.log('packt' === true); //false
console.log('packt' === 'packt'); //true
var person1 = { name: 'John' };
var person2 = { name: 'John' };
console.log(person1 === person2); //false, objetos diferentes

// Estruturas decontrole
// Instruções condicionais
var num = 1;
if (num === 1) {
    console.log('num is equal to 1');
}

var num = 0;
if (num === 1) {
    console.log('num is equal to 1');
} else {
    console.log('num is not equal to 1, the value of num is ' + num);
}

if (num === 1) {
    num--;
} else {
    num++;
}

(num === 1) ? num-- : num++;

var month = 5;
if (month === 1) {
    console.log('January');
} else if (month === 2) {
    console.log('February');
} else if (month === 3) {
    console.log('March');
} else {
    console.log('Month is not January, February or March');
}

var month = 3;
switch (month) {
    case 1:
        console.log('Janeiro');
        break;
    case 2:
        console.log('Fevereiro');
        break;
    case 3:
        console.log('Março');
        break;
    default:
        console.log('O mês não é Janeiro, nem Fevereiro e nem Março');
}

// Laços
// No exemplo a seguir, temos um laço for
for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log('------------');
// O próximo laço que veremos é o laço while
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
console.log('------------');

// O laço do...while é muito parecido com o laço while. A única diferença é
// que, no laço while, a condição é avaliada antes da execução do bloco de
// código, enquanto no laço do...while, ela é avaliada depois de o bloco de
// código ter sido executado. O laço do...while garante que o bloco de
// código seja executado pelo menos uma vez.
var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
//----------------
console.log('------------');

// Funções
function sayHello() {
    console.log('Hello!');
} sayHello();

// Também podemos passar argumentos para uma função. Argumentos são variáveis com as quais se supõe que a função fará algo. 
function output(text) {
    console.log(text);
}
output('osvaldo');

function print(text) {
    console.log(text);
}
print('osvaldo');

function imprimir(text) {
    console.log(text);
}
imprimir('osvaldo');

// Você pode usar quantos argumentos quiser, assim:
output('Hello!', 'Other text');
// Nesse caso, apenas o primeiro argumento será usado pela função; o segundo será ignorado. Uma função também pode devolver um valor:

// Uma função também pode devolver um valor:
function sum(num1, num2) {
    return num1 + num2;
}
// Essa função calcula a soma de dois números especificados e devolve o resultado. Podemos usá-la da seguinte maneira:
var result = sum(1, 2);
output(result); // a saída é 3

// Programação orientadaa objetosemJavascript

// Objetos JavaScript são coleções bem simples de pares nome-valor. 
// Há duas maneiras de criar um objeto simples em JavaScript. 

// A primeira é esta:
var obj = new Object();
// A segunda é assim:
var obj = {};

// Também podemos criar um objeto completo, desta maneira:
obj = {
    name: {
        first: 'Gandalf',
        last: 'the Grey'
    },
    address: 'Middle Earth'
};

// Em POO (Programação Orientada a Objetos), um objeto é uma instância
// de uma classe. Uma classe define as características do objeto.
function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}
// Para instanciar essa classe, podemos usar o código a seguir:
var book = new Book('title', 'pag', 'isbn');

// Então, podemos acessar as suas propriedades e atualizá-las deste modo
console.log(book.title); // exibe o título do livro
book.title = 'new title'; // atualiza o valor do título do livro
console.log(book.title); // exibe o valor atualizado

// Uma classe também pode conter funções(em geral, também são chamadas
// de métodos).Podemos declarar e usar uma função / método conforme
// mostra o código a seguir:
Book.prototype.printTitle = function () {
    console.log(this.title);
};
book.printTitle();

// Também podemos declarar funções diretamente na definição da classe:
function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = () => {
        console.log(this.isbn);
    };
}
book.printIsbn();
// segue...
// CAPÍTULO 2
// Visão geral sobreECMAScripteTypeScript


