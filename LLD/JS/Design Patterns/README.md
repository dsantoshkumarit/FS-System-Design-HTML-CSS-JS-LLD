# Reference Links:
- JS patterns - https://javascriptpatterns.vercel.app/patterns
# Design Patterns:
- Design patterns are reusable solutions to common software development problems.
- They help in standardizing and improving code reusability.
# Types:
## Creational Patterns:
- These patterns abstract the instantiation process.
- They help in making a system independent of how its objects are created, composed and represented.
- Eg : Constructor, Singleton
    ### Constructor:
    - Creating objects using a Constructor Function or ES6 Classes.
    ```js
        function Person(name, age){
            this.name = name;
            this.age = age;
        }
        const john = new Person('John', 30);
        console.log(john.name); // John
    ```
    ### Singleton:
    - Ensure only one instance exists using function.
    ```js
        const Singleton = (fucntion (){
            let instance;
            function createinstance(){
                return {id:Math.random()}
            }
            return {
                getInstance : fucntion(){
                    if(!instance){
                        instance = createInstance();
                    }
                    return instance;
                }
            };
        })();
        console.log(Singleton.getInstance());
    ```
    - Ensure only one instance exists using class.
    ```js
        let instance;
        class Counter{
            constructor(initVal = 0){
                if(instance){
                    throw new Error("You can create only one instance");
                }
                this.count = initVal;
                instance = this;
            }
            getCount(){
                return this.count;
            }
            increment(){
                return ++this.count;
            }
            decrement(){
                return --this.count;
            }
        }
        const singletonCounter = Object.freeze(new Counter());
        export default singletonCounter; 
    ```

## Structural Patterns: 
- These are mainly responsible for how classes and objects are composed to form larger structures.
- These use inheritance to compose interfaces or implementations.
- Eg : Decorator
    ### Decorator:
    - Add behaviour to objects without modifying their structure.
    ```js
        function addLogging(func){
            return function(...args){
                console.log(`Arguments: ${args}`);
                return func(...args);
            };
        }
        const add = (a,b) => a+b;
        const loggedAdd = addLogging(add);
        console.log(loggedAdd(3,4));
        /*
            Arguments: [3,4]
            7
        */ 
    ```
## Behavioral Patterns:
- These are concerned with algorithms and the assignment of responsibilites, patterns of communication between objects. 
- Eg : Observer, Stratergy
    ### Observer:
    - Allow objects to subscribe to changes in another object.
    ```js
        class Subject{
            constructor(){
                this.observers = [];
            }
            subscribe(observer){
                this.observers.push(observer);
            }
            notify(data){
                this.observers.forEach(observer => observer(data));
            }
        }
        const subj = new Subject();
        subj.subscribe(data => console.log("Observer 1:",data));
        subj.subscribe(data => console.log("Observer 2:",data));
        subj.notify("Data Updated");
        /*
            Observer 1: Data Updated
            Observer 2: Data Updated
        */
    ```

    ### Stratergy:
    - Choose an algorithm dynamically based on context.
    ```js
        class StratergyContext{
            setStratergy(stratergy){
                this.stratergy = stratergy;
            }
            executeStratergy(a,b){
                return this.stratergy(a,b);
            }
        }
        const add = (a,b) => a+b;
        const multiply = (a,b) => a*b;
        const context = new StratergyContext();
        context.setStratergy(add);
        console.log("Add: ",context.executeStratergy(3,4));
        context.setStratergy(multiply);
        console.log("Multiply: ",context.executeStratergy(3,4));
        /*
            Add: 7
            Multiply: 12
        */
    ```