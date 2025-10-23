"use strict";
const title = document.getElementById("title");
title.textContent = "I Am Learning JavaScript".toUpperCase();
document.title = "Final Projects";
const titles = [
  "నేను జావాస్క్రిప్ట్ నేర్చుకుంటున్నాను",
  "मैं जावास्क्रिप्ट सीख रहा हूँ",
];
let count = 0;
const intervalId = setInterval(function () {
  if (count < titles.length) {
    title.textContent = titles[count];
    count++;
  } else {
    clearInterval(intervalId);
    window.location.href = "index.html";
  }
}, 2000);
