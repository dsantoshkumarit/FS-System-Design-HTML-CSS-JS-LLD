/*
    Solution Approach:

    1. The given problem can be solved by using the "instanceof" operator in a recursive manner.
    2. Start with the given object and check if it is an instance of the class using the instanceof operator. If it is, return true.
    3. If the object is not an instance of the class, get the prototype of the object using Object.getPrototypeOf(obj).
    4. Repeat the process recursively by checking if the prototype object is an instance of the class. If it is, return true.
    5. Keep iterating up the prototype chain until either the object is found to be an instance of the class or the prototype chain ends (i.e., the prototype is null).
    6. If none of the prototypes in the chain are instances of the class, return false.
*/

function checkIfInstanceOf(obj, classFunction) {
    while (obj !== null) {
        if (obj.constructor === classFunction) {
            return true;
        } else {
            obj = Object.getPrototypeOf(obj);
        }
    }
    return false;
}

console.log("new Date() and Date:", checkIfInstanceOf(new Date(), Date));
// 'new Date() and Date': true
console.log("Date and Date:", checkIfInstanceOf(Date, Date));
// Date and Date: false

function checkIfInstanceOf1(obj, classFunction) {
    if (obj == null || obj == undefined) return false;
    if (obj instanceof classFunction) return true;
    else return false;
}

console.log("new Date() and Date:", checkIfInstanceOf1(new Date(), Date));
// 'new Date() and Date': true
console.log("Date and Date:", checkIfInstanceOf1(Date, Date));
// Date and Date: false
