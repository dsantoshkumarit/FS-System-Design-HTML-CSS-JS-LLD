//============ Apply Polyfill
function greet(country) {
    console.log('Hello, ' , this.name , '! from ', country);
}
    
const person = {
    name: 'Josh',
};
Function.prototype.myApply1 = function(context, args){
    this.bind(context, ...args)();
};

greet.myApply1(person, ['Russia']);
// Output:
// Hello, Josh! from Russia

Function.prototype.myApply2 = function(context, args){
    context.functionToBeCalled = this;
    context.functionToBeCalled(...args);
    delete context.functionToBeCalled;
};

greet.myApply2(person, ['Switzerland']);
// Output:
// Hello, Josh! from Switzerland

//Proper apply polyfill

Function.prototype.myApply3 = function(context, args){
    if(typeof this !== "function"){
        throw new Error(this, " is not a function.");
    }
    if(!context || typeof context !== "object"){
        throw new Error(context, " is not an object.");
    }
    const fnSymbol = Symbol("apply");
    context[fnSymbol] = this;
    context[fnSymbol](...args);
    delete context[fnSymbol];
};

greet.myApply3(person, ['India']);
// Output:
// Hello, Josh! from India
