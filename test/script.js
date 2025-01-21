const link = document.querySelector("a");

link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");
const para = document.createElement("a");
para.textContent = "We hope you enjoy the ride";

sect.appendChild(para);
const text = document.createTextNode(
  " — the premier source for web development knowledge."
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

para.setAttribute("class", "highlight");
