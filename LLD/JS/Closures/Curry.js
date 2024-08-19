// Example 1:
// fn()()()()(0)
// Output:
// 4
// Example 2:
// fn()()()(0)
// Output:
// 3
// Example 3:
// fn()()()()()(0)
// Output:
// 5

function fn() {
    let count = 0;
    return function curry(val){
        count++;
        if(val === 0){
            return count;
        }
        return curry;
    }
}

console.log(fn()()()()(0));
//output : 4


const join = (a, b, c) => {
    return `${a}_${b}_${c}`
}


function curry(fn) {
    // your code here
    return function curried(...args){
        if(args.length < fn.length){
            return function(...newArgs){
                return curried(...args,...newArgs);
            }
        }
        else{
            return fn(...args);
        }
    }
}

const curriedJoin = curry(join)
curriedJoin(1, 2, 3) // '1_2_3'
curriedJoin(1)(2, 3) // '1_2_3'
curriedJoin(1, 2)(3) // '1_2_3'


/* 
    Infinite curry sum :
    console.log(curriedAdd(1)(2)(3)(4)(); // 10
*/
function curriedAdd(a){
    return function(b){
        if(b){
            return curriedAdd(a+b);
        }
        else{
            return a
        }
    }
}
