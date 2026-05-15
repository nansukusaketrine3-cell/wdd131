// Footer year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Last modified
document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

// Hamburger menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".nav");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");

    if (hamButton.classList.contains("open")) {
        hamButton.textContent = "✖";
    } else {
        hamButton.textContent = "☰";
    }
});