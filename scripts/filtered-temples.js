// =========================
// FOOTER
// =========================
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

// =========================
// HAMBURGER MENU
// =========================
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".nav");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");

    hamButton.textContent = hamButton.classList.contains("open") ? "✖" : "☰";
});

// =========================
// TEMPLE DATA
// =========================
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  // FIXED DATA (clean + correct numbers)
  {
    templeName: "Aba Nigeria",
    location: "Nigeria",
    dedicated: "2005, August, 7",
    area: 6.3 * 43560,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Ghana",
    dedicated: "2004, January, 11",
    area: 6 * 43560,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    templeName: "Adelaide Australia",
    location: "Australia",
    dedicated: "2000, June, 15",
    area: 6.94 * 43560,
    imageUrl:  "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4359-main.jpg"
  }
];

// =========================
// DISPLAY FUNCTION
// =========================
const container = document.querySelector(".temple-container");

function displayTemples(list) {
    container.innerHTML = "";

    list.forEach(temple => {
        const card = document.createElement("section");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        container.appendChild(card);
    });
}

// =========================
// INITIAL LOAD
// =========================
displayTemples(temples);

// =========================
// FILTERS
// =========================
document.querySelector("#home").addEventListener("click", () => {
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    displayTemples(
        temples.filter(t => {
            const year = parseInt(t.dedicated.match(/\d{4}/)[0]);
            return year < 1900;
        })
    );
});

document.querySelector("#new").addEventListener("click", () => {
    displayTemples(
        temples.filter(t => {
            const year = parseInt(t.dedicated.match(/\d{4}/)[0]);
            return year > 2000;
        })
    );
});

document.querySelector("#large").addEventListener("click", () => {
    displayTemples(
        temples.filter(t => t.area > 90000)
    );
});

document.querySelector("#small").addEventListener("click", () => {
    displayTemples(
        temples.filter(t => t.area < 10000)
    );
});