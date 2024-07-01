//============ Bind Polyfill
const person1 = {
    name : "Jane"
}
function sayHi(country){
    console.log(this.name, "say's Hi from",country);
}
Function.prototype.myBind1 = function(context,...params){
    context.functionReference = this;
    return function(){
        context.functionReference(...params);
    }
};

Function.prototype.myBind2 = function(objToBeInvoked, ...params){
    const requiredFunction = this;
    return function(){
        requiredFunction.call(objToBeInvoked, ...params);
    };
}

const boundFunction1 = sayHi.myBind1(person1,"USA");
boundFunction1();
// Output:
// "Jane say's Hi from USA"
const boundFunction2 = sayHi.myBind1(person1,"India");
boundFunction2();
// Output:
// "Jane say's Hi from India"



//============ Call Polyfill
function greet1(country) {
    console.log('Hello, ', this.name , '! from ', country);
}
    
const person2 = {
    name: 'John',
};
Function.prototype.myCall1 = function(context, ...params){
    return this.bind(context,...params)();
};
greet1.myCall1(person2, 'Japan');
// Output:
// Hello, John! from Japan

Function.prototype.myCall2 = function(context, ...params){
    context.functionToBeCalled = this;
    context.functionToBeCalled(...params);
    delete context.functionToBeCalled;
};
greet1.myCall2(person2, 'Germany');
// Output:
// Hello, John! from Germany

//============ Apply Polyfill
function greet2(country) {
    console.log('Hello, ' , this.name , '! from ', country);
}
    
const person3 = {
    name: 'Josh',
};
Function.prototype.myApply1 = function(context, args){
    this.bind(context, ...args)();
};

greet2.myApply1(person3, ['Russia']);
// Output:
// Hello, Josh! from Russia

Function.prototype.myApply2 = function(context, args){
    context.functionToBeCalled = this;
    context.functionToBeCalled(...args);
    delete context.functionToBeCalled;
};

greet2.myApply2(person3, ['Switzerland']);
// Output:
// Hello, Josh! from Switzerland

