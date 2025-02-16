// Interface in TypeScript

// In TypeScript, an interface is a way to define the structure or shape of an object. It specifies the properties and methods that an object must have, without providing any implementation. Interfaces are used to enforce a specific structure on objects, making your code more predictable and easier to understand.

// Key Features of Interfaces:

// Define Object Shapes: Interfaces describe what properties and methods an object should have.
// No Implementation: Interfaces only define the structure, not the actual implementation.
// Type Checking: TypeScript uses interfaces to check if an object adheres to the defined structure.
// Reusable: Interfaces can be reused across multiple objects or classes.
// Extendable: Interfaces can extend other interfaces to create more complex structures.


// Syntax:

// interface InterfaceName {
//     property1: type;
//     property2: type;
//     methodName(): returnType;
//   }



// interface Person {
//     name:string;
//     age:number;
//     greet():void;
// }

// const person:Person={
//     name:"Alice",
//     age:24,
//     greet(){
//         console.log(`My name is ${this.name} and I am ${this.age}`)
//     }
// }
// person.greet()



// Extending Interfaces:
// Interfaces can extend other interfaces to inherit their properties and methods.


// interface Animal{
//     name:string;
//     makeSound():void
// }

// interface Dog extends Animal{
//     breed:string
// }

// const dog:Dog={
//     name:"Buddy",
//     breed:"Golden Retriever",
//     makeSound(){
//         console.log("Woof Woof")
//     }
// }
// dog.makeSound()




// Optional Properties:
// You can mark properties as optional using ?.


// interface Details{
//     name:string;
//     email?:string;
//     city:string;
// }

// const user1:Details={name:"Alice",city:"Lucknow"}
// const user2:Details={name:"John",email:"john@example.com",city:"Agra"}
// console.log(user1)
// console.log(user2)




// Readonly Properties:
// You can mark properties as readonly to make them immutable after initialization.

// interface Person{
//     readonly name:string;
//     readonly city:string;
// }

// const person:Person={name:"Alice",city:"XYZ"}
// console.log(person)





// Interfaces for Classes:
// Interfaces can be used to enforce a contract on classes using the implements keyword



interface Vehicle{
    start():void;
    stop():void;
}

class Car implements Vehicle{
    start(){
        console.log("Car starts")
    }
    stop() {
        console.log("Car stops")
    }
}

const myCar = new Car()
// myCar.start()
myCar.stop()

