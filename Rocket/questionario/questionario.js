/*linhas de comando*/
console.log("Bem vindos ao starter")

/*exercicios*/
//1. declare uma variavel de nome weight
let weight

//2. que tipo de dado é a variavel acima ?
console.log(typeof weight)

/* 3. declare uma variavel e atribua um valor 
a cada um dos dados:
    *name: String
    *age: Number (integer)
    *stars: Number (float)
    *isSubscribed: Boolean
*/ 

let name = 'Gabriel'
let age = 25
let stars = 4.5
let isSubscribed = true

/* 4. A variavel student abaixo é de que tipo de dado ? */
let student = {};
console.log(typeof student)

/* 4.1 Atribua a ela os mesmo valores e propriedades do ex3 */
let student_2 = {
    name: 'Gabriel',
    age : 25,
    weight: 74.5,
    isSubscribed: true
};

/* 4.2 Mostre no console a seguinte mensagem:
<name> de idade <age> pesa <weight> kg.

Atençao, substitua<name> <age> e <weight> por 
valores de cada propriedade do object */

console.log(`${student_2.name} de idade ${student_2.age}
pesa ${student_2.weight} kg.`)

/* 5. Declare uma variavel do tipo array, de nome student
e atribua a ela nenhum valor, ou seja, somente o array vazio */
let Students = []

/*6. Retribua o valor da variavel acima, colocando dentro dela
o objeto student da questao 4 (não copiar e colar mas usar o 
objeto criado e inserir ele no array) */

Students = [ 
    student_2
]
console.log(Students)

/*7. Coloque no console o valor da posiçao 
zero do array acima */

console.log(Students[0])

/*8. Crie um novo student e coloque na posiçao 1 
do array students */

const John = {
    name:"John",
    age: 23,
    weight: 74.8,
    isSubscribed: true
}
//dessa forma estou subreescrevendo
Students = [
    student_2, // student na posiçao 0
    John    // Jonh na posiçao 1
]
console.log(Students)
//uma outra forma seria Students[1] = John

/*9. Qual a reposta do codigo abaixo e porque ?

console.log(a)
var a = 1

*/

//repostas é undefined pois a variavel é instancia depois
// Se fosse let seria erro de referencia