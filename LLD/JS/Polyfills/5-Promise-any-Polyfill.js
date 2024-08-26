const promise1 = Promise.resolve(1);
const promise2 = 54;
const promise3  = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise4 = Promise.reject(4);
const promise5 = Promise.resolve(5);
const promise6 = Promise.reject(6);

Promise.myAny = function(promises){
    // To store the rejected promises values.
    const rejectedErrors = [];

    // TO track remaining promises to be handled
    let remainingPromises = promises.length;

    // Return the new promise as per the original Promise.any() functionality.
    return new Promise((resolve,reject)=>{
        // Handle each promise
        promises.forEach((promise,idx)=>{
            // If the promise is resolved then resolve the result. 
            // We use "Promise.resolve()" below to handle values like strings/numbers which are not promises themselves.
            Promise.resolve(promise)
            .then(data=>{
                resolve(data);
            })
            // If the promise is rejected then store the value and reduce the count of remaining promises to handle. 
            // If all the promises are rejected then return a new "AggregateError" object with all the rejected promises values as the argument to this "AggregateError" constructor. 
            .catch(error=>{
                rejectedErrors[idx] = error;
                remainingPromises--;
                if(remainingPromises === 0){
                    reject(new AggregateError(rejectedErrors));
                }
            });
        });
    });
}

Promise.myAny([promise1, promise2, promise3])
.then(data=>console.log("=======> 1. Promise.myAny success :",data))
.catch(error=>console.log("=======> 1. Promise.myAny error :",error))
.finally(()=>console.log("=======> 1. Promise.myAny finally : Execution Done"));
/*  Output:
    =======> 1. Promise.myAny success : 1
    =======> Promise.myAny finally : Execution Done
 */

Promise.myAny([promise4,promise6])
.then(data=>console.log("=======> 2. Promise.myAny success :",data))
.catch(error=>console.log("=======> 2. Promise.myAny error :",error.errors))
.finally(()=>console.log("=======> 2. Promise.myAny finally : Execution Done"));
/*  Output:
    =======> 2. Promise.myAny error : [ 4, 6 ]
    =======> 2. Promise.myAny finally : Execution Done
*/