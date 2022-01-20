// ### aplicativo para criar frases
// ### declaraçao
// ### function statement
function CreatePhrases() {
    console.log('Estudar é muito bom')
    console.log('Paciencia e persistencia')
    console.log('Revisao é a mae do aprendizado')
}

//execute, run, invoke, call
CreatePhrases()
CreatePhrases()
//ira executar o programa duas vezes

console.log('FIM DO PROGRAMA')

// ### Parametros da funçao
/* uma outra maneiro de escrever a funçao seria:
const sum = (number1, number2) => {
    let total = (number1 + number2)
    return total
}*/
const sum = function(number1, number2){
    let total = (number1 + number2)
    return total
}
console.log(sum(2, 3))

let number1 = 20
let number2 = 30
sum(number1, number2)
console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

console.log('###FIM DO PROGRAMA')

/* ### Arrow functions */
function greetings() {
    return "Welcome to JavaScript"
}
const greetings_1 = () => {
    return "Welcome to JavaScript"
}
const greetings_2 = () => "Welcome to JavaScript"

// Lembrando que eu posso passar um valor padrao, posso passar undefined tmb pelo JS
const multiply = function(number1, number2 = 1){
    let total = (number1 * number2)
    return total
}
/* function multiply (a, b = a) {
    return a * b
}
console.log(multiply(5)) */
console.log(multiply(2, 3))

// ### Funçoes construturas
/*existe diversas ideias de funçoes construtores como:
Date, String,' Person*/ 
function Person (name){
    this.name = name
    this.walk = function(){
        return this.name + " esta andando"
    }
}
const gabriel = new Person("Gabriel")
const mayk = new Person("Mayk")
console.log(gabriel)
console.log(mayk)
console.log(gabriel.walk())

console.log('###FIM DO PROGRAMA')

// ### transformando String em Números e Números em String
let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

/* ### Contar quantos caracteres tem uma palavra 
e quantos digitos tem numero*/
let word = "Paralelepipedo"
console.log(word.length)
var number_1 = 1234
console.log(String(number_1).length)

/* ### transformar numero quebrado com 2 casa decimais e
trocar ponto por vírgula */
let numero = 345.332635
console.log(numero.toFixed(2).replace(".", ","))

/* ### transformar letras Maiúsculas e Minúsculas
Deve ser escrito exatamente assim toUpperCase */
let palavra = "Programar é muito bacana!"
// --> toUpperCase
console.log(palavra.toUpperCase())
let palavra2 = "PROGRAMAR É MUITO BACANA!"
// --> toLowerCase
console.log(palavra.toLowerCase())

/* ### Manipulando string e arrays */ 
let phrase = "Eu quero viver o amor!"
// ### Transforma String para array
let myArray = phrase.split(" ")
console.log(myArray)
// ### Transforma de array para string
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

// ### Procurar se um texto possui uma palavra específica 
//Letras maiúsculas fazem diferença. Retorna um booleano
let Phrase = "Eu quero viver"
// --> includes
console.log(Phrase.includes("amor"))
let Phrase_ = "Eu quero viver o amor"
console.log(Phrase_.includes("amor"))

// ### contar elementos de um array / manipulaçao de dados
console.log(["a", {type:"array"}, // exibir a funçao
function() {return "alo"} ][2]())

console.log(["a", {type:"array"}, // quantidade de elementos
function() {return "alo"} ].length)

console.log(["a", {type:"array"}, function() {return "alo"}] [1].type)
/* ###  Transformar uma cadeia de caracteres em elementos de um 
array */
let word_ = "Manipulaçao"
console.log(Array.from(word_))


// ### Manipulando Arrays, ultizando métodos
let techs = ["html", "css", "js"]
// --> adicionar itens no fim
techs.push("nodejs")
// --> adicionar no começo
techs.unshift("sql")
// --> remover do fim
techs.pop()
// --> remover do começo
techs.shift()
/* pegar somente alguns elemetos do array -> html, css 
//o primeiro num exclui e o segundo ate onde vai contar
console.log(techs.slice(1,2)) */

/* remover 1 ou mais itens em qualquer posiçao do array
exclui da posiçao 1 ate a psoiçao 2
techs.splice(1,2)*/

// --> indexOf encontra a posiçao de um elemento do array
let position = techs.indexOf('css')
console.log(position)

console.log(techs)
/* ### estrategia para remover
let position = techs.indexOf('html')
techs.splice(index, 1)
console.log(techs) */


// --> concat - concatena as duas strings
let frutas = ['melancia', 'banana']
let salgados = ['coxinha', 'kibe', 'empada']
const alimentos = frutas.concat(salgados)
console.log(alimentos)

