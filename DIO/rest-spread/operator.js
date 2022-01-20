/* Como fazer a soma de todos os elementos, com uma quantidade 'infinita' */
/* arguments é um proto object */
function sum (a , b){
    var value = 0;
    for (var i=0; i < arguments.length; i++) {
        value += arguments[i];
    }
    return value;
}
console.log(`Soma 1: ${a(5, 10, 15)}`);

// Rest operator proto array
// Rest operator sao os ...
function sum1 (...args){
    return args.reduce((acc, value) => acc + value, 0);
}
console.log("Soma 2:", a(5, 10, 15));

//Funçao apenas para guardar os valores e usar de exemplo
/* *** apply metodo para aplicar uma funçao *** */
function a (...rest) {
    return multiply.apply(undefined, rest); //metodo apply cada item entra como parametro
}
function multiply(...args) {
    return args.reduce((acc, value) => acc * value, 1);
}
console.log(`multiplicaçao 1: ${a(5, 10, 15)}`);

// Spread Operator, semelhante ao rest operator
function a (...rest) {
    return multiply(...rest); //aplicando o spread operator
    // ele quebra listas e passa como argumento
}
function multiply(...args) {
    return args.reduce((acc, value) => acc * value, 1);
}
console.log("multiplicaçao 2:", a(5, 10, 15));

//um exemplo melhor do spread que mostra ele quebrando linhas
const str = "Digital Innovation One";
function logArgs (...args) {
    console.log(args);
}
logArgs(...str); //spread Operator

const arr = [1, 2, 3, 4];
function logArgs1 (...args) {
    console.log(args);
}
logArgs(...arr); //spread Operator

/* Uma forma de concatenar com o spread */
const array = [...arr, 5, 6, 7]
console.log(array);

/* **** Symbol.iterator **** */
const obj = {
    values:  [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;
        
        return {
            next: () => {
                i++;

                return {
                    value: this.values[i-1],
                    done: i > this.values.length
                };
            }
        };
    }
};
const it = obj[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

/*  ****GENERATOR**** */
//imagine que eu quero rodar uma funçao, parar o codigo e retornar o valor
function* hello() {
    console.log("hello");
    yield; // comando junto com function* para parar a funçao 

    console.log("From");
    const value = yield;

    console.log(value);
}
const its = hello();
console.log(its.next());
console.log(its.next());
console.log(its.next("Function!")); // controla o fluxo da funçao