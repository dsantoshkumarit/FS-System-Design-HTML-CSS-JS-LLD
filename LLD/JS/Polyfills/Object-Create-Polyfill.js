function myObjectCreate1(proto) {
    if(proto === null || proto === undefined || typeof proto !== 'object')
    {
        throw Error;
    }
    function f() {}
    f.prototype = proto;
    // The function f acts as a constructor function, and when called with the new keyword, it returns a new instance that inherits from the proto object.
    return new f();
}

function myObjectCreate2(proto) {
    if(proto === null || proto === undefined || typeof proto !== 'object'){
        throw new Error("Invalid object proto passed");
    }
    else{
        const newObject = {};
        Object.setPrototypeOf(newObject, proto);
        return newObject;
    }
}

// Step 1: Define a prototype object
const personPrototype = {
    greet: function() {
        console.log("Hello, my name is " + this.name + ".");
    }
};
// Step 2: Call myObjectCreate and pass the prototype object and assign the returned object to a variable
const person = myObjectCreate1(personPrototype);
// Step 3: Use the newly created object
person.name = "John";
person.greet(); // Output: Hello, my name is John.