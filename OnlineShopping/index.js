//elements
const productContainer = document.getElementById("productContainer");
const cartContainer = document.getElementById("cartContainer");
const feedbackElement = document.getElementById("feedback");
const clearCartBtn = document.getElementById("clearCart");
const sortByPriceBtn = document.getElementById("sortByPrice");
// default Products
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
  },
  {
    id: 2,
    name: "SmartPhone",
    price: 20000,
  },
  {
    id: 3,
    name: "Tablet",
    price: 5000,
  },
  {
    id: 4,
    name: "SmartWatch",
    price: 1000,
  },
  {
    id: 5,
    name: "HeadSet",
    price: 500,
  },
];
// Empty cart
const cart = [];
// used to reset the timer(user feed Back)
let timerid;

function clearCarts() {
  cart.length = 0;
  renderCartDetails();
  updatedFeedback("Cart is Cleared", "sucess");
}
function sortByPrices() {
  cart.sort(function (item1, item2) {
    return item1.price - item2.price;
  });
  renderCartDetails();
  updatedFeedback("Price Arranged in Low To High", "sucess");
}
clearCartBtn.addEventListener("click", clearCarts);
sortByPriceBtn.addEventListener("click", sortByPrices);

function renderProductDetails() {
  products.forEach(function (items) {
    const { id, name, price } = items;
    const divElement = document.createElement("div");
    divElement.className = "productrow";
    divElement.innerHTML = `<p>${name} - RS.${price}</p>
  <button onclick="addTocart(${id})" class="Addcart">Add to cart</button>`;
    productContainer.appendChild(divElement);
  });
}
function renderCartDetails() {
  cartContainer.innerHTML = "";
  cart.forEach(function (items) {
    const { id, name, price } = items;
    const cartItemRow = `<div class="productrow">
          <p>${name} - RS.${price}</p>
          <button class="Addcart" onclick="removeFromcart(${id})">Remove</button>
        </div>`;
    cartContainer.insertAdjacentHTML("beforeend", cartItemRow);
  });
  const totalPrice = cart.reduce(function (acc, currItem) {
    return acc + currItem.price;
  }, 0);
  document.getElementById("totalPrice").textContent = `Rs.${totalPrice}`;
}
// Add to cart
function addTocart(id) {
  const thisItemAlearyAddedInTheCart = cart.some((items) => items.id === id);
  if (thisItemAlearyAddedInTheCart) {
    updatedFeedback(`Item Already Added`, "error");
    return;
  }
  const itemsToAdd = products.find(function (items) {
    return items.id === id;
  });
  cart.push(itemsToAdd);
  console.log(cart);
  renderCartDetails();
  updatedFeedback(`${itemsToAdd.name} Added to the cart`, "sucess");
}
// Remove From cart
function removeFromcart(id) {
  console.log(id);
  const items = cart.find((items) => items.id === id);

  const itemsIndex = cart.findIndex((items) => items.id === id);
  cart.splice(itemsIndex, 1);

  updatedFeedback(`${items.name} is removed from cart`, "error");
  renderCartDetails();
}
function updatedFeedback(msg, type) {
  clearTimeout(timerid);
  feedbackElement.style.display = "block";
  if (type === "sucess") {
    feedbackElement.style.backgroundColor = "lightgreen";
    feedbackElement.style.color = "white";
  } else if (type === "error") {
    feedbackElement.style.backgroundColor = "red";
    feedbackElement.style.color = "white";
  }
  feedbackElement.textContent = msg;
  timerid = setTimeout(function () {
    feedbackElement.style.display = "none";
  }, 3000);
}
// rendering products
renderProductDetails();
