// Classes
// Simple Explanation: 
// A class is like a blueprint or a template for creating objects. It defines what properties (data) and methods (actions) an object will have.
// Technical Definition: 
// A class is a user-defined data type that encapsulates data (properties) and behavior (methods) into a single unit.

// class Car {
//   name:string;
//   color:string;

//   constructor(name:string,color:string){
//     this.name=name;
//     this.color=color;
//   }

//   drive():void{
//     console.log(`I drive ${this.name} car of ${this.color} color`)
//   }
// }

// This is object
// let myCar = new Car("Tata","red")
// myCar.drive()
// console.log(myCar.name)





// Inheritance:
// Simple Explanation: 
// Inheritance is like passing down traits from a parent to a child. A child class can reuse properties and methods from a parent class.
// Technical Definition: 
// Inheritance is a mechanism where a new class (child class) derives properties and methods from an existing class (parent class).

// class carModel extends Car {
//   model:string

//   constructor(name:string,color:string,model:string){
//     super(name,color)
//     this.model=model
//   }

//   myCarModel():void{
//     console.log(`My car brand is ${this.name} of color ${this.color} with model ${this.model}`)
//   }
// }

// const carDesc = new carModel("Tata","blue","XZ+")
// carDesc.myCarModel()






// 1) Single Inheritance
// A child class inherits from one parent class.
// This is the most common and straightforward type of inheritance.


// class Animal {
//   name: string;

//   constructor(name: string) {
//       this.name = name;
//   }

//   speak(): void {
//       console.log(`${this.name} makes a sound.`);
//   }
// }

// class Dog extends Animal {
//   breed: string;

//   constructor(name: string, breed: string) {
//       super(name); // Call the parent class constructor
//       this.breed = breed;
//   }

//   bark(): void {
//       console.log(`${this.name} barks.`);
//   }
// }

// const dog = new Dog("Buddy", "Golden Retriever");
// dog.speak(); // Output: Buddy makes a sound.
// dog.bark();  // Output: Buddy barks.






//2).  Multilevel Inheritance:
//     A class inherits from another class, which in turn inherits from yet another class.
//     This creates a chain of inheritance.


// class Animal {
//   name: string;

//   constructor(name: string) {
//       this.name = name;
//   }

//   speak(): void {
//       console.log(`${this.name} makes a sound.`);
//   }
// }

// class Dog extends Animal {
//   breed: string;

//   constructor(name: string, breed: string) {
//       super(name);
//       this.breed = breed;
//   }

//   bark(): void {
//       console.log(`${this.name} barks.`);
//   }
// }

// class Puppy extends Dog {
//   age: number;

//   constructor(name: string, breed: string, age: number) {
//       super(name, breed);
//       this.age = age;
//   }

//   cry(): void {
//       console.log(`${this.name} cries.`);
//   }
// }

// const puppy = new Puppy("Max", "Labrador", 1);
// puppy.speak(); // Output: Max makes a sound.
// puppy.bark();  // Output: Max barks.
// puppy.cry();   // Output: Max cries.









// 3) Hierarchical Inheritance
// Multiple child classes inherit from a single parent class.
// This allows sharing common functionality among multiple classes.


// class Animal {
//   name: string;

//   constructor(name: string) {
//       this.name = name;
//   }

//   speak(): void {
//       console.log(`${this.name} makes a sound.`);
//   }
// }

// class Dog extends Animal {
//   bark(): void {
//       console.log(`${this.name} barks.`);
//   }
// }

// class Cat extends Animal {
//   meow(): void {
//       console.log(`${this.name} meows.`);
//   }
// }

// const dog = new Dog("Buddy");
// const cat = new Cat("Whiskers");

// dog.speak(); // Output: Buddy makes a sound.
// dog.bark();  // Output: Buddy barks.

// cat.speak(); // Output: Whiskers makes a sound.
// cat.meow();  // Output: Whiskers meows.






// 4). Multiple Inheritance (via Interfaces)
// TypeScript does not support multiple inheritance directly (i.e., a class cannot extend more than one class).
// However, you can achieve similar functionality using interfaces and mixins.


// interface CanFly {
//   fly(): void;
// }

// interface CanSwim {
//   swim(): void;
// }

// class Bird implements CanFly {
//   fly(): void {
//       console.log("Flying...");
//   }
// }

// class Fish implements CanSwim {
//   swim(): void {
//       console.log("Swimming...");
//   }
// }

// class Duck implements CanFly, CanSwim {
//   fly(): void {
//       console.log("Duck is flying...");
//   }

//   swim(): void {
//       console.log("Duck is swimming...");
//   }
// }

// const duck = new Duck();
// duck.fly();  // Output: Duck is flying...
// duck.swim(); // Output: Duck is swimming...





// Encapsulation: 
// Encapsulation is one of the fundamental principles of object-oriented programming (OOP) that involves bundling data (properties) and methods (functions) that operate on the data into a single unit, typically a class. It also involves restricting direct access to some of an object's components, which is a way of preventing unintended interference and misuse of the data.
// In TypeScript, encapsulation can be achieved using access modifiers: public, private, and protected.
// Public: Members marked as public can be accessed from anywhere. This is the default access level in TypeScript if no modifier is specified.
// Private: Members marked as private can only be accessed within the class they are defined. This means that they cannot be accessed from outside the class, not even from instances of the class.
// Protected: Members marked as protected can be accessed within the class they are defined and also within any subclass that extends the class.




