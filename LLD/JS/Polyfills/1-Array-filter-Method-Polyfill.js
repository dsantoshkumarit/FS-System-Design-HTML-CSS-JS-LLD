Array.prototype.myFilter = function(cb){
    const array = this;
    const resultArray = [];
    for(let i=0; i<array.length; i++){
        if(cb(array[i],i,array)){
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}

console.log([1,2,3].myFilter((val)=>val<3));
// [1,2]