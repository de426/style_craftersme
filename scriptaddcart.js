let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;

    const cartItems = document.getElementById('cart-items');
    const newItem = document.createElement('div');
    newItem.classList.add('cart-item');
    newItem.textContent = `Product ${cartCount}`;
    cartItems.appendChild(newItem);
}