// --> slice - cria um novo array
// --> slice(0, 2) - cria um array da posiçao 0 e vai termina antes da 2 
// --> slice(2) - cria um array a partir da dois incluindo a posiçao 2
// --> slice(-1) - cria um array pegando apenas a ultima posiçao
// --> slice(-3) - cria um array retornando os 3 ultimos
console.log(alimentos.slice(2))

// --> splice - ele MODIFICA O PROPRIO ARRAY
// --> splice(2) - retira a partir do indece 2 
console.log(alimentos.splice(2))

console.log(" ### FIM DO PROGRAMA")


// ### Estrutura de repetiçao for...of
let name = "GABRIEL"
let names = ['João', 'Paulo', 'Pedro']
// --> for of ()
for(let char of name){
    console.log(char)
}
//neste caso ele cria um novo name, um dentro do for
for(let name of names){
    console.log(name)
}
console.log(" ### FIM DO PROGRAMA")

// ### Estrutura de repetiçao for...in
//em cima de objetos
let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}
//for in ()
for (let property in person){
    console.log(property)
    console.log(person[property])
}
// --> forEach - Nao cria um novo array e nem modifica
const arr = [1, 2, 3, 4, 5]
// o primeiro sera o valor que ele esta lendo e o segundo sera o index
//poderia colocar um terceiro argumento q seria um array
arr.forEach((value, index) => {
    console.log(`${index}: ${value}`)
});

// --> reverse - reverte a ordem do array
console.log(arr.reverse());

// --> Join coloca delimitadores entreos valores 
console.log(arr.join(" - "));

// ### iterar elementos
/* ira exibir os valores do array ate terminar  */
const arrIterator = arr.values();
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());

// --> find vai retornar o primeiro item a satisfazer a condiçao 
console.log(arr.find(value => value > 2));
// --> findIndex - vai retornar o primeiro index que o valor é maior q 2
console.log(arr.findIndex(value => value > 2));

// --> flat - cria um novo array 
/* supondo que eu tenho um array dentro de um array e quero 
colocar todos no mesmo array, flat(2) - depende da profundidade o array
No caso se tiver mais de um array dentro do array */
const indexs = [1 , 2, 3, [4, 5]]
console.log(indexs)
console.log(indexs.flat())


// --> indexOf - ira retornar o indece que primeiro retorna o valor: 3
// --> lastIndexOd - da mesma forma ele retorna a ultima ocorrencia do valor
const array = [1, 3, 3, 4, 3]
console.log(array.indexOf(3))
console.log(array.lastIndexOf(3))

//--> some - se um determinado valor do array satisfaz a condiçao
//retorna um booleano
console.log(array.some(value => value % 2 == 0))

//--> every - se eu quiser saber se todos os valores satisfazem a condiçao
console.log(array.every(value => value % 2 == 0));

// ### Jutando os conhecimentos de SOME FIND FINDINDEXOF EVERY SORT 
const students = [
    {name: "Jhon", grade: 7},
    {name: "Jenny", grade: 5},
    {name: "Peter", grade: 4},
    {name: "Joe", grade: 8}
]
console.log(students);
console.log(students.some(students => students.grade >= 7))
console.log(students.find(students => students.grade >= 7))
console.log(students.findIndex(students => students.grade >= 7))
console.log(students.every(students => students.grade >= 7))
// --> Sort - Ordenar o array conforme a condiçao
console.log(students.sort((current, next) => next.grade - current.grade))

// ### Filter - Map - Reduce
const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10,
        weight: 5
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2,
        weight: 3
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1,
        weight: 0.1
    }
]
// --> filter Cria um novo array sem modificar o anterior
//pode-se fazer de muitas formas:
const newPets = pets.filter ((pets) => {return pets.age <= 5}  ) // (pets) passando o parametro, o primeiro parametro vai ser cada item do array
console.log(newPets)
console.log(pets)
/* function MenorQueCinco(numero) {
    return numero < 5
}
const newPets = pets.filter(({age}) => MenorQueCinco(age))
console.log(newPets) */

// --> map Cria um novo array sem modificar o anterior
const petNames = pets.map ((pets) => {return pets.name})
console.log(petNames)

// --> reduce Cria um novo array sem modificar o anterior
//relembrando reduce, argumentos acc = total; pets = valor atual, onde ele vai encontrar; 0 é o valor inicial
/* const totalWeight = pets.reduce((acc, pets) => {return acc + pets.weight }, 0)
console.log(totalWeight); */
// --> Reduce com dois valores
const totalWeight = pets.reduce ((acc, pets) => {return {
    totalWeight:  acc.totalWeight + pets.weight,
    totalAge:  acc.totalAge + pets.age 
    } 
}, {totalAge: 0, totalWeight: 0})
console.log(totalWeight);