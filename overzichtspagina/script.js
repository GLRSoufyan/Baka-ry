document.addEventListener("DOMContentLoaded", () => {
  const desserts = [
    "Strawberry Tart", "Chocolate Mousse", "Lemon Pie",
    "Vanilla Cupcake", "Carrot Cake", "Apple Crumble",
    "Matcha Roll", "Tiramisu", "Cheesecake",
    "Brownie", "Macaron", "Banana Bread"
  ];

  const container = document.getElementById("recipes-container");

  desserts.forEach(name => {
    const card = document.createElement("div");
    card.classList.add("recipe");

    card.innerHTML = `
      <h3>${name}</h3>
      <div class="img-box"></div>
      <button>See recept</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      window.location.href = "details.html";
    });

    container.appendChild(card);
  });
});
