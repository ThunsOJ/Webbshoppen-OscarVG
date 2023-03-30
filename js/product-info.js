import Product from "./product.js";



//Tom variabel för produkten
let product;
let products = [];

if (window.localStorage.getItem("products")) {
  products = JSON.parse(window.localStorage.getItem("products"));
} 

//Om användaren skriver in URLen när ingen produktvalts
//Tas användaren tillbaka till index sidan
//detta för att inte visa en tom sida
if (window.sessionStorage.getItem("productID") == null){
    window.location.replace("index.html");
} else {
    //Hämtar id på produkten som valts
    const id = window.sessionStorage.getItem("productID");
    //fetchar produkten med det IDet
    //samt tilldelar produkt variabeln till att bli den produkt som hämtas
    getProductById(id);
    //add to cart knapp och dess lyssnare
    const orderButton = document.querySelector("#ORDER");
    orderButton.addEventListener('click', (e) => {
      e.preventDefault();
      //Kollar så att produkten inte redan är tillagd
      if(products.filter(p => p.id == product.id).length == 0){
        products.push(product);
        //Ökar annars quantity
      } else{
        products.forEach((element) => {
          if(element.id == product.id){
            element.quantity++;
          }
        })
      }

      window.localStorage.setItem("products", JSON.stringify(products));
      
      //Ta användaren till order sidan
      window.document.location = "order.html";
    })
}

//fetcha valda produkten baserat på ID
//Lägg till produkten som hämtas som ett produkt objekt och spara
//den i variabeln product
//samt skriv ut produktens info i HTML
async function getProductById(id){
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((data) => {
        product = new Product(
          data.id,
          data.title,
          data.price,
          data.category,
          data.description,
          data.image,
          1
        );
        //Skriver ut produkten i HTML taggar
        setHTMLValues(
          product
        );
    })
    .catch((error) => console.error(error));
}

//Funktion för att sätta HTML värden
function setHTMLValues(product){

  document.querySelector('#singleProductImg').innerHTML = `<img src="${product.imageURL}" alt="${product.title}">`;
  document.querySelector('#titleInfo').innerHTML = `
      <h3 >${product.title}</h3>
      <p class="singleProductDesc">${product.description}</p>
  `;
  document.querySelector('#price').innerHTML = `<span>${product.price}€</span>`;
}