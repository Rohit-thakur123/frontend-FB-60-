let container=document.querySelector(".container");//select main div
let input=document.querySelector("input")//select inp
let addbtn=document.querySelector("#addBtn");
let ul=document.querySelector("ul");
let select=document.querySelector("select");
let option=document.querySelector("option");

addbtn.addEventListener("click", ()=>{
    let span=document.createElement("span");
    let li=document.createElement("li");
    
    let delbtn=document.createElement("button");
    delbtn.classList.add("delete-btn");
    delbtn.innerText="remove";
    delbtn.style.marginRight="10px";   
   
    let radio=document.createElement("input");
    radio.setAttribute("type", "radio");

    let data=input.value;
    li.innerText=data;    
    span.appendChild(delbtn);    

    li.appendChild(span);
    span.appendChild(radio);
    ul.appendChild(li);
    input.value="";
    input.focus();

    let values=option.value;
    if(values==="high"){
        li.style.color="green";
    }else if(values==="medium"){
        li.style.color="yellow"
    }else if(values==="low"){
        li.style.color="red";        
    }
    delbtn.addEventListener("click", ()=>{ //fun of delete btn
        li.remove();
    })   
})

