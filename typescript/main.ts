console.log("hello world");
//variables
//let , const , var
let My_friend = "fiza";
console.log(My_friend);
My_friend = "hafsa"
console.log(My_friend);
const v =123
const q= 123
console.log(v+q);
var p=true
var V = false
console.log(p);
//cancatenation
let myfri= "fiza";
let myfri1= "hafsa";
let friends= myfri + " us my friend " + myfri1 + " is my old friend ";
console.log(friends);
//learn data types
//premative data type also its type
// non pemative data type also its type
//developers
//type interference
//strong typing
//developers
//operators
//arithmatic operators
let x=2;
let y=5;
let z=x+y;
console.log(z);
let a=2+6;
console.log(a);
let num1=3+9;
console.log(num1);
let b=2;
b +=5; // this is called assignment operators
console.log(b);
//also apply this formula on subtraction
//multiplication
let c=5*2;
c *=2;
console.log(c)
//division
let d=18/3
d /=2
console.log(d);
//exponentation
let h=2**9
console.log(h);
//modulus find remainder
let t=18%4;
console.log(t);
//unary operators=++,--
//increament and decreament
let k=4;
k++;
++k;
console.log(k);
let n=6;
--n;
n--
console.log(n);
let m=2;
let o=5;
let r=9;
let j=m++ + o-- + --m + --r + --r + ++o;
console.log(j);
//combining operators rule BODAMS B=BRACKET,O=OPEN
//perfom defferent operators in one variable
let i=6*5/3-(2+2);
console.log(i);
//BMI caculator
//weight
//height
//formula
let weight=40;
let height=5.3**2;
let BMI=weight/height;
console.log(BMI);
console.log(BMI.toFixed(2));
//assignment operators use =  sign to s=asign value only
//comparison operators koi kisi ke muqabil hota hai
//== ,!=, >, <,>=, <=
//example ==
let  friend = "fiza"
let newfriend = "hafsa"
console.log(friend == newfriend);
//eg !=
console.log(friend != newfriend);
//eg >,<
let no1 = 20;
let no2 = 10;
let no3 = no1>no2;
console.log(no3);
//eg <=
let no4= no1 <= no2;
console.log(no4);
//=== check data type strickly
let result = typeof friend === typeof no1;
console.log(result);
//logical operators
//&&=and ,||=or , !=not
//eg &&
let boy= "ali";
let girl = "fiza";
let finall = boy == "ali" && girl == "hafsa";
console.log(finall);
let ay = true && true && true && false
console.log(ay);

//eg || is opposite&&
//let A = boy == aqib || girl = hafsa
console.log("A");
//eg !
let cr = true;
console.log(!cr);
let L= 1;
let K = 2
let S =L>K && L<K && K>L
console.log(S);
let W= 1;
let U = 2
let A =W>U || W<U || U>=W
console.log(A);
//logic statement
//if else
//else if
//nested if else
//ternery operators
//eg if else
if (true){
    console.log("yes"); 
}else{
    console.log("no");
    
}
if (false){
    console.log("yes"); 
}else{
    console.log("no");
    
}
//eg else if
let grade ="A++";
if(grade=="A++"){
    console.log("genius");
}else if(grade =="B"){
    console.log("intelligent");
}else if (grade =="C"){
    console.log("normal");
}else{
    console.log("fail");
    
}
//nested if else
let marks = 90;
if  (true){
    if (marks= 80){
        
    console.log("not bad");    
    } else{
    console.log("very bad");   
    }
if (marks<=90){
    console.log("amazing no");   
}else{
    console.log("good");
    
}
}
//hum statement mein bhi variables banate hein
let number;0
if(number=== undefined){
    let r = 10;
    let e = 20
    let d = r+e
    console.log(`the sum of ${r} and ${e} is ${d}`);
}else{
    console.log("zero");
    
}
let nu;
if(nu=== false){
    let r = 10;
    let e = 20
    let d = r+e
    console.log(`the sum of ${r} and ${e} is ${d}`);
}else{
    console.log("zero");
    
}


 //command for config ki file =  tsc --init ye file latest version ke lia use hoti hai
