
// ==== Array.prototype.reduce - Polyfill ==== //
Array.prototype.myReduce = function(cb,initValue){
    const arr = this;
    let i=0;
    let acc;
    if(initValue){
        acc = initValue
    }
    else{
        acc = arr[i];
        i++;
    }
    for(; i<arr.length; i++){
        acc = cb(acc,arr[i]);
    }
    return acc;
};

const reduceCb = (acc,val)=>{return acc+val};

console.log([1,2,3].reduce(reduceCb)); // 6
console.log([1,2,3].myReduce(reduceCb)); // 6
console.log([1,2,3].reduce(reduceCb,10)); // 16
console.log([1,2,3].myReduce(reduceCb,10)); // 16