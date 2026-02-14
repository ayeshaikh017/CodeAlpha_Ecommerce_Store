let cartProducts = [];
let totalPrice = 0;

async function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    if (cart.length === 0) {
        document.getElementById("cartItems").innerHTML = "<p>Your cart is empty</p>";
        return;
    }

    // Fetch all products
    const response = await fetch("http://localhost:5000/api/products");
    const allProducts = await response.json();

    // Filter products in cart
    cartProducts = allProducts.filter(product => cart.includes(product._id));

    // Calculate total
    totalPrice = cartProducts.reduce((sum, product) => sum + product.price, 0);

    // Display cart items
    const container = document.getElementById("cartItems");
    container.innerHTML = "";

    cartProducts.forEach((product, index) => {
        container.innerHTML += `
            <div class="cart-item">
                <img src="${product.image}" width="100"/>
                <div class="cart-item-info">
                    <h3>${product.name}</h3>
                    <p>₹${product.price}</p>
                </div>
                <button onclick="removeFromCart(${index})" class="remove-btn">Remove</button>
            </div>
        `;
    });

    document.getElementById("totalPrice").textContent = totalPrice;
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

async function placeOrder() {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (!token) {
        alert("Please login to place order");
        window.location.href = "login.html";
        return;
    }

    const orderData = {
        userId: user._id,
        products: cartProducts,
        total: totalPrice
    };

    const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(orderData)
    });

    const data = await response.json();
    alert(data.message);

    if (data.message === "Order placed successfully") {
        localStorage.removeItem("cart");
        window.location.href = "index.html";
    }
}

// Load cart on page load
loadCart();