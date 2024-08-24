const add = (a)=>a+4;
const subtract = (a)=>a-2;
const product = (a)=>a*5;

const compose = (...args)=>{
    return (a)=>args.reduceRight((accVal, currFunction)=>{
        return currFunction(accVal);
    },a);
};

const pipe = (...args)=>{
    return (a)=>args.reduce((accVal, currFunction)=>{
        return currFunction(accVal);
    },a);
}

console.log(compose(add,subtract,product)(2));
// Output : 12
console.log(pipe(add,subtract,product)(2));
// Output : 20
