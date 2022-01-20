//getElementById () element
let element = document.getElementById('meuBlog');
console.log(element);
/* irá exibir todo o codigo html
<h1 id="meu-blog">Meu blog</h1> */

//getElementByClassName () retorna um HTML Collection
const element_1 = document.getElementsByClassName('one') 
console.log(element_1);
// seleciona diversos elementos por classe

//getElementByTagName() retorna um HTML Collection
const element_2 = document.getElementsByTagName('body') 
console.log(element_2);

//querySelector() retorna um NodeList
const element_3 = document.querySelector("[src]") 
console.log(element_3);
//irá retornar apenas 1 que é o primeiro que ele encontrar
//Posso buscar pela classe tambem usando .

//querySelectorAll() retorna um NodeList
const element_4 = document.querySelectorAll("meta") 
console.log(element_4);
/* irá retornar todos como o proprio nome diz
Uma das vantagens ao usar o querySelector e aparecer um NodeList
diferente de um HTMLCollection é que eu posso usar 
outras funcionalidades como um foreach */

//TextContent altera o conteudo de texto do meu elemento
const element_5  = document.querySelector('h3')
element_5.textContent = "Olá Devs"

//innerText altera o conteudo do texto interno HTML
element_5.innerText = "Olá"

//innerHTML adiciona texto em HTML diretamento no meu elemento
element_5.innerHTML = "Olá Devs !!<small> !!! </small>"

//Value Manipulando o valor de um input
//quando um input já tem um valor dentro dele ele esta populado
const element_6  = document.querySelector('input')
element_6.value = "Valor"

//Manipulando elementos / Atributos
const read = document.querySelector('header')
// primeiro eu digito qual atributo eu quero que tenha e dps eu coloco o elemento q vai receber
read.setAttribute('id', 'header')
//Apos esses passo eu vejo consolelog que agora minha tag header possui o id header
const readID = document.querySelector('#header')
console.log(readID);
/* outras elementos semelhantes ao .setAttribute sao os
.getAttribute
.removeAttribute */

/* //parentNode //parentElement
const body = document.querySelector('body')
//irá exibir o Nó pai do elemento body
console.log(body.parentNode);
//da msm forma irá exibir o elemento pai
console.log(body.parentElement);
 */

/*para os nós filhos seria o 
console.log(body.childNodes) em Nodelist
console.log(body.children) em HTML Collection */

//para elementos irmaos element_5.nextElementSibiling
//para elementos irmaos element_5.previousSibiling (nao leva em conta o espaço vazio, a construçao do html importa)

/* criando e adicionando elementos
createElement */
const div = document.createElement('div')
div.innerText = "Olá desenvolvedores!"
/* append prepend
Nesse caso o APPEND vai selecionar o body e criar a div dps do ultimo filho dele que seria o <p> */
const body = document.querySelector('body')
body.append(div)
/*No caso do prepend ele adicionaria antes de qualquer filho
body.prepend(div) */

/* insertBefore
const body = document.querySelector('body')
const script = body.querySelector('script')
Recebe dois argumentos o primeiro é o elemento que eu quero add 
e o segundo é o nó de refenrencia, no caso vai ser script porque
eu quero add antes da tag script 
body.insertBefore(div, script) --> vai estar entre o header e o script
*/
