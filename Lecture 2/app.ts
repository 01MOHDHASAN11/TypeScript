// Object array tuple enum 

const person : {
    name:string;
    profile:string;
    experience:number;
    education:{
        HighSchool:string;
        Intermediate:string;
        Graduation:string;
    };
    skills:string[];
    learning:string[]
} = {
    name:"Hasan",
    profile:"Full stack developer",
    experience:1,
    education:{
        HighSchool:"XYZ High School",
        Intermediate:"ABC Public School",
        Graduation:"LMN Institute of Technology"
    },
    skills:["React.js","Node.js","MongoDB","Express.js","Tailwind CSS","BootStrap","TypeScript","JavaScript","HTML","CSS","jQuery"],
    learning:["Docker","Kubernetes","Jenkins","Jest","Mocha","Next.js"]
}
// console.log(person)