// class PersonDetails{
//   public name:string;
//   protected province:string;
//   private city:string;

//   constructor(name:string,province:string,city:string){
//     this.name=name;
//     this.province=province;
//     this.city=city;
//   }
// }

// class IndividualDetails extends PersonDetails{
//   constructor(name:string,province:string,city:string){
//     super(name,province,city)
//   }
//   details():void{
//     console.log(`${this.name}`)
//     console.log(`${this.province}`)
//     console.log(`${this.city}`)
//   }
// }

// const user = new IndividualDetails("Hasan","Uttar Pradesh","Lucknow")
// user.details()







// Abstraction:
// Abstraction is another core principle of object-oriented programming (OOP) that focuses on hiding the implementation details of a class and exposing only the necessary features or functionalities to the outside world. It allows you to work with high-level concepts without worrying about the underlying complexity.
// An abstract class is a class that cannot be instantiated directly. It serves as a blueprint for other classes and can contain both abstract methods (methods without implementation) and concrete methods (methods with implementation).
// Abstract methods must be implemented by any subclass that extends the abstract class.
// Abstract classes can also include properties and methods with implementations.



// abstract class Animal {
//   // Abstract property (must be implemented by subclasses)
//   abstract name: string;

//   // Concrete method (has an implementation)
//   eat(food: string): void {
//       console.log(`${this.name} is eating ${food}.`);
//   }

//   // Abstract method (must be implemented by subclasses)
//   abstract makeSound(): void;
// }

// class Dog extends Animal {
//   name: string;

//   constructor(name: string) {
//       super();
//       this.name = name;
//   }

//   // Implementing the abstract method
//   makeSound(): void {
//       console.log(`${this.name} says Woof!`);
//   }
// }

// const myDog = new Dog("Buddy");
// myDog.eat("bones"); // Output: Buddy is eating bones.
// myDog.makeSound(); // Output: Buddy says Woof!

// const animal = new Animal(); // Error: Cannot create an instance of an abstract class.







// Interfaces:
// Interfaces are another way to achieve abstraction in TypeScript. An interface defines a contract (a set of methods and properties) that a class must implement. Unlike abstract classes, interfaces cannot contain any implementation—they only define the structure.



// interface Vehicle {
//   start(): void;
//   stop(): void;
// }

// class Car implements Vehicle {
//   start(): void {
//       console.log("Car is starting...");
//   }

//   stop(): void {
//       console.log("Car is stopping...");
//   }
// }

// const myCar = new Car();
// myCar.start(); // Output: Car is starting...
// myCar.stop(); // Output: Car is stopping...







// Polymorphism:
// Simple Explanation: Polymorphism means "many forms." It allows objects of different classes to be treated as objects of a common superclass. For example, a dog and a cat can both be treated as animals.

// Technical Definition: Polymorphism is the ability of objects to take on multiple forms. It allows methods to behave differently based on the object that invokes them.


// class Animal{
//   makeSound():void{
//     console.log("Animal sounds")
//   }
// }
// class Dog extends Animal{
//   makeSound(): void{
//     console.log("Dog says Woof Woof")
//   }
// }

// class Cat extends Animal{
//   makeSound(): void {
//     console.log("Cat says Meow Meow")
//   }
// }

// const animalSound = new Cat()
// const animalSound = new Animal()
// const animalSound = new Dog()
// animalSound.makeSound()







// Static Member:
// Static members in TypeScript are properties or methods that belong to the class itself rather than to instances of the class. They are shared across all instances of the class and can be accessed directly using the class name, without needing to create an object of the class.


// class MathOperation{
//   static PI:number=3.14;
//   static add(a:number,b:number):number{
//     return a+b
//   }

//   static calculateCircleArea(r:number):number{
//     return this.PI*r*r
//   }
// } 
// console.log(MathOperation.PI)
// console.log(MathOperation.add(10,28))
// console.log(MathOperation.calculateCircleArea(14))








// Getter and Setters:
// Getters and setters in TypeScript are special methods that allow you to control access to the properties of a class. They provide a way to get (retrieve) or set (modify) the values of private or protected properties while adding additional logic, such as validation or computation, if needed.


// Syntax for getter and setter
// class ClassName {
//   private _property: type;

//   // Getter
//   get property(): type {
//       return this._property;
//   }

//   // Setter
//   set property(value: type) {
//       // Add validation or logic here
//       this._property = value;
//   }
// }
// The _property convention is often used to denote a private backing field for the property.






// example

// class Person{
//   private _age:number

//   constructor(age:number){
//     this._age=age
//   }

//   get age():number{
//     return this._age
//   }

//   set age(value:number){
//     if(value<0){
//       throw new Error("Age can't be set in negative value")
//     }
//     this._age=value
//   }

// }

// const person = new Person(25)
// console.log(person.age)
// person.age=20
// console.log(person.age)
// person.age=-8
// console.log(person.age)


