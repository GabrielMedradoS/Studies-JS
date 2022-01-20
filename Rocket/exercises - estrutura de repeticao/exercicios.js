console.log("QUESTAO 1")
/* ### Transformar notas escolares
1. Crie um algoritmo que transforme as notas do sistema
númerico para sistema de notas em caracteres tipo A B C
 
* de 90 para cima - A
* entre 80 e 89   - B
* entre 70 e 79   - C
* entre 60 e 69   - D
* menor que 60    - F     */

function boletim (nota) {
    if(nota >= 90) {
        NotaFinal = "NOTA - A"
        }
    else if(nota >= 80 && nota <= 89){
        NotaFinal = "NOTA - B"
        }

    else if(nota >= 70 && nota <= 79){
        NotaFinal = "NOTA - C"
        }

    else if(nota >= 60 && nota < 69){
        NotaFinal = "NOTA - D"
        }   

    else if(nota >=0 && nota < 60) {
        NotaFinal = "NOTA - F"
        }
    else{
        NotaFinal = "Nota inválida"
    }
    return console.log(NotaFinal)
    }

boletim(100)

console.log("RESOLUÇAO MAYK")

function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score >= 0 && score  < 60

    if (scoreA){
        scoreFinal = "NOTA - A"
    } else if (scoreB){
        scoreFinal = "NOTA - B"
    } else if (scoreC){
        scoreFinal = "NOTA - C"
    } else if (scoreD){
        scoreFinal = "NOTA - D"
    } else if (scoreF){
        scoreFinal = "NOTA - F"
    } else {
        scoreFinal = "Nota inválida"
    }
    return console.log(scoreFinal)
    }

getScore(100)

console.log("### FIM DA RESOLUÇAO")

console.log("QUESTAO 2")
/* ### Sistema de gastos familiares
2. Crie um objeto que possuirá 2 propriedades, ambas do tipo 
array:
    * receitas: []
    * despesas: []  

Agora, crie uma função que irá calcular o total de receitas
e despesas e irá mostrar uma mensagem se a família esta com
saldo positivo ou negativo, seguindo do valor do saldo */

let familia = {
    "pai":{
    nome: "Joao",
    receitas: [10, 20, 30], 
    despesas: [1, 2, 3] 
    },

    "mae": {
    nome: "Andreia",
    receitas: [30, 40, 50], 
    despesas: [10, 2, 3] 
    },

    "filha": {
    nome:"Ana",
    receitas: [1, 2, 3],
    despesas: [10, 20, 30]
    }
}

function Soma(numero){
    return numero.reduce((acc, nr) => acc + nr, 0)

}

function Saldo(usuario){
    const Receita = Soma(usuario.receitas);
    const Despesa = Soma(usuario.despesas);

    console.log("nome " + usuario.nome)
    console.log('Receita: ', Receita) 
    console.log("Despesa: ", Despesa)
    
    const Total = Receita - Despesa
    console.log("Total ", Total)
    return Total
}
let Total_familia = 0
Total_familia += Saldo(familia.pai)
Total_familia += Saldo(familia.mae)
Total_familia += Saldo(familia.filha)

console.log("Familia: ", Total_familia)

/*function calculoSaldo(){
const TotalReceitas = familia.reduce((acc, soma) => acc + soma.receitas, 0)
const TotalDespesas = familia.reduce((acc, soma) => acc + soma.despesas, 0)

let TOTAL = TotalReceitas - TotalDespesas
    if(TOTAL > 0){
        console.log(`Saldo Positivo da familia: ${TOTAL.toFixed(2)}`)
    } else {
        console.log(`Saldo Negativo da familia: ${TOTAL.toFixed(2)}`)
    }
}
calculoSaldo()*/

console.log("RESOLUÇAO MAYK")

let family = {
    incomes: [2500,3200,250.43,360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00]
}
function sum(array){
    let total = 0
    
    for(let value of array){
        total += value
    }
    return total
}

function calculateBalance(){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    let itsOk = total >= 0
    let balanceText = "Negativo"

    if(itsOk){
        balanceText = "Positivo"
    }

console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}`)
}

calculateBalance()

console.log("### FIM DO PROGRAMA")

console.log("QUESTAO 3")
/* ### Celsius em fahrenheit
3. Crie uma funçao que receba uma string em celsius ou
fahrenheit e faça a transformaçao de uma unidade para outra

C = (F - 32) * 5/9 
F = C * 9/5 + 32    */  

// transformDegree("50c")
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes("C")
    const fahrenheitExists = degree.toUpperCase().includes("F")

    //Fluxo de erro
    if(!celsiusExists && !fahrenheitExists){
        throw new Error("Grau não identificado")
    }

    //Fluxo ideal, F => C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""))
    //como tem apenas 1 parametro, posso retirar o () de fahrenheit
    let formula = fahrenheit => (fahrenheit - 32) * 5/9 
    let degreeSign ="C"

    //Fluxo alternativo C => F
    if(celsiusExists) {
        //Nao uso let para utilizar as mesmas variaveis do scope anterior
        updateDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = (celsius) => (celsius * 9/5) + 32
        degreeSign ="F"
    

    }

    return formula (updateDegree) + degreeSign
}
try{
    console.log(transformDegree("50f"))
    console.log(transformDegree("10c"))
    console.log(transformDegree("50Z"))
} catch (error) {
    console.log(error.message)
}

console.log("### FIM DO PROGRAMA")

console.log("QUESTAO 4")
/* ### Buscando e contando dados em array 
   
    Baseado no Array por categoria abaixo, faça os seguintes desafios
        • Contar o numero de categorias e o numero de livros em cada categoria
        • Contar o numero de autores
        • Mostrar livors do autor Augusto Cury
        • Transformar a funçao acima em uma funçao que irá receber o nome do autor e 
        devolver o livro.
*/
const booksByCategory = [
    {
        category: "Riqueza", 
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosake e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Augusto Cury"
            },
        ],
    },
];

const totalCategories = booksByCategory.length
console.log("Total de categorias: ", totalCategories);

for(let category of booksByCategory){// ele esta pegando o objeto e 
//transformando na variavel category depois eu coloco um .category para exibir a propriedade 
    console.log("Total de livros da categoria: ", category.category)
    console.log(category.books.length);
}

function countAuthors(){
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.authors) == -1)
                authors.push(book.author)
        }
    }
    console.log("Total de autores: ", authors.length);
}
countAuthors();

function booksOfAugustoCury(){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author == 'Augusto Cury')
                books.push(book.title)
        }
    }
    console.log("Livros do Autor Augusto Cury: ", books.length)
    console.log(books)
}
booksOfAugustoCury()

function booksOfAuthor(author){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author)
                books.push(book.title)
        }
    }
    //poderia ir sem o join tambem, mas como ele posso escolher meu separador
    console.log(`Livros do Autor ${author}: ${books.join(", ")}`)
}
booksOfAuthor("T. Harv Eker")