// FOOTER CURRENT YEAR
document.getElementById("currentyear").textContent =
new Date().getFullYear();

// LAST MODIFIED DATE
document.getElementById("lastModified").textContent =
`Last Modified: ${document.lastModified}`;

// STATIC WEATHER VALUES
const temperature = 8; // Celsius
const windSpeed = 12; // km/h

// WIND CHILL FUNCTION
function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

// SELECT WIND CHILL ELEMENT
const windChill = document.getElementById("windchill");

// CHECK CONDITIONS
if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent =
    `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChill.textContent = "N/A";
}