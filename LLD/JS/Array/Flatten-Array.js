function FlattenArray(array){
    if(!array || !Array.isArray(array)){
        throw new Error("Expected array parameter");
    }
    const flatArray = [];
    for(let val of array){
        if(Array.isArray(val)){
            const tempFlatArray = FlattenArray(val);
            flatArray.push(...tempFlatArray);
        }
        else{
            flatArray.push(val);
        }
    }
    return flatArray;
}
console.log(FlattenArray([1,[2,[3,[4,[5,6]]]]])); 
//Output: [1,2,3,4,5,6]
