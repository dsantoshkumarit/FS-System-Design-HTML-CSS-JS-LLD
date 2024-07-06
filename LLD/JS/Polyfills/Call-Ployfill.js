//============ Call Polyfill
function greet(country) {
    console.log('Hello, ', this.name , '! from ', country);
}
    
const person = {
    name: 'John',
};
Function.prototype.myCall1 = function(context, ...params){
    return this.bind(context,...params)();
};
greet.myCall1(person, 'Japan');
// Output:
// Hello, John! from Japan

Function.prototype.myCall2 = function(context, ...params){
    context.functionToBeCalled = this;
    context.functionToBeCalled(...params);
    delete context.functionToBeCalled;
};
greet.myCall2(person, 'Germany');
// Output:
// Hello, John! from Germany

Function.prototype.myCall3 = function(context, ...params){
    if(typeof this !== "function"){
        throw new Error(this, " is not a function");
    }
    if(!context || typeof context !== "object"){
        throw new Error(context, " is not an object");
    }
    const fnSymbol = Symbol("call");
    context[fnSymbol] = this;
    context[fnSymbol](...params);
    delete context.functionToBeCalled;
};
greet.myCall3(person, 'Malaysia');
// Output:
// Hello, John! from Malaysia