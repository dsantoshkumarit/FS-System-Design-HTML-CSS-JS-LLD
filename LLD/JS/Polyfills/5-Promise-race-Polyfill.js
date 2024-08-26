const promise1 = Promise.resolve(1);
const promise2 = 54;
const promise3  = new Promise((resolve) => setTimeout(resolve, 100, 'Promise 3 : quick'));
const promise4 = Promise.reject(4);
const promise5 = Promise.resolve(5);
const promise6 = new Promise((resolve) => setTimeout(resolve, 400, 'Promise 6 : slow'));

Promise.myRace = function(promises){
    let isSettled = false; 
    // Return the new promise as per the original Promise.any() functionality.
    return new Promise((resolve,reject)=>{
        // Handle each promise
        promises.forEach((promise)=>{
            // If the promise is resolved then resolve the result immediately. 
            // We use "Promise.resolve()" below to handle values like strings/numbers which are not promises themselves.
            Promise?.resolve(promise)
            .then(data=>{
                if(!isSettled){
                    isSettled = true;
                    resolve(data);
                }
            })
            .catch((error)=>{
                if(!isSettled){
                    isSettled = true;
                    // If the promise is rejected then reject the result immediately
                    reject(error);
                }
            });
            
        });
    });
}

Promise.myRace([promise1, promise2, promise3])
.then(data=>console.log("=======> 1. Promise.myRace success :",data))
.catch(error=>console.log("=======> 1. Promise.myRace error :",error))
.finally(()=>console.log("=======> 1. Promise.myRace finally : Execution Done"));
/*  Output:
    =======> 1. Promise.myRace success : 1
    =======> 1. Promise.myRace finally : Execution Done
 */

Promise.myRace([promise4,promise6])
.then(data=>console.log("=======> 2. Promise.myRace success :",data))
.catch(error=>console.log("=======> 2. Promise.myRace error :",error))
.finally(()=>console.log("=======> 2. Promise.myRace finally : Execution Done"));
/*  Output:
    =======> 2. Promise.myRace error : 4
    =======> 2. Promise.myRace finally : Execution Done
*/