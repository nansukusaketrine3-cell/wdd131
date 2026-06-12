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
const form = document.querySelector("#contactForm");
const message = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value;

    localStorage.setItem("customerName", name);

    message.textContent =
        `Thank you ${name}. Your request has been received.`;

    form.reset();
});