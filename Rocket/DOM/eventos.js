const input = document.querySelector('input')
/* sempre que digitar no input a funçao é rodada 
a funcionalidade onkeyup é semelhante mas a funçao roda ao soltar a tecla */
input.onkeydown = function () {
    console.log('rodei');
}

// addEventListener ()
const h1 = document.querySelector('h1')
/* addEventListener é uma funçao que recebe dois argumentos
o primeiro é qual o tipo do evento o segundo é a funçao chamada 
Posso colocar outros eventos como mouseover e mouseout */
h1.addEventListener('click', print) // dessa forma ela nao é executada de cara e sim é procurada a funçao para dps executar
function print () {
    console.log('print')
}
/* A vantagem desse metodo é que posso executar duas funcionalidades ao 
mesmo tempo exemplo:
 */
h1.addEventListener('click', function() { // escrevendo a funçao dessa forma posso executa-la logo de cara
    console.log('outro momento');
})
/* addEventListener empilha todos as funcionalidade e executar todas no documento 
se eu fizesse 
h1.onclick = print 
h1.onclick = function print () {
    console.log('outro momento')
} Nao rodaria as duas ao mesmo tempo */

// event para descobrir o tipo de evento
/* clg(event.key) exibira as teclas
clg(event.currentTarget) ira exibir o disparo do evento <input type = 'text'> */
// clg(event.currentTarget.value) posso pegar o valor que existe no input
input.onkeydown = function (event) {
    console.log(event);
}