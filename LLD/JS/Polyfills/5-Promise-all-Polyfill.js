const promise1 = Promise.resolve(1);
const promise2 = 54;
const promise3  = Promise.resolve("3");
const promise4 = Promise.reject(4);
const promise5 = Promise.resolve(5);

// Approach - 1;
Promise.myAll = function(...promises){
    // To store the settled promises values.
    const results = [];

    // TO track remaining promises to be handled
    let remainingPromises = promises.length;

    // If no promises are passed.
    if(remainingPromises === 0){
        resolve(results);
    }

    // Return the new promise as per the original Promise.all() functionality.
    return new Promise((resolve, reject)=>{
        // Handle each promise
        promises?.forEach((promise,idx)=>{
            // If the promise is resolved then store the value and reduce the count of remaining promises to handle. 
            // We use "Promise.resolve()" below to handle values like strings/numbers which are not promises themselves.
            Promise.resolve(promise)
            .then((data)=>{
                results[idx] = data;
                remainingPromises--;
                // If all the promises are resolved then return the resolved values.
                if(remainingPromises === 0){
                    resolve(results);
                }
            })
            .catch(error=>{
                // If any promise is rejected then reject it immediately.
                reject(error);
            });
        });
    });
}

Promise.myAll(promise1, promise2, promise3)
.then(data=>console.log("=======> Promise.myAll success :",data))
.catch(error=>console.log("=======> Promise.myAll error :",error))
.finally(()=>console.log("=======> Promise.myAll finally : Execution Done"));
/*
    =======> Promise.myAll success : [ 1, 54, '3' ]
    =======> Promise.myAll finally : Execution Done
 */

Promise.myAll(promise1, promise2, promise3, promise4)
.then(data=>console.log("=======> 2. Promise.myAll success :",data))
.catch(error=>console.log("=======> 2. Promise.myAll error :",error))
.finally(()=>console.log("=======> 2. Promise.myAll finally : Execution Done"));
/*
=======> 2. Promise.myAll error : 4
=======> 2. Promise.myAll finally : Execution Done
*/