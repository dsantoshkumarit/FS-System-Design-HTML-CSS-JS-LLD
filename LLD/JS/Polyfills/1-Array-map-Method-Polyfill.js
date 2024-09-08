Array.prototype.myMap = function(cb){
    const resultArr = [];
    const array = this;
    for(let i=0; i<array.length;i++){
        resultArr.push(cb(array[i], i, array));
    }
    return resultArr;
}

console.log([1,2,3].myMap((val)=>val*val));
// [ 1, 4, 9 ]