if (!Object.prototype.sealPolyfill) {
    Object.defineProperty(Object.prototype, 'sealPolyfill', {
        value : function(){
            const obj = this;
            if(typeof obj !== 'object' || obj === null){
                throw new TypeError("Invalid object passed.");
            }
            function sealIt(obj){
                for(let [key,value] of Object.entries(obj)){
                    if(typeof value === "object"){
                        sealIt(value);
                        Object.preventExtensions(obj);
                    }
                    Object.defineProperty(obj, key, {
                        configurable : false
                    });
                }
            }
            sealIt(obj)
            return obj;
        },
        writable : true,
        configurable : true
    });
}

let obj1 = {
    a: 1,
    b: {
        c: 2
    }
}

obj1.sealPolyfill();
obj1.b.d = 20;
console.log(obj1);
// {
//     a: 1,
//     b: {
//         c: 2
//     }
// }