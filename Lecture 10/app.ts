// Generics in typescript:

// Generics in TypeScript are a feature that allows you to create reusable and type-safe components, such as functions, classes, and interfaces, that can work with a variety of data types. By using generics, you can write flexible code that maintains type safety without being tied to a specific type. Generics are defined using angle brackets (<T>) and can be constrained to specific types or properties using the extends keyword.

// function identity <T>(arg:T){
//     return arg
// }

// const x= identity<number>(46)
// console.log(x)
// const y= identity<string>("Hello")
// console.log(y)



// function printArray<T>(arg:T[]){
//     return arg
// }

// const str = printArray<string>(["a","b","c","d","e"])
// const num = printArray<number>([1,2,3,4,5,6,7,8,9])
// console.log(str)
// console.log(num)






interface KeyValuePair <K,V>{
    key:K,
    value:V
}

let part1:KeyValuePair<number,string>={key:10,value:"Hello"}
console.log(part1)
let part2:KeyValuePair<string,number>={key:"Hasan",value:1000}
console.log(part2)