fetch("http://localhost:5000/api/products")
.then(res => res.json())
.then(products => {

  const container = document.getElementById("products");

  products.forEach(product => {

    container.innerHTML += `
      <div class="card">
        <img src="${product.image}" width="200"/>
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick="addToCart('${product._id}')">
          Add to Cart
        </button>
      </div>
    `;

  });

});

function addToCart(id){

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(id);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart");

}
