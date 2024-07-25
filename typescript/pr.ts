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
console.log(agenda);

































