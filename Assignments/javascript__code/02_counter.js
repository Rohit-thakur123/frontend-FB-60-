let container=document.querySelector(".container");
let textarea=document.querySelector("textarea");
let count=document.querySelector("#counter");
let body=document.querySelector("body");

let chars =100;
// textarea.addEventListener("click", ()=>{
    textarea.addEventListener("keydown", ()=>{
        let char=100-textarea.value.length;
        
        if(char>60){
            count.innerText=`Characters left: ${char}`
            count.classList.add("green");
        }else if(char>30){
            count.innerText=`Characters left: ${char}`
            count.classList.add("orange");
        }else if(char>0){
            count.innerText=`Characters left: ${char}`
            count.classList.add("red");
        }
        if(char==0){
            count.innerText=`Characters left: ${char}`
            count.classList.add("red");
            body.classList.add("back");
            // console.log("hello");
        }
    })
        
    // if(char==0){
        
    // }
    
// })