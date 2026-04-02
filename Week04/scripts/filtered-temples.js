// Current year and last modified
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").innerHTML = `Last modified: ${document.lastModified}`;

// Temple data array
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
    // ADDED 3 MORE TEMPLES
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-lds-1078693-wallpaper.jpg"
    },
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59246,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-1022529-wallpaper.jpg"
    }
];

// Function to get year from dedicated string
function getDedicatedYear(dedicatedStr) {
    return parseInt(dedicatedStr.split(",")[0]);
}

// Function to display temples
function displayTemples(templesArray) {
    const container = document.getElementById("temple-cards");
    container.innerHTML = "";
    
    templesArray.forEach(temple => {
        const card = document.createElement("div");
        card.className = "temple-card";
        
        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName} temple" loading="lazy">
            <div class="info">
                <h3>${temple.templeName}</h3>
                <p class="location">📍 ${temple.location}</p>
                <p class="dedicated">📅 Dedicated: ${temple.dedicated}</p>
                <p class="area">📐 Area: ${temple.area.toLocaleString()} sq ft</p>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Filter functions
function filterHome() {
    displayTemples(temples);
}

function filterOld() {
    const oldTemples = temples.filter(temple => getDedicatedYear(temple.dedicated) < 1900);
    displayTemples(oldTemples);
}

function filterNew() {
    const newTemples = temples.filter(temple => getDedicatedYear(temple.dedicated) > 2000);
    displayTemples(newTemples);
}

function filterLarge() {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
}

function filterSmall() {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
}

// Event listeners for navigation
document.getElementById("home").addEventListener("click", (e) => {
    e.preventDefault();
    filterHome();
});

document.getElementById("old").addEventListener("click", (e) => {
    e.preventDefault();
    filterOld();
});

document.getElementById("new").addEventListener("click", (e) => {
    e.preventDefault();
    filterNew();
});

document.getElementById("large").addEventListener("click", (e) => {
    e.preventDefault();
    filterLarge();
});

document.getElementById("small").addEventListener("click", (e) => {
    e.preventDefault();
    filterSmall();
});

// Initial display
displayTemples(temples);