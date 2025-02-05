const container = document.querySelector(".container");
const Matrix = document.createElement("div");
Matrix.classList.add("matrix");
for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < 16; j++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mouseover", () => {
      random = Math.floor(Math.random() * 256);
      box.style.backgroundColor = `rgb(${random}, ${(random * 102) % 256}, ${
        (random * 123) % 256
      })`;
    });
    row.appendChild(box);
  }
  Matrix.appendChild(row);
}

container.appendChild(Matrix);
