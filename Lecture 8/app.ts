// Type guards in TypeScript are a way to narrow down the type of a variable within a specific block of code. They are particularly useful when working with union types, where a variable can be one of several types. Type guards allow you to write more type-safe code by ensuring that the correct operations are performed on the variable based on its type.

// Types of Type Guards:

//1). typeof Type Guards:
// The typeof operator can be used to check the type of a primitive value (e.g., string, number, boolean, etc.).


// interface Add {
//     num1: string | number;
//     num2: string | number;
// }

// const add = (num1: string | number, num2: string | number): string | number => {
//     if (typeof num1 === "string" || typeof num2 === "string") {
//         return num1.toString() + num2.toString();
//     } else {
//         return Number(num1) + Number(num2);
//     }
// };

// console.log(add(4, 5));
// console.log(add("4", "5")); 



//2). instanceof Type Guards:
// The instanceof operator is used to check if an object is an instance of a specific class or constructor function.


// class Dog{
//     bark(){
//         console.log("Woof Woof")
//     }
// }

// class Cat{
//     Meow(){
//         console.log("Meow Meow")
//     }
// }

// function animalSound(animal: Dog|Cat){
//     if(animal instanceof Dog){
//         animal.bark()
//     }
//     else{
//         myCat.Meow()
//     }
// }

// const myDog = new Dog()
// const myCat = new Cat()
// animalSound(myDog)
// animalSound(myCat)




// Literal Type Guards:
//3). When working with literal types (e.g., specific string or number values), you can use equality checks to narrow down the type.


// type Direction="up"|"down"|"left"|"right"

// function move(direction:Direction):string{
//     if(direction==="up"){
//         return "Moving up"
//     }
//     else if(direction==="down"){
//         return "Moving down"
//     }
//     else if(direction==="left"){
//         return "Moving left"
//     }
//     else if(direction==="right"){
//         return "Moving right"
//     }
// }
// console.log(move("up"))
// console.log(move("down"))
// console.log(move("left"))
// console.log(move("right"))




//4). in Operator Type Guards:
// The in operator can be used to check if a property exists on an object, which can help narrow down the type.



// interface Car {
//     drive():void;
// }

// interface Truck{
//     load():void;
// }

// function operate(vehicle: Car|Truck){
//     if("drive" in vehicle){
//         vehicle.drive()
//     }
//     else{
//         vehicle.load()
//     }
// }

// const myCar:Car={drive(){console.log("Driving")}}
// const myTruck:Truck={load(){console.log("Loading")}}

// operate(myCar)
// operate(myTruck)






//5). Custom Type Guard (User-Defined)
// Kabhi-kabhi humein apne hisab se type check karna hota hai. Iske liye hum Custom Type Guard banate hain. Ye ek function hota hai jo true ya false return karta hai aur TypeScript ko batata hai ki variable ka type kya hai.


interface Dog {
    bark(): void;
}

interface Cat {
    meow(): void;
}

// Custom Type Guard
function isDog(pet: Dog | Cat): pet is Dog {
    return (pet as Dog).bark !== undefined;
}

function makeSound(pet: Dog | Cat) {
    if (isDog(pet)) {
        pet.bark(); // Dog ka method
    } else {
        pet.meow(); // Cat ka method
    }
}

const myDog: Dog = { bark: () => console.log("Woof!") };
const myCat: Cat = { meow: () => console.log("Meow!") };

makeSound(myDog); // Output: Woof!
makeSound(myCat); // Output: Meow!