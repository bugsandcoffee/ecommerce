let cartEl = document.getElementById("cart")
console.log(cartEl);
function addToCart() {
    cartEl.innerHTML = parseInt(cartEl.innerHTML) + 1;
    console.log(cartEl.innerHTML);
}