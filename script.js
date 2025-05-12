// Pop-up image viewer
function showPopup(imageSrc) {
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `<img src="${imageSrc}" alt="Popup Image">`;
  popup.onclick = () => popup.remove();
  document.body.appendChild(popup);
}

// Shopping Cart
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart.`);
}

function showCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const list = document.getElementById('cart-items');
  list.innerHTML = '';

  if (cartItems.length === 0) {
    list.innerHTML = '<li>Your cart is empty.</li>';
    return;
  }

  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - £${item.price}`;
    list.appendChild(li);
  });
}

// Clear Cart
function clearCart() {
  localStorage.removeItem('cart');
  alert('Cart cleared!');
  location.reload();
}

// Login System
function login() {
  const name = document.getElementById('username').value.trim();
  if (name === "") {
    alert("Please enter your name.");
    return;
  }
  localStorage.setItem('user', name);
  document.getElementById('login-section').style.display = "none";
  document.getElementById('welcome-user').textContent = `Welcome, ${name}!`;
}

window.onload = () => {
  const user = localStorage.getItem('user');
  if (user && document.getElementById('welcome-user')) {
    document.getElementById('welcome-user').textContent = `Welcome, ${user}!`;
    const loginBox = document.getElementById('login-section');
    if (loginBox) loginBox.style.display = "none";
  }
}
