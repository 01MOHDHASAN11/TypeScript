// Function in TypeScript
// Syntax
// function functionName(arg: argType):return type {
//     //function Body
// }
// Void functions:
// Void function in TypeScript are functions that do not return a value. They perform actions or computations without producing a result that needs to be captured. Commonly used for side effects like logging, modifying external state, or triggering asynchronous operations, they enhance code clarity.
// Syntax
// function functionName(parameters: ParameterType): void {
//     // Function body
//     // No return statement or return type annotation is needed
// }
// Promises in typeScript
// Functions that return promises in TypeScript specify Promise<Type> as the return type, indicating asynchronous operations that return a value of the specified type.
// async function greetUser(user:string):Promise<string>{
//     return `Hello ${user}`
// }
// greetUser("Hasan").then((result)=>{
//     console.log(result)
// })
// Anonymous function
// const result = function(num:number):number{
//     return num*num
// }
// console.log(result(4))
// Unknown Function in typeScript
// In TypeScript, the unknown type is used for variables whose types aren't known in advance. It ensures type safety by requiring explicit type checks or assertions before usage, preventing arbitrary operations, and promoting safer handling compared to the `any` type.
// Syntax
// function gfg(input: unknown): void {
// }
// function greet(name:unknown):void{
//     if(typeof(name)==="string"){
//         console.log(`Hello ${name}`)
//     }
//     else if(name===null){
//         console.log(`Hello guest`)
//     }
//     else{
//         console.log(`Hello there`)
//     }
// }
// greet("Hasan")
// greet(null)
// greet(19)
// Arrow function in typeScript
// const multiply = (a: number, b: number): number =>{
//     return a * b
// };
// console.log(multiply(2, 5));
// Optional and default parameter in typescript
// function greet(first_name:string,last_name:string="Doe"):string{
//     return `Hello ${first_name} ${last_name}`
// }
// console.log(greet("John"))
// console.log(greet("John","Smith"))
// function overloading in typescript
// Method overloading is the process in which one method could be used multiple times with same name and different parameter types or return types.
// Function name and number of parameters in overloaded functions should be same.
// Return type of overloaded functions along with data types of parameters could be altered (changed).
// Method Overloading provides code reusability, which saves time and efforts.
// This process also saves memory space, so that the program execution becomes bit faster.
// This process also increases code readability.
// function addData(data1 : string, data2 : string) : string; 
// function addData(data1 : number, data2 : number): number; 
// function addData(data1 : any, data2 : any){ 
// 	return data1+ data2; 
// } 
// console.log(addData("Hello ", "GeeksforGeeks")); 
// console.log(addData(20, 30));
// function callback in TypeScript
function addHandle(num1, num2, callback) {
    var result = num1 + num2;
    callback(result);
}
addHandle(10, 20, function (result) {
    console.log(result);
});
