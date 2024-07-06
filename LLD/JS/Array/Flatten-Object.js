const input = {
    firstName: "John",
    lastName: "Doe",
    address: {
        street: "North 1st street",
        city: "San Jose",
        state: "CA",
        country: "USA",
        postCodes: {
            firstBlock: 10,
            secondBlock: 12,
        },
    },
};



function flattenObject(object, keyStr = "", res = {}){
    for(let [key,value] of Object.entries(object)){
        const carryForwardKey = `${keyStr ? keyStr+"." : ""}${key}`;
        if(typeof value === "object" && !Array.isArray(value)){
            flattenObject(value,carryForwardKey, res);
        }
        else{
            res[carryForwardKey] = value;
        }
    }
    return res;
}

console.log("Flattened object output:", flattenObject(input));
// Flatten object output:
// {
//     firstName: "John",
//     lastName: "Doe",
//     address.street: "North 1st street",
//     address.city: "San Jose",
//     address.state: "CA",
//     address.country: "USA",
//     address.postCode.firstBlock: 10,
//     address.postCode.secondBlock: 12,
// }