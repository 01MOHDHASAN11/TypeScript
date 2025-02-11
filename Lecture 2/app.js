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
// enum cardinalDirections {
//     North=1,
//     East,
//     West,
//     South
// }
// console.log(cardinalDirections.North)  //op: 1
// console.log(cardinalDirections.East)   //op: 2
// console.log(cardinalDirections.West)   //op: 3
// console.log(cardinalDirections.South)  //op: 4
// enum cardinalDirections {
//     North="North",
//     South="South",
//     East="East",
//     West="West",
// }
// console.log(cardinalDirections.East)
// console.log(cardinalDirections.North)
// console.log(cardinalDirections.West)
// console.log(cardinalDirections.South)
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 203] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 203
console.log(StatusCodes.BadRequest);
console.log(StatusCodes.Success);
