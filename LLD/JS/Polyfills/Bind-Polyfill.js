//============ Bind Polyfill
const person = {
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

Function.prototype.myBind3 = function(objToBeInvoked, ...params){
    const requiredFunction = this;
    return ()=>requiredFunction.call(objToBeInvoked, ...params);
}

const boundFunction1 = sayHi.myBind1(person,"USA");
boundFunction1();
// Output:
// "Jane say's Hi from USA"
const boundFunction2 = sayHi.myBind2(person,"India");
boundFunction2();
// Output:
// "Jane say's Hi from India"
const boundFunction3 = sayHi.myBind3(person,"Sri Lanka");
boundFunction3();
// Output:
// "Jane say's Hi from Sri Lanka"


//Proper Bind Polyfill
Function.prototype.myBind4 = function(context, ...params){
    if(typeof this !== "function"){
        throw new Error(this, " is not a function");
    }
    if(!context || typeof context !== "object"){
        throw new Error(context, " is not a object");
    } 
    const fnSymbol = Symbol("bind");
    context[fnSymbol] = this;
    return function(){
        context[fnSymbol](...params);
    };
}
const boundFunction4 = sayHi.myBind4(person,"New Zealand");
boundFunction4();