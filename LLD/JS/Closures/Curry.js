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