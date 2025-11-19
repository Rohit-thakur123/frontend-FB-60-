let container=document.querySelector(".container");//select main div
let input=document.querySelector("input")//select inp
let addbtn=document.querySelector("#addBtn");
let ul=document.querySelector("ul");
addbtn.addEventListener("click", ()=>{
    let span=document.createElement("span");
    let li=document.createElement("li");
    
    let delbtn=document.createElement("button");
    delbtn.classList.add("delete-btn");
    delbtn.innerText="remove";
    delbtn.style.marginRight="10px";
    
    let editbtn=document.createElement("button");
    editbtn.classList.add("edit-btn");
    editbtn.innerText="Edit";

    

    let data=input.value;
    li.innerText=data;
    // li.appendChild(editbtn);
    // li.appendChild(delbtn);
    span.appendChild(delbtn);
    span.appendChild(editbtn);

    li.appendChild(span);
    
    ul.appendChild(li);
    input.value="";
    input.focus();

    delbtn.addEventListener("click", ()=>{ //fun of delete btn
        li.remove();
    })

    editbtn.addEventListener("click", ()=>{
        let edit=prompt("write correct");
        li.innerText=edit;
        li.appendChild(span);
    })


})

