/**
 * The `debounce` function in JavaScript delays the execution of a function until a specified time has passed without the function being called again.
 * @param fn - The `fn` parameter is a function that you want to debounce. This function will be called
 * after a certain delay once it stops being invoked repeatedly.
 * @param delay - The `delay` parameter is the time in milliseconds for which the function call should be delayed before executing the actual function `fn`.
 * @returns A function is being returned which takes any arguments needed for the function `fn`.
 */
const debounce = (cb, delay = 500) => {
    let timeoutId; 
    return function(...args){
        if(timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() =>{
            cb(...args);
        },delay);
    };
}

const debouncedFunc = debounce((value) => console.log(value), 200);

debouncedFunc("First call"); // Should not log immediately
debouncedFunc("Second call"); // Should cancel the previous and set a new timeout
// Wait for 200 ms
// Should log "Second call" after 200 ms

/*
Output :
"Second call"
*/
