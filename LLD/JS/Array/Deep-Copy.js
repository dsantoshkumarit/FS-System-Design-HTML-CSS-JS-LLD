
// Approach 1 - My Approach
function DeepCopyObject(object) {
    if (!object) {
        throw new Error(object, " is null or undefined");
    }
    let newObj;
    if(Array.isArray(object)){
        newObj = [];
        for(let value of object){
            if(Array.isArray(value) || typeof value === "object"){
                newObj.push(DeepCopyObject(value));
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
                newObj[key] = DeepCopyObject(value);
            }
            else{
                newObj[key] = value;
            }
        }
    }
    return newObj;
}
const dishData1 =  { dish: "bread", recipe: { list: ["eggs", "flour", "water"] } };
const dishData2 = DeepCopyObject(dishData1);
dishData2.dish = "pancakes";
dishData2.recipe.list.push('butter');
console.log("dishData1:",dishData1);
//Output: { "dish": "bread","recipe": {"list": ["eggs","flour","water"] } }
console.log("dishData2:",dishData2);
//Output: { "dish": "pancakes","recipe": {"list": ["eggs","flour","water","butter"] } }

const a = [function(a,b){
    return a+b;
}];
const b = DeepCopyObject(a);
b[0] = function(a,b) { return a*b;};
console.log(a[0](4,5));