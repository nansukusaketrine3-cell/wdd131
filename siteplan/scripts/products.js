// =========================
// FOOTER YEAR
// =========================
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("currentyear");

if (yearElement) {
    yearElement.textContent = currentYear;
}

// =========================
// LAST MODIFIED DATE
// =========================
const lastModifiedElement = document.getElementById("lastModified");

if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
}
const parts = [
    {
        name: "cpc",
        price: 120000,
        image: "images/cpc.webp"
    },
    {
        name: "filters",
        price: 30000,
        image: "images/filters.webp"
    },
    {
        name: "nozzles",
        price: 25000,
        image: "images/nozzles.webp"
    }
];

const container = document.querySelector("#products");

function displayProducts(partsArray) {
    container.innerHTML = "";

    partsArray.forEach(part => {
        const card = document.createElement("section");

        card.innerHTML = `
            <img src="${part.image}" alt="${part.name}" loading="lazy">
            <h3>${part.name}</h3>
            <p>UGX ${part.price}</p>
            <button class="order-btn" data-name="${part.name}">
                Order
            </button>
        `;

        container.appendChild(card);
    });
}

displayProducts(parts);

document.querySelector("#search").addEventListener("input", (event) => {
    const searchValue = event.target.value.toLowerCase();

    const filteredParts = parts.filter(part =>
        part.name.toLowerCase().includes(searchValue)
    );

    displayProducts(filteredParts);
});