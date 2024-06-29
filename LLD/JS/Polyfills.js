const person1 = {
    name : "Jane"
}

function sayHi(){
    console.log(this.name, "say's Hi");
}

//============ Bind Polyfill
function bindPolyFill(context){
    context.functionReference = this;
    return function(...args){
        context.functionReference(...args);
    }
}
Function.prototype.myBind = bindPolyFill;

const boundFunction = sayHi.myBind(person1);
boundFunction();
// Output:
// "Jane" "say's Hi"

//============ Call Polyfill

function greet1(country) {
    return 'Hello, ' + this.name + ' from '+ country;
}
    
const person2 = {
    name: 'John',
};

function callPolyFill(context, ...args){
    return this.bind(context,...args)();
}
Function.prototype.myCall = callPolyFill;

console.log(greet1.myCall(person2, 'India'));
// Output:
// Hello, John! from India

//============ Apply Polyfill

function greet2(country) {
    return 'Hello, ' + this.name + ' from '+ country;
}
    
const person3 = {
    name: 'Jane',
};
function applyPolyFill(context, args){
    return this.bind(context, ...args)();
} 
Function.prototype.myApply = applyPolyFill;

console.log(greet2.myApply(person3, ['USA']));
// Output:
// Hello, Jane! from USA

