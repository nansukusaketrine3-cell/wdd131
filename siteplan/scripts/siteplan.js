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

// =========================
// HAMBURGER MENU
// =========================
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".nav");

if (hamButton && navigation) {
    hamButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        hamButton.classList.toggle("open");

        // Change icon based on state
        if (hamButton.classList.contains("open")) {
            hamButton.textContent = "✖";
        } else {
            hamButton.textContent = "☰";
        }
    });
}