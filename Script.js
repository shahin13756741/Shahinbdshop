const products = [];

for (let i = 1; i <= 20; i++) {

products.push({

id: i,

name: `Product ${i}`,

price: (i * 100).toFixed(2),

desc: `This is the description for Product ${i}.`,

img: "https://via.placeholder.com/300"

});

}


const list = document.getElementById("productList");

products.forEach(p => {

const card = document.createElement("div");

card.className = "product";

card.innerHTML = `

<img src="${p.img}">

<h3>${p.name}</h3>

<p>${p.desc}</p>

<p><b>Price:</b> ${p.price} BDT</p>

<button onclick="addToCart(${p.id})">Add to Cart</button>

<button onclick="orderNow(${p.id})">Order Now</button>

<div class='reviewBox'>

<input id='rev${p.id}' placeholder='Write a review...' />

<button onclick='submitReview(${p.id})'>Submit</button>

</div>

`;

list.appendChild(card);

});


function addToCart(id) {

alert("Added Product " + id + " to cart.");

}


function orderNow(id) {

alert("Order placed for Product " + id + ". Pay with Bkash/Nagad.");

}


function submitReview(id) {

const review = document.getElementById("rev" + id).value;

alert("Review added for Product " + id + ": " + review);

}

