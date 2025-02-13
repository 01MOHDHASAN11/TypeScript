// Object array tuple enum 

// const person : {
//     name:string;
//     profile:string;
//     experience:number;
//     education:{
//         HighSchool:string;
//         Intermediate:string;
//         Graduation:string;
//     };
//     skills:string[];
//     learning:string[]
// } = {
//     name:"Hasan",
//     profile:"Full stack developer",
//     experience:1,
//     education:{
//         HighSchool:"XYZ High School",
//         Intermediate:"ABC Public School",
//         Graduation:"LMN Institute of Technology"
//     },
//     skills:["React.js","Node.js","MongoDB","Express.js","Tailwind CSS","BootStrap","TypeScript","JavaScript","HTML","CSS","jQuery"],
//     learning:["Docker","Kubernetes","Jenkins","Jest","Mocha","Next.js"]
// }
// console.log(person)

// let onlyStr:string[]
// onlyStr=["Hindi"]
// onlyStr.push("English")
// onlyStr.unshift("Maths")
// let x=onlyStr.indexOf("English")
// onlyStr.splice(x,1)
// console.log(onlyStr)



// any type

// let anyArray:any[]
// anyArray=[]
// anyArray.push("a")
// anyArray.push(10)
// anyArray.push(true)
// anyArray.push({"a":1})
// console.log(anyArray)



// Tuple: It is a fixed size ordered array

// const person:{
//     name:string;
//     age:number;
//     product:[number,string]    // this is a tuple
// }={
//     name:"XYZ",
//     age:30,
//     product:[10,"k2"]
// }
// console.log(person)
// person.product[1]=10      will give error




// ENUMS in TypeScript

// TypeScript enum: TypeScript enums allow us to define or declare a set of named constants i.e. a collection of related values which could either be in the form of a string or number or any other data type.

// Enums generally accept default values in numbers (starting from 0).
// Although a user could change the values provided in enums according to the requirements.



// 1) Numeric Enums

// enum cardinalDirections {
//     North=1,
//     East,
//     West,
//     South
// }

// console.log(cardinalDirections)
// Output

// {
// 1: "North"
// 2: "East"
// 3: "West"
// 4: "South"
// East: 2
// North: 1
// South: 4
// West: 3
// }

// console.log(cardinalDirections.North)  //op: 1
// console.log(cardinalDirections.East)   //op: 2
// console.log(cardinalDirections.West)   //op: 3
// console.log(cardinalDirections.South)  //op: 4



// enum StatusCodes {
//   NotFound = 404,
//   Success = 200,
//   Accepted = 202,
//   BadRequest,
// }

// console.log(StatusCodes)
// Output
// {200: 'Success', 202: 'Accepted', 203: 'BadRequest', 404: 'NotFound', NotFound: 404, Success: 200, Accepted: 202, BadRequest: 203}


//   console.log(StatusCodes.NotFound);
//   console.log(StatusCodes.BadRequest);
//   console.log(StatusCodes.Success)




// 2). String Enums


// enum cardinalDirections {
//     North="North",
//     South="South",
//     East="East",
//     West="West",
// }

// console.log(cardinalDirections)
// Output
// {North: 'North', South: 'South', East: 'East', West: 'West'}

// console.log(cardinalDirections.East)
// console.log(cardinalDirections.North)
// console.log(cardinalDirections.West)
// console.log(cardinalDirections.South)






// 3). Heterogeneous Enums: 
// Heterogeneous enums contain both numeric and string enums values. The following example will explain Heterogeneous enums in a much better and clear manner-


// enum studentDetails {
//   name = "ABCD",
//   age = 20,
//   rollno = 12345,
//   address = "XYZ Place PQR city",
//   school_name = "ABCDEFG"
// }
// console.log(studentDetails);
// Output

// {
//   '20': 'age',
//   '12345': 'rollno',
//   name: 'ABCD',
//   age: 20,
//   rollno: 12345,
//   address: 'XYZ Place PQR city',
//   school_name: 'ABCDEFG'
// }





// 4).  Computed enums: 
// Computed enums in TypeScript allow us to generate enum values dynamically based on computations or function calls. This provides greater flexibility in defining enum members, enabling more complex scenarios where enum values need to be calculated at runtime.

// enum Weekdays {
//   Monday = 1,
//   Tuesday = Monday + 1,
//   Wednesday = Tuesday + 1,
//   Thursday = Wednesday + 1,
//   Friday = Thursday + 1,
//   Saturday = Friday + 1,
//   Sunday = Saturday + 1
// }

// console.log(Weekdays);

// output

// {
//   "1": "Monday",
//   "2": "Tuesday",
//   "3": "Wednesday",
//   "4": "Thursday",
//   "5": "Friday",
//   "6": "Saturday",
//   "7": "Sunday",
//   "Monday": 1,
//   "Tuesday": 2,
//   "Wednesday": 3,
//   "Thursday": 4,
//   "Friday": 5,
//   "Saturday": 6,
//   "Sunday": 7
// }
