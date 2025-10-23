let Result = document.getElementById("Result");
let result = document.getElementById("result");

let lottry_sheet_container_1 = document.getElementById(
  "lottry-sheet-container-1"
);
const taps = new Audio("tap.wav");
const boxValues = [
  "₹100 Cash",
  "Toy Car",
  "Chocolate Box",
  "₹500 Cash",
  "Smartphone Cover",
  "Book",
  "Headphones",
  "₹50 Cash",
  "Gift Voucher",
  "Watch",
  "Teddy Bear",
  "Bluetooth Speaker",
  "Movie Ticket",
  "₹200 Cash",
  "Puzzle Game",
  "Perfume",
  "Sunglasses",
  "₹1000 Cash",
  "Board Game",
  "Fitness Band",
  "Digital Clock",
  "Lamp",
  "Shopping Voucher",
  "Laptop Bag",
  "Wireless Mouse",
  "Travel Mug",
  "Notebook Set",
  "Gaming Mousepad",
  "₹250 Cash",
  "Keychain",
  "Water Bottle",
  "Portable Charger",
  "Desk Organizer",
  "Cooking Set",
  "Action Figure",
  "₹300 Cash",
  "Travel Pillow",
  "Mini Backpack",
  "Personalized Gift",
  "Gaming Controller",
  "Camera Strap",
  "Toy Robot",
  "₹750 Cash",
  "Sports Equipment",
  "Pen Set",
  "Bluetooth Earbuds",
  "Digital Photo Frame",
  "Wallet",
  "Backpack",
  "Gift Hamper",
];
Result = addEventListener("click", function () {
  for (let i = 1; i < 50; i++) {
    this.document.getElementById(i).classList.remove("winning");
  }
  result.textContent = "Please Wait...You Have An Exited Gift";
  this.setTimeout(function () {
    let mat = Math.random() * 50;
    let drawNumber = Math.floor(mat);
    taps.play();
    const Draw = boxValues[drawNumber - 1];
    result.textContent = `You Got ${drawNumber}, ${Draw}`;
    document.getElementById(drawNumber).classList.add("winning");
  }, 5000);
});
boxValues.forEach(function (value, i) {
  const ValueElement = `<div class="gift-items" id=${i + 1}>${
    i + 1
  },${value}</div>`;
  console.log(ValueElement);
  lottry_sheet_container_1.insertAdjacentHTML("beforeend", ValueElement);
});
