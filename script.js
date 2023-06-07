let chicken = 0
let coke=0
let fries=0
let burgers=0
let pizzas=0
let juice=0
let salad=0
let nuggets=0
let poutine =0
let hotdogs=0
let items=0
let itemsobj=document.querySelector(".numb")
let orderobj=document.querySelector("#order")

//on load
chickennumb = localStorage.getItem('chicken')
document.querySelector("#chickennumb").textContent =chickennumb;

cokenumb = localStorage.getItem('coke')
document.querySelector("#cokenumb").textContent =cokenumb;

friesnumb = localStorage.getItem('fries')
document.querySelector("#friesnumb").textContent =friesnumb;

burgernumb = localStorage.getItem('burgers')
document.querySelector("#burgernumb").textContent =burgernumb;

Pizzanumb = localStorage.getItem('pizzas')
document.querySelector("#pizzanumb").textContent =Pizzanumb;

juicenumb = localStorage.getItem('juice')
document.querySelector("#juicenumb").textContent =juicenumb;

saladnumb = localStorage.getItem('salad')
document.querySelector("#saladnumb").textContent =saladnumb;

poutinenumb = localStorage.getItem('poutine')
document.querySelector("#poutinenumb").textContent =poutinenumb;

hotdogsnumb = localStorage.getItem('hotdog')
document.querySelector("#hotdogsnumb").textContent =hotdogsnumb;

nuggetsnumb = localStorage.getItem('nuggets')
document.querySelector("#nuggetsnumb").textContent =nuggetsnumb;


function addchicken(){
   
   price = chickennumb * 5;
   chickennumb=chicken +1;
   chicken=chickennumb;
   items +=1;
   itemsobj.textContent= items;
   document.querySelector("#chickennumb").textContent =chickennumb;
   localStorage.setItem('chicken',chickennumb)
 
};

function addcoke(){
  price1 = cokenumb * 2;
  cokenumb= coke +1;
  coke =cokenumb;
  items+=1;
  itemsobj.textContent= items;
  document.querySelector("#cokenumb").textContent= cokenumb;
  localStorage.setItem('coke',cokenumb)
 
};

function addfries(){
  price2 = friesnumb * 2.5;
  friesnumb=fries +1;
  fries=friesnumb;
  items +=1;
  itemsobj.textContent= items;
  document.querySelector("#friesnumb").textContent =friesnumb;
  localStorage.setItem('fries',friesnumb)
  
  

};

function addburgers(){
  price3 = burgernumb * 7;
  burgernumb=burgers +1;
  burgers=burgernumb;
  items +=1;
  itemsobj.textContent= items;
  document.querySelector("#burgernumb").textContent =burgernumb;
  localStorage.setItem('burgers',burgernumb)
  
  

};

function addpizzas(){
  price4 = Pizzanumb * 5;
  Pizzanumb=pizzas+1;
  pizzas=Pizzanumb;
  items +=1;
  itemsobj.textContent= items;
  document.querySelector("#Pizzanumb").textContent =Pizzanumb;
  localStorage.setItem('pizza',Pizzanumb)

};

function addjuice(){
  price5 = juicenumb * 2.5;
  juicenumb=juice +1;
  juice=juicenumb;
  items +=1;
  itemsobj.textContent= items;
  document.querySelector("#juicenumb").textContent =juicenumb;
  localStorage.setItem('organge juice',juicenumb)
  

};

function addsalad(){
  price6 = saladnumb * 4.5;
  saladnumb=salad+1;
  salad=saladnumb;
  items +=1;
  itemsobj.textContent= items;
  document.querySelector("#saladnumb").textContent =saladnumb;
  localStorage.setItem('salad',saladnumb)

};

function addpoutine(){
  price7 = poutinenumb * 5;
  poutinenumb=poutine +1;
  poutine=poutinenumb;
  items +=1;
  itemsobj.textContent= items;
  document.querySelector("#poutinenumb").textContent =poutinenumb;
  localStorage.setItem('poutine',poutinenumb)
  
  
};


function addhotdogs(){
  price8 = hotdogsnumb * 2;
  hotdogsnumb=hotdogs +1;
  hotdogs=hotdogsnumb;
  items +=1;
  itemsobj.textContent= items;
  document.querySelector("#hotdogsnumb").textContent =hotdogsnumb;
  localStorage.setItem('hotdog',hotdogsnumb)
  
  
};

function addnuggets(){
  price9 = nuggetsnumb * 4;
  nuggetsnumb=nuggets +1;
  nuggets=nuggetsnumb;
  items +=1;
  itemsobj.textContent= items;
  document.querySelector("#nuggetsnumb").textContent =nuggetsnumb;
  localStorage.setItem('chicken nuggets',nuggetsnumb)
  
  
};


 function checkout(){
  let sum = price1 +price2+price3+price4+price5+price+price6+price7+price8+price9;
  let sub =sum+sum*0.15;
  alert(`Your subtotal is $ ${sub}`);
  alert(`Your order is completed. You have order ${items} items. Come to our restaurant to pick it up and pay in there.`)
  
 };

 