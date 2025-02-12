// UNION

// The TypeScript union has the ability to combine one or two different types of data (i.e., number, string, float, double, etc). It is the most powerful way to express a variable with multiple types. Use pipe (‘|’) symbol to combine two or more data types to achieve Union type.
// Syntax:
// (type1|type2|type3|...|type-n)

// function combine(num1:string|number|boolean, num2:string|number){
//     let result
//     if(typeof(num1)==="number" && typeof(num2)==="number"){
//         result=num1+num2
//     }
//     else{
//         result=num1.toString()+" "+num2.toString()
//     }

//     return result
// }

// const numValue=combine(10,10)
// const strValue=combine("Mohd","Hasan")
// console.log(numValue,strValue)



// LITERAL TYPES

// TypeScript's literal types allow developers to specify exact values for variables, function parameters, or properties, enhancing type safety by ensuring variables can only hold predefined values.
// Allow variables to have specific, exact values.
// Enhance code reliability by restricting permissible values.
// Here are the types of literal types in TypeScript:

// 1). String literal
// type Direction = "Up"|"Down"|"Left"|"Right"

// let move:Direction
// move="Left"
// console.log(move)


// 2). Number literal
// type numbers = 1|2|3|4|5|6

// let randNum:numbers
// randNum=5
// console.log(randNum)


// 3). Boolean literal
// type boolVal=true

// function typeBool():boolVal{
//     return true
//     // return false
// }
// console.log(typeBool())



// TYPE ALIAS / CUSTOM TYPES


// In TypeScript, a type alias allows you to assign a custom name to an existing type, enhancing code readability and reusability.
// Provide a shorthand for complex types like unions or objects.
// Allow naming of primitive types, object types, or functions for clarity.
// Simplify repetitive type definitions and improve maintainability.



type userProfile = {
    name:string;
    email:string;
    age:number
}

const user:userProfile={
    name:"Mohd Hasan",
    email:"01mohdhasan11@gmail.com",
    age:24
}

function greetUser(profile:userProfile):string{
    return `Hi I am ${profile.name}. My age is ${profile.age} and my email is ${profile.email}`
}

console.log(greetUser(user))

