function Flatten(array){
    const flatArray = [];
    for(let val of array){
        if(Array.isArray(val)){
            const tempFlatArray = Flatten(val);
            flatArray.push(...tempFlatArray);
        }
        else{
            flatArray.push(val);
        }
    }
    return flatArray;
}
flatten([1,[2,[3,[4,[5,6]]]]]); 
//Output: [1,2,3,4,5,6]

function makeDeepCopy(object) {
    let newObj;
    if(Array.isArray(object)){
        newObj = [];
        for(let value of object){
            if(Array.isArray(value) || typeof value === "object"){
                newObj.push(makeDeepCopy(value));
            }
            else{
                newObj.push(value);
            }
        }
    }
    else if(typeof object === "object"){
        newObj = {};
        for(let [key,value] of Object.entries(object)){
            if(Array.isArray(value) || typeof value === "object"){
                newObj[key] = makeDeepCopy(value);
            }
            else{
                newObj[key] = value;
            }
        }
    }
    return newObj;
}

makeDeepCopy({ dish: "noodles", recipe: { list: ["eggs", "flour", "water"] } });
// Output : { dish: "noodles", recipe: { list: ["eggs", "flour", "water"] } } => New deep copied object