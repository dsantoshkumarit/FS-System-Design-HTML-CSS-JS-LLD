const promise1 = Promise.resolve(1);
const promise2 = 54;
const promise3  = Promise.resolve("3");
const promise4 = Promise.reject(4);
const promise5 = Promise.resolve(5);

// Approach - 1;
Promise.myAllSettled = function(...promises){
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
                results[idx] = {status : "resolved", value : data};
                remainingPromises--;
                // If all the promises are resolved then return the resolved values.
                if(remainingPromises === 0){
                    resolve(results);
                }
            })
            .catch(error=>{
                // If any promise is rejected then the rejected value is stored.
                results[idx] = {status : "rejected", value : error};
                remainingPromises--;
                // If all the promises are resolved then return the resolved values.
                if(remainingPromises === 0){
                    resolve(results);
                }
            });
        });
    });
}

Promise.myAllSettled(promise1, promise2, promise3)
.then(data=>console.log("=======> 1. Promise.myAllSettled success :",data))
.catch(error=>console.log("=======> 1. Promise.myAllSettled error :",error))
.finally(()=>console.log("=======> 1. Promise.myAllSettled finally : Execution Done"));
/* Output:
    =======> 1. Promise.myAllSettled success : [
        { status: 'resolved', value: 1 },
        { status: 'resolved', value: 54 },
        { status: 'resolved', value: '3' }
    ]
    =======> 1. Promise.myAllSettled finally : Execution Done
 */

Promise.myAllSettled(promise1, promise2, promise3, promise4, promise5)
.then(data=>console.log("=======> 2. Promise.myAllSettled success :",data))
.catch(error=>console.log("=======> 2. Promise.myAllSettled error :",error))
.finally(()=>console.log("=======> 2. Promise.myAllSettled finally : Execution Done"));
/* Output
    =======> 2. Promise.myAllSettled success : [
        { status: 'resolved', value: 1 },
        { status: 'resolved', value: 54 },
        { status: 'resolved', value: '3' },
        { status: 'rejected', value: 4 },
        { status: 'resolved', value: 5 }
    ]
    =======> 1. Promise.myAllSettled finally : Execution Done
    =======> 2. Promise.myAllSettled finally : Execution Done
*/