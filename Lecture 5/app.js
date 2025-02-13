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
function throwError(message) {
    throw new Error(message);
}
function divide(a, b) {
    if (b === 0) {
        throwError("Division by zero.");
        // This function throws an error, 
        // so the next line is unreachable.
    }
    return a / b;
}
var result = divide(10, 2);
console.log(result);
console.log(throwError("Hello"));