//command for package file = npm init -y ye file hamein hamare folder file project ka bare mein bata te hein
//modules yani bana banae code ko export or impor kkarwate hein 
//there are two types of modules internal jo hum khud banate hein or export or import karte hein
//there are two types of modules externa jo bhar se bane hue code ko or export or import karte hein
//export do tarhan karwate hein  default or normal
//object ko hum fdo tariqon se bana sakte hein
//dot notation,square bracket notation
let student ={
    name:"ayesha",
    class: 9,
    age : 14,
}
console.log(student);
console.log(student.name);
console.log(student["class"]);
// type literals of object jaise strong typing or : use karte hein
let stu : {
    name:string;
    class:number;
    age:string
} = {
    name:"ayesha",
    class : 9,
    age: "forteen",
}
//type aliase yani ik type ka concept banaein or har object kalia use karei
//type aliase ke lie hum 'type' ka syntax lete hein
type student2={
    name:string,
    class:string,
    age:number,
}
let student3:student2= {
    name:"ayesha",
    class :"9",
    age:14,
}
//union ager ik variable ko ziada tye deni hon to use hota hai
let my_friend:string|number|boolean="fiza";
my_friend=4;
my_friend =true;
//union mein khud bhi type bana sakte hein
let food :'pizza' | 'burger'|'baryani'
 food = "baryani";
 food ="pizza";
 //intersection ager kio person teacher bhi or student bhi to phele donon ki type bana te hein phir unhein ikhata lekhte hein
 type teacher={
    salary:number,
    position:string,
 }
type stu1={
    name:string,
    class:number,
}
let person :teacher & stu1={
    name:"ayesha",
    class:9,
    salary:200000000000000000,
    position:"senior",
}
//module mein hum bani bani cheezon ko import or export karwate hein  hr do ya do se ziada file banate hein jab hum khud se export or import karwate he
//module do tarhan ke hote hein external or internal
// modile ko do tarhan se export or import karwate hein= defaultor normal
//by default
import aim from "./module.js";
console.log(aim);
//normal
import  {agenda} from "./module.js";
// funtions and its type and its signature or syntax funtion name(){}
// normal or simple funtion
function add(a:number,b:number) {
    console.log("4");
    console.log(a+b);
    
}
 add(5,6)
function add1(a:number,b:number) {
   return 9;
    return a+b;
    
}
console.log(add1(8,69))
// jab return karwate hein tab bhaer log mein print karwate hein
// anonmyous funtion ko variable mein likhte hein is ka name nhi hota
let add2 = function () {
    console.log("no1");
}
add2()
// arrow alse known as lambda funtion
let myfuntion = (y:number,z:number)=>{
    let total = y+z
    return total;
}
console.log(myfuntion(10,20));

let add4 = ()=>"amazing"
console.log(add4());
// immidiate funtion ko call karwane ki zarorat nhi hot hia
(function(fname:string){
    console.log(`myfather name is ${fname}`);
})(`afzal`)
// funtions mein defferent parameters dete hein
// default parameter mein value phele hi dete hein
function driver(location:string = "norway") {
    console.log(`I am go ${location} on monday`);
    return `I am come back from ${location} on friday`
}
console.log(driver());
// rest parameters ko last  per lete hein wiyh 3 dots and ye hamein ziada parameters ko allow karta ha
function religious(...religion:string[]){
    return `if your religion ${religion} any from this and  is 'islam' so eid mubarak`
}
console.log(religious("islam","christan","non muslim"));
// optional parameter
let day = (name:string, id?:number)=>{
    console.log(`is your name is ${name} and ${id}`);
}
console.log(day("ayesha"));
// arrauy and its type or array ko tarah se karte hein ik square brackets or generic method
// simple array array hum ziada cheezain hon ta banate hein ik type ki
let my_aim :string[] = ["prime minister of education","motivational speaker","poetress"]
// array mein length or index find karte hein length mein hum us array mein kitne word hein uska last no kia hai malom hota hai
// index mein separate separate name find karte hein or index 0 se start hota hai or length 1 se
console.log(my_aim);
console.log(my_aim[0]);
console.log(my_aim.length);
// multi type array is mein hum ik array ko ziada type allow karte hein
let myHobby : (string|number)[] = ["crickter" , "study" ,1]
// nested array also known arrays of arrays and mutidimensional array is mein type dete hue double square brackets use karte hein
let martix : number[][] = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// index of martix array is    0         1          2
// length of martix array is   1         2          3
console.log(martix);
console.log(martix[1][0]);
// tuple array is mein fix hotihein cheezein
let a1: [string,number,boolean] = ["ayesha ", 1 , true]
console.log(a);
// array with generic method is mein ye batana zarori hai ke ye Array hai
let b1 : Array<number> = [1,2,3]
console.log(b);







































