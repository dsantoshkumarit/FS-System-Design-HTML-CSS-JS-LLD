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
## Difference between >> and >>>:
- The **>>** operator is the bitwise right shift operator, which shifts bits to the right and fills the leftmost bits with the sign bit (0 for positive numbers and 1 for negative numbers). 
The **>>>** operator is the zero-fill right shift operator, which shifts bits to the right and fills the leftmost bits with zeros, regardless of the sign of the number.