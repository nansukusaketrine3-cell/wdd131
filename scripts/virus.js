document.getElementById("currentyear").textContent =
    new Date().getFullYear();

// Last modified
document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

// Image animation
const virusImage = document.querySelector(".hero img");

virusImage.addEventListener("load", () => {
    virusImage.style.opacity = "0";
    virusImage.style.transition = "opacity 1.5s ease";

    setTimeout(() => {
        virusImage.style.opacity = "1";
    }, 100);
});