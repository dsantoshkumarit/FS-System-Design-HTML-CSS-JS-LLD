# Code snippets

## Calculate the time it took to execute an operation using 'console.time()' and 'console.timeEnd()':
```js
    console.time("First call");
    console.log(timeTakingOperation());
    console.timeEnd("First call");
    /*
        output:
        First call : 45.123123123ms
        Function timeTakingOperation() called
    */ 
```