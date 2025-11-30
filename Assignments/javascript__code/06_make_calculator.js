let string="";
        console.log("hello");
        let buttons=document.querySelectorAll(".button");
        console.log(buttons.length);
        Array.from(buttons).forEach((button)=>{
            button.addEventListener("click", (e)=>{   
                if(e.target.innerHTML == "="){
                    string=eval(string);
                    document.querySelector("input").value=string;     
                }else if(e.target.innerHTML=="clear"){
                    string="";
                    document.querySelector("input").value=string;
                }
                else{
                    string=string+e.target.innerHTML;
                    document.querySelector("input").value=string;                   
                }  
                
                console.log(e.target.innerHTML);
                
            })
        })