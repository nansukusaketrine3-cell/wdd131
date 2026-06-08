// Retrieve current count
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increment count
reviewCount++;

// Save updated count
localStorage.setItem("reviewCount", reviewCount);

// Display count
document.getElementById("reviewCount").textContent = reviewCount;

// Footer
document.getElementById("currentyear").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;