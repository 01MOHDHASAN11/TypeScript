// Never type in typescript:
// In TypeScript, the Never type is a function that never returns a value but throws an exception or error and terminates the program. It is often used to indicate that a function will not return a value or that a variable will never have a value.




// function throwCustomError(message: string): never {
//     throw new Error(message);
// }

// function processResult(result: string | null): string {
//     if (result === null) {

//         // This function throws an error, 
//         // so the next line is unreachable.
//         throwCustomError("Result is null.");
//     }
//     return result;
// }

// const result = processResult("Hello GeeksforGeeks!");
// console.log(result);




// function throwError(message: string): never {
//     throw new Error(message);
// }

// function divide(a: number, b: number): number {
//     if (b === 0) {
//         throwError("Division by zero.");
        
//         // This function throws an error, 
//         // so the next line is unreachable.
//     }
//     return a / b;
// }

// const result = divide(10, 2);
// console.log(result);
// console.log(throwError("Hello"))
