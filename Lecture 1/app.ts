function add(n1:number,n2:number, boolResult:boolean,strVal:string){
    if(boolResult){
        console.log(`${strVal}${num1+num2}`)
    }
    else{
        return n1+n2
    }
}
var num1=20
var num2=30
var strVal="Sum of num1 and num2 is: "
var boolResult = true
add(num1,num2,boolResult,strVal)


