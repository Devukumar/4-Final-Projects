let increaseBtn = document.getElementById("increaseBtn");
let DecreaseBtn = document.getElementById("DecreaseBtn");
let increaseBtn5 = document.getElementById("increaseBtn5");
let DecreaseBtn5 = document.getElementById("DecreaseBtn5");
let RestBtn5 = document.getElementById("Rest");

let result = document.getElementById("result");
counter = 0;
increaseBtn.addEventListener("click", function () {
  counter = counter + 1;
  result.textContent = counter;
});

DecreaseBtn.addEventListener("click", function () {
  if (counter > 0) {
    counter = counter - 1;
  }
  result.textContent = counter;
});

increaseBtn5.addEventListener("click", function () {
  counter = counter + 5;
  result.textContent = counter;
});

DecreaseBtn5.addEventListener("click", function () {
  if (counter > 4) {
    counter = counter - 5;
  }
  result.textContent = counter;
});

Rest.addEventListener("click", function () {
  counter = 0;
  result.textContent = counter;
});