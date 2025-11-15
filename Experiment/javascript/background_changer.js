//background changer
let color=prompt("if you want to change color without click any button so press yes");

let h1=document.querySelector("h1");
let body=document.querySelector("body");
let btn=document.querySelector(".btn2");

if(color==="yes"){
    let count=0;
    let id=setInterval(()=>{
        let num=Math.floor(Math.random()*1000)+1;
        body.style.backgroundColor="#"+num;
        count++;
        if(count==5){
            clearInterval(id);            
        }
    },1000);
    
}
btn.addEventListener("click",()=>{
    let num=Math.floor(Math.random()*1000)+1;
    body.style.backgroundColor="#"+num;
    console.log(num);
})

let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("placeholder","enter color");
input.classList.add("inp");

input.addEventListener("change", (el)=>{
    body.style.backgroundColor=input.value;
    h1.innerText=input.value+" is a nice color well done||"
    input.value="";
    input.focus();
})
body.append(input);