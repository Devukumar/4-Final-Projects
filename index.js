const chapters = ["Counter", "BioData", "Lottery-Game", "Online-shopping"];
const chapterListContainer = document.getElementById("chapterListContainer");
chapters.forEach((chapter) => {
  const listItem = document.createElement("li");
  listItem.textContent = chapter;
  listItem.classList.add("font20Px");
  listItem.classList.add("whiteText");
  listItem.classList.add("margin");
  chapterListContainer.appendChild(listItem);
});
