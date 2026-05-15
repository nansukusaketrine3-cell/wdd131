// FOOTER YEAR
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// LAST MODIFIED
document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;

// HAMBURGER MENU
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".nav");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});