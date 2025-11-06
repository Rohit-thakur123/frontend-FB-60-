const arr=[1,2,3,4,5,6];
// console.log(arr.push(7));
// console.log(arr);
// console.log(arr.slice());
// console.log(arr.slice(1));
// console.log(arr.slice(-1));
// console.log(arr.slice(1,3));

//splice method
//console.log(arr.splice(1)); //remove every thing

// arr.splice(1,2,['a','b']);
// console.log(arr);

// console.log("rohit"=="rohit");
// console.log("rOhit"=="rohit");

// console.log([1,2]==[1,2]);
// for(x of arr){
//     console.log(x);
// }

// js object literals

// let student={
//     name:"rohit",
//     class:12,
//     age:20,
//     1:25,
    
// }
// console.log(student.name);
// console.log(student['age']);
// let umr='age';
// console.log(student[umr]);
// console.log(student.umr);

// console.log(student[""]);

// student.name="shyam";
// console.log(student.name)

//array object
// const obj=[
//     {name:"rohit", class:12},
//     {name:"mohit", class:15}
// ]
// console.log(obj);
// console.log(obj[0]);
// console.log(obj[1].name);

//generate a random value
 
// let num=Math.random();
// num=num*10;
// num=Math.floor(num);
// num=num+1;
// console.log(num);

// console.log(Math.floor(Math.random()*10)+1);

// //random no by 50 to 100;
// console.log(Math.floor(Math.random()*50)+50);
// //random no from 10 to 15
// console.log(Math.floor(Math.random()*5)+10)


//.............functions..................
// let a=20;
// function sum(){
//     let a=10;
//     let b=20;
//     console.log(a);
//     console.log(a);
// }

// sum();
// console.log(a);

//..........high order function
// function multiplegreet(callback){
//     for(let i=1; i<5; i++){
//         callback();
//     }
// }

// function greet(){
//     console.log("hello baccho");
// }

// multiplegreet(greet);

// //new function odd or even
// function odd_even_test(request){
//     if(request==="odd"){
//         let odd=(n)=>{
//             console.log(!(n%2)==0);
//         }
//         return odd;
//     }
//     else if(request==="even"){
//         let even=(n)=>{
//             console.log(n%2==0);
//         }
//         return even;
//     }
// }

// let func=odd_even_test("odd");
// func(6);

// const calculator={  //action can be performed on an object
//     add:function(a,b){
//         return a+b;
//     },
//     sub:function(a,b){
//         return a-b;
//     }
// }
// console.log(calculator.add(2,5));

// const calc2={
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     },
//     mul(a,b){
//         return a*b;
//     }
// };

// console.log(calc2.mul(2,5));

//.....................this key word

const student={
    name:"rohit", eng:10, math:50, hindi:100,

    getAvg(){
        console.log(this);
        let avg=(this.eng+this.hindi+this.math)/3;

        console.log(`${this.name} get marks ${Math.round(avg)}`);
    },
};

// student.getAvg();

// console.log(this);  //sabka malik window

// try{
//     console.log(a);
// }catch{
//     console.log("a to hai h nii");
// }

const mul=(a, b)=>( //implicit return function  or here we can remove () also
    a*b
)
const sum=(a,b)=>{ // general form
     return a+b;
}

// console.log(mul(2,3));
// console.log(sum(1,1));

// setTimeout(()=>{
//     console.log("hello baccho");
// },1000)

let id1=setInterval(()=>{
    console.log("hello baccho");
},1000);
let id2=setInterval(()=>{
    console.log("hello bhai");
}, 2000)

clearInterval(id1);
clearInterval(id2);
clearTimeout(id1)


const listItem=