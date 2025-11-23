// const { Children } = require("react");

const items = [{name: "mobile", category: "electronics"},
               {name: "laptop", category: "electronics"},
               {name: "shirt", category: "apparel"},
               {name: "jeans", category: "apparel"},
               {name: "blender", category: "home_appliances"},
               {name: "toaster", category: "home_appliances"},
               {name: "novel", category: "books"},
               {name: "textbook", category: "books"},               
            ];

const productList = document.querySelector("#productList");
const btnAll = document.querySelector("#btnAll");
const btnElectronics = document.querySelector("#btnElectronics");
const btnClothing = document.querySelector("#btnClothing");
const searchBox = document.querySelector("#searchBox");


//insert items into the product list
function displayItem(elements){   
    elements.forEach(item => {
        let proItem=document.createElement("div");
        // proItem.innerHTML="";
        proItem.innerHTML=`<p>item=<b>${item.name}</b> category=<b>${item.category}</b></p>`;
        proItem.className=item.category;  //give class name as category
        proItem.classList.add("product-item");
        productList.appendChild(proItem);
        console.log("hello");
    });
    
    
}
// productList.classList.add("hide");

btnAll.addEventListener("click", ()=>{
    productList.innerHTML="";
    displayItem(items);
});

btnElectronics.addEventListener("click", ()=>{
    productList.innerHTML="";
   const filtereditem=items.filter(el=> el.category==="electronics");
   displayItem(filtereditem);
});

btnClothing.addEventListener("click", ()=>{
    productList.innerHTML="";
    const filtereditem=items.filter(el => el.category==="apparel");
    displayItem(filtereditem);
})

searchBox.addEventListener("input", (e)=>{
    productList.innerHTML="";
    let ctgry=searchBox.value;
    let filtereditem=items.filter(el=> el.category===ctgry);
    displayItem(filtereditem);
    searchBox.value="";
    searchBox.focus();

})

