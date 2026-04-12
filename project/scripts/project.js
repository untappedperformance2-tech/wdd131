// ============================================================
// TRAILS DATA - Updated with your actual image names
// ============================================================
const trails = [
    { id: 1, name: "Slickrock Trail", location: "Moab", difficulty: "Advanced", length: 10.5, elevation: 1200, image: "images/SlickrockTrail.webp", description: "Iconic sandstone riding on rolling waves of petrified sand dunes. This is one of the most famous mountain bike trails in the world!" },
    { id: 2, name: "Porcupine Rim", location: "Moab", difficulty: "Advanced", length: 15.2, elevation: 1800, image: "images/PorcupineRim.webp", description: "Stunning cliffside views overlooking Castle Valley and the Colorado River. Technical riding with huge payoffs." },
    { id: 3, name: "Wasatch Crest", location: "Park City", difficulty: "Intermediate", length: 12.0, elevation: 1500, image: "images/WasatchCrest.webp", description: "Alpine singletrack that runs along the spine of the Wasatch Mountains. Aspen forests and wildflowers in summer." },
    { id: 4, name: "Corner Canyon", location: "Draper", difficulty: "Beginner", length: 8.5, elevation: 600, image: "images/CornerCanyon.webp", description: "Family-friendly trails with flowy descents and well-maintained paths. Perfect for beginners and kids." },
    { id: 5, name: "Gooseberry Mesa", location: "Zion", difficulty: "Advanced", length: 12.0, elevation: 800, image: "images/GooseberryMesa.webp", description: "Technical slickrock riding with panoramic views of Zion National Park. Exposed and challenging." },
    { id: 6, name: "Little Creek Mesa", location: "St. George", difficulty: "Intermediate", length: 9.5, elevation: 700, image: "images/LittleCreekMesa.webp", description: "Fun desert riding with slickrock sections and smooth singletrack. Great for intermediate riders." }
];

// ============================================================
// FOOTER: CURRENT YEAR AND LAST MODIFIED
// ============================================================
const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const modifiedSpan = document.getElementById("lastModified");
if (modifiedSpan) {
    modifiedSpan.innerHTML = `Last modified: ${document.lastModified}`;
}

// ============================================================
// FEATURED TRAILS ON HOME PAGE
// ============================================================
function displayFeaturedTrails() {
    const container = document.getElementById("featured-container");
    if (!container) return;
    
    const featured = trails.slice(0, 3);
    container.innerHTML = featured.map(trail => `
        <div class="trail-card">
            <img src="${trail.image}" alt="${trail.name} trail in Utah" loading="lazy">
            <div class="info">
                <h3>${trail.name}</h3>
                <p>📍 ${trail.location}</p>
                <span class="difficulty difficulty-${trail.difficulty}">${trail.difficulty}</span>
                <p>📏 ${trail.length} miles | ⛰️ ${trail.elevation} ft</p>
                <p>${trail.description.substring(0, 80)}...</p>
            </div>
        </div>
    `).join('');
}

// ============================================================
// DISPLAY ALL TRAILS ON TRAILS PAGE WITH FILTERING
// ============================================================
function displayTrails(filter = "all") {
    const container = document.getElementById("trails-container");
    if (!container) return;
    
    let filteredTrails = trails;
    if (filter !== "all") {
        filteredTrails = trails.filter(trail => trail.difficulty === filter);
    }
    
    if (filteredTrails.length === 0) {
        container.innerHTML = `<p style="text-align:center;">No trails found for ${filter} difficulty. Try another filter!</p>`;
        return;
    }
    
    container.innerHTML = filteredTrails.map(trail => `
        <div class="trail-card" data-id="${trail.id}">
            <img src="${trail.image}" alt="${trail.name} trail in Utah" loading="lazy">
            <div class="info">
                <h3>${trail.name}</h3>
                <p>📍 ${trail.location}</p>
                <span class="difficulty difficulty-${trail.difficulty}">${trail.difficulty}</span>
                <p>📏 ${trail.length} miles | ⛰️ ${trail.elevation} ft</p>
                <p>${trail.description}</p>
            </div>
        </div>
    `).join('');
}

// ============================================================
// FILTER BUTTONS
// ============================================================
function setupFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    if (!buttons.length) return;
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            displayTrails(filter);
        });
    });
}

// ============================================================
// TRAIL LOG (LOCALSTORAGE)
// ============================================================
function loadRiddenTrails() {
    const ridden = localStorage.getItem("riddenTrails");
    return ridden ? JSON.parse(ridden) : [];
}

function saveRiddenTrails(ridden) {
    localStorage.setItem("riddenTrails", JSON.stringify(ridden));
}

function toggleRidden(trailId) {
    let ridden = loadRiddenTrails();
    if (ridden.includes(trailId)) {
        ridden = ridden.filter(id => id !== trailId);
    } else {
        ridden.push(trailId);
    }
    saveRiddenTrails(ridden);
    displayTrailLog();
}

function displayTrailLog() {
    const container = document.getElementById("log-container");
    if (!container) return;
    
    const ridden = loadRiddenTrails();
    const total = trails.length;
    const riddenCount = ridden.length;
    const percent = Math.round((riddenCount / total) * 100);
    
    const riddenCountElem = document.getElementById("riddenCount");
    const totalTrailsElem = document.getElementById("totalTrails");
    const percentElem = document.getElementById("completionPercent");
    
    if (riddenCountElem) riddenCountElem.textContent = riddenCount;
    if (totalTrailsElem) totalTrailsElem.textContent = total;
    if (percentElem) percentElem.textContent = percent;
    
    container.innerHTML = trails.map(trail => `
        <div class="trail-card ${ridden.includes(trail.id) ? 'completed' : ''}">
            <img src="${trail.image}" alt="${trail.name} trail in Utah" loading="lazy">
            <div class="info">
                <h3>${trail.name}</h3>
                <p>📍 ${trail.location}</p>
                <span class="difficulty difficulty-${trail.difficulty}">${trail.difficulty}</span>
                <p>📏 ${trail.length} miles | ⛰️ ${trail.elevation} ft</p>
                <button class="toggle-ridden" data-id="${trail.id}">
                    ${ridden.includes(trail.id) ? '✓ Ridden' : '○ Mark as Ridden'}
                </button>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.toggle-ridden').forEach(btn => {
        btn.addEventListener('click', () => toggleRidden(parseInt(btn.dataset.id)));
    });
}

function resetLog() {
    if (confirm("Are you sure you want to reset all your trail progress? This cannot be undone.")) {
        localStorage.removeItem("riddenTrails");
        displayTrailLog();
    }
}

// ============================================================
// SUBMIT TRAIL FORM (LOCALSTORAGE)
// ============================================================
function handleSubmitTrail(event) {
    event.preventDefault();
    
    const newTrail = {
        id: Date.now(),
        name: document.getElementById("trailName").value,
        location: document.getElementById("location").value,
        difficulty: document.getElementById("difficulty").value,
        length: parseFloat(document.getElementById("length").value),
        elevation: parseInt(document.getElementById("elevation").value),
        description: document.getElementById("description").value || "No description provided",
        image: "images/trail-placeholder.webp"
    };
    
    // Save to localStorage
    const submittedTrails = JSON.parse(localStorage.getItem("submittedTrails") || "[]");
    submittedTrails.push(newTrail);
    localStorage.setItem("submittedTrails", JSON.stringify(submittedTrails));
    
    // Show success message
    const messageDiv = document.getElementById("formMessage");
    messageDiv.innerHTML = `✅ Thank you! "${newTrail.name}" has been submitted for review. We'll check it out and add it soon!`;
    messageDiv.className = "form-message success";
    
    // Reset form
    document.getElementById("trailForm").reset();
    
    // Clear message after 5 seconds
    setTimeout(() => {
        messageDiv.innerHTML = "";
        messageDiv.className = "form-message";
    }, 5000);
}

// ============================================================
// INITIALIZE PAGE BASED ON CURRENT PAGE
// ============================================================
const currentPage = window.location.pathname.split("/").pop();

if (currentPage === "index.html" || currentPage === "") {
    displayFeaturedTrails();
} else if (currentPage === "trails.html") {
    displayTrails();
    setupFilters();
} else if (currentPage === "log.html") {
    displayTrailLog();
    const resetBtn = document.getElementById("resetLog");
    if (resetBtn) resetBtn.addEventListener("click", resetLog);
} else if (currentPage === "submit.html") {
    const form = document.getElementById("trailForm");
    if (form) form.addEventListener("submit", handleSubmitTrail);
}