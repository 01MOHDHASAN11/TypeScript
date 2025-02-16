// Type Assertion in TypeScript
// Type Assertion in TypeScript is a way to explicitly tell the TypeScript compiler what the type of a variable is, even when TypeScript cannot infer it automatically. It allows developers to override the default type inference and treat a variable as a specific type. This is particularly useful when you know more about the type of a value than TypeScript does.
// TypeScript provides two syntaxes for type assertion:
// Angle Bracket Syntax: <Type>variable
// as Syntax: variable as Type
// 1st method
var x = "abcdefghij";
var y = x;
console.log(x.length);
console.log(y);
// 2nd method
// const x:any="123456"
// const y= (x as string).length
// console.log(y)
