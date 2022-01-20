/* ### Outros detalhes do JS
    Digitar uma info no navegador / o navegador vai perguntar 
    ao usuario

    function validarIdade(idade) {
        var idade
        if (idade >=18) {
            validar = true
        }else{
             validar = false
        }
        return validar
    }

    var idade = prompt("Qual a sua idade ?")
    console.log(validarIdade(idade))

    obs. outra forma de exibir um dado seria com o alert
    alert(validarIdade(idade))
*/
function load() {
    alert("Pagina carregada")
}

function clicou(){
    alert("Obrigado por clicar")
}

function negrito() {
    document.getElementById("negrito").innerHTML= "<b>Deixar em Negrito</b>"
}

function redirecionar() {
    /* Comando para abrir uma nova aba */
    window.open("https://www.youtube.com/")
    /* Outra forma seria
    Comando para abrir na mesma pagina
    window.location.href= "https://www.youtube.com/" */
}

// Metodo sem o document.getById
function trocar(elemento) {
    elemento.innerHTML = "Mensagem trocada"
}
function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui"
} 

/*  // Metodo com document.getById
function trocar() {
    document.getElementById("mousemove").innerHTML="Mensagem trocada"
}
function voltar() {
    document.getElementById("mousemove").innerHTML="Passe o mouse aqui"
}
*/
function valor(elemento){
    console.log(elemento.value)
}