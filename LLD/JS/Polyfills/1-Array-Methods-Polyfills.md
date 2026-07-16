# Basic map polyfill:
- Code:
```js
    Array.prototype.myMap = function(cb){
        const resultArr = [];
        const array = this;
        for(let i=0; i<array.length;i++){
            resultArr.push(cb(array[i], i, array));
        }
        return resultArr;
    }

    console.log([1,2,3].myMap((val)=>val*val));// [ 1, 4, 9 ]
```


# Advanced map() polyfill:
- The above code doesn't work properly on sparse arrays([1,,3]).
- Also we cannot use our own "this".
```js
    Array.prototype.myMap = function(cb, thisArg){
        if(this === null){
            throw new TypeError("Cannot read properties of undefined");
        }
        if(typeof cb !== "function"){
            throw new TypeError(cb, "is not a function" );
        }
        const O = Object(this);
        const len = O.length >>> 0;//>>> - Unsigned right shift operator. Shifts the bits of a number to the right and fills the leftmost bits with zeros.
        const newArr  = new Array(len);
        for(let i=0; i<len;i++) {
            if(i in O){
                newArr[i] = cb.call(thisArg.m, O[i],);
            }
        }
        return newArr;
    }
```
# Basic filter polyfill:
- Code:
```js
Array.prototype.myFilter = function(cb, thisArg){
    const array = this;
    const resultArray = [];
    for(let i=0; i<array.length; i++){
        if(array[i] && cb.call(thisArg,array[i],i,array)){
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}

console.log([1,2,3].myFilter((val)=>val<3));
// [1,2]
```

# Basic Reduce polyfill:
- Code:
```js
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
```