

let num = 18
let str = num.toString()
console.log(str, typeof str) //18 string


str = "um dia de sol"

console.log(Number(str))      //NaN
console.log(Number(true))     //1
console.log(Number(false))    //0
console.log(Number("10"))     //10
console.log(Number(" 10 "))   //10
console.log(Number("10.5"))   //10.5
console.log(Number("10,5"))   //NaN

console.log(Number.parseFloat(str)) //NaN
console.log(Number.parseFloat(10))
console.log(Number.parseFloat("10"))
console.log(Number.parseFloat(true))
console.log(Number.parseFloat(false))
console.log(Number.parseFloat("10.5"))
console.log(Number.parseFloat("10,5"))

console.log(Number.parseInt(str))    //NaN
console.log(Number.parseInt("10"))   //10
console.log(Number.parseInt("10.5"))  //10
console.log(Number.parseInt("10,5"))  //10
console.log(Number.parseInt("10 11 12 13")) //10
console.log(Number.parseInt(" 10 "))       //10
console.log(Number.parseInt("35 anos"))    //35