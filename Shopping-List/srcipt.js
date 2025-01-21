// To start with, download a copy of our shopping-list.html starting file and make a copy of it somewhere. You'll see that it has some minimal CSS, a div with a label, input, and button, and an empty list and <script> element. You'll be making all your additions inside the script.
// Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
// Create a function that will run in response to the button being clicked.
// Inside the function body, start off by storing the current value of the input element in a variable.
// Next, empty the input element by setting its value to an empty string — ''.
// Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.
// Append the span and the button as children of the list item.

const list = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const inputValue = input.value;
  input.value = "";

  // Create new list Item
  const listItem = document.createElement("li");
  const spanText = document.createElement("span");
  const delBtn = document.createElement("button");

  spanText.textContent = inputValue;
  delBtn.textContent = "Delete";

  listItem.appendChild(spanText);
  listItem.appendChild(delBtn);
  list.appendChild(listItem);

  delBtn.addEventListener("click", function () {
    list.removeChild(listItem);
  });

  input.focus();
});
