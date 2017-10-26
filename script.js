/* GLOBAL VARIABLES */
var listOfProducts;
// add more global variables when needed..

/* Get products from the json file and store it in a javascript variable */
fetch("./products.json")
.then(function(response) {
    return response.json();
})
.then(function(products) {
    listOfProducts = products;
    createUIFromLoadedProducts();
});

/** Uses the loaded products data to create a visible product list on the website */
function createUIFromLoadedProducts() {
    /* Check your console to see that the products are stored in the listOfProducts varible */
    console.log(listOfProducts);

//var main = document.querySelector("#main");
var main = document.getElementById("main");

    var allProducts = document.createElement("div");

    allProducts.className = "allProductsClass";

for(var index=0; index <listOfProducts.length; index++) {

    var productCard = createproductCard(listOfProducts[index]);
    //main.appendChild(productCard);
    allProducts.appendChild(productCard);

} 

//document.body.appendChild(main);
document.body.appendChild(allProducts);


//davids info kod
/* Leta efter ARRAY FÖR ATT FÅ FRAM PRODUKTERNA */
/* var ulElement =  */
    /* Add your code here, remember to brake your code in to
    smaller function blocks to reduce complexity and increase readability */
    /* Each function must have an explainetory comment like the one for this function, see row 15 */
    /* Feel free to remove these other comments */
}




function createproductCard(listOfProducts) {
    var productCard = document.createElement ("div")
    productCard.classname ="allProductsClass";

    
    //Title
    var getProductTitle = document.createElement("h2");
    getProductTitle.innerText=listOfProducts.title;
    productCard.appendChild(getProductTitle);

    //Description
    var getProductDescription = document.createElement("p");
    getProductDescription.innerText=listOfProducts.description;
    productCard.appendChild(getProductDescription);

    //Image
    var getProductImage = document.createElement("img");
    getProductImage.src = "assets/" + listOfProducts.image;
    productCard.appendChild(getProductImage);

    //Price
    var getProductPrice = document.createElement("h3");
    getProductPrice.innerText=listOfProducts.price + "  Kr";
    productCard.appendChild(getProductPrice);

    //Add Button
    var buttonAdd = document.createElement("button");
    buttonAdd.onclick = function() {positive()};
    buttonAdd.innerHTML= '<i class="fa fa-shopping-cart" aria-hidden="true"></i>' + "Lägg till i varukorg";
    productCard.appendChild(buttonAdd);

    
     /**<button onclick="positive()">Lägg i Varukorg</button>
    document.innerHTML(listOfProducts);
    console.log(listOfProducts); */
    return productCard;
   
}

//Create function on button. When click add 1 product (showed in header) 
var count = 0;
var step = 1;

var span = document.querySelector("span");
var positive;

function positive (){
    count = count + step
    span.innerText = count;
    alert("1 produkt har lagts till");
  }

/* Read the projects readme before you start! */
/* Good luck and have fun 🤓 */


//Gammal kod som jag fick hjälp med av David! SKa ev tas bort 2017-10-22


/**document.write("<h1>Kundvagn</h1>");
document.getElementById().innerHTML= listOfProducts; 
document.write("<button>Lägg i varukorg</button>");
document.write("<p>hej</p>");
console.log(listOfProducts); 

main.innerHTML = listOfProducts[0]; */
//var mainDiv = document.getElementById('main');
/** var index = 2;
var aSingleProduct = listOfProducts[index];
var image = aSingleProduct.image;
main.innerHTML = '<img src=./assets/iPhoneX.png>';



var index = 0;
var aSingleProduct = listOfProducts[index];
var title = aSingleProduct.title;
 
console.log(title);
document.write(title);

var index = 1;
var aSingleProduct = listOfProducts[index];
var description = aSingleProduct.description;
document.write(description);

/**var index = 2;
var aSingleProduct = listOfProducts[index];
var image = aSingleProduct.image;
document.write("<img src=./assets/iPhoneX.png>"); */




