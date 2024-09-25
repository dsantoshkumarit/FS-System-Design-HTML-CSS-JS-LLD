function throttle(cb, delay = 250) {
    let shouldWait = false
    return (...args) => {
        if (shouldWait) return;

        cb(...args);
        shouldWait = true;
        setTimeout(() => {
            shouldWait = false;
        }, delay);
    }
}

const throttleWithWaitingArgs = (cb, delay = 500) => {
    let shouldWait = false;
    let waitingArgs = null;
    return function(...args){
        if(shouldWait) {
            waitingArgs = args;
            return;
        };
        cb(...args);
        shouldWait = true;
        setTimeout(()=>{
            if(waitingArgs?.length){
                cb(...waitingArgs);
                waitingArgs = null;
            }
            shouldWait = false;
        },delay);
    };
}

const throttledFunc = throttleWithWaitingArgs((value) => console.log(value), 200);

throttledFunc("First call"); // Should log "First call" immediately
setTimeout(()=>throttledFunc("Second call"),50); // Should return from calling the callback as delay time did not elapsed
setTimeout(()=>throttledFunc("Third call"),100); // Should return from calling the callback as delay time did not elapsed
setTimeout(()=>throttledFunc("Fourth call"),150); // Should be calling the callback which logs "Fourth call" as delay time elapsed.
// Should log "Second call" after 200 ms
setTimeout(()=>throttledFunc("Fifth call"),200); // Should be calling the callback which logs "Fourth call" as delay time elapsed.

/* ======== Example Implementation ======== :
const updateOptions = throttle(query => {
    fetch(`/api/getOptions?query=${query}`)
        .then(res => res.json())
        .then(data => setOptions(data))
    }, 500);
    
    input.addEventListener("input", e => {
        updateOptions(e.target.value)
    });
*/
/*
Output :
"First call"
"Fourth call"
*/