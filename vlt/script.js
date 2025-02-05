const answer = document.querySelector(".answer");
const yesButton = document.createElement("button");
yesButton.textContent = "Yes";
yesButton.classList.add("yes");
answer.appendChild(yesButton);
const noButton = document.createElement("button");
noButton.textContent = "No";
noButton.classList.add("no");
answer.appendChild(noButton);
let cnt = 10;
noButton.addEventListener("click", () => {
  cnt++;
  yesButton.style.width = `${cnt * 10}px`;
  yesButton.style.height = `${cnt * 10}px`;
  yesButton.style.fontSize = `${cnt * 2}px`;
});
yesButton.addEventListener("click", () => {
  window.location.href = "yes.html";
});
// jump to another page
// yesButton.addEventListener("click", () => {
//   alert("Yes, you are Odin!");
// });
