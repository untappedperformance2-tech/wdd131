// Dynamic footer: current year and last modified
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last modified: ${lastModified}`;

// Wind Chill Calculation
// Static values for temperature (°C) and wind speed (km/h)
const temperature = 14;  // °C
const windSpeed = 12;    // km/h

/**
 * Calculate wind chill factor using the metric formula (°C)
 * Formula: 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
 * @param {number} temp - Temperature in degrees Celsius
 * @param {number} wind - Wind speed in kilometers per hour
 * @returns {number} - Wind chill value
 */
function calculateWindChill(temp, wind) {
    // Metric formula
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
}

// Check conditions for valid wind chill calculation
// Metric conditions: Temperature <= 10°C AND Wind speed > 4.8 km/h
let windChillValue;

if (temperature <= 10 && windSpeed > 4.8) {
    // Conditions met - calculate wind chill
    windChillValue = calculateWindChill(temperature, windSpeed);
    // Round to 1 decimal place
    windChillValue = Math.round(windChillValue * 10) / 10;
} else {
    // Conditions not met
    windChillValue = "N/A";
}

// Display the wind chill value
document.getElementById("windchill").textContent = windChillValue;

// Optional: Log to console for debugging
console.log(`Temperature: ${temperature}°C`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log(`Wind Chill: ${windChillValue}`);