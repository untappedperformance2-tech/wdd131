// Get review count from localStorage
let reviewCount = localStorage.getItem("reviewCount");

if (reviewCount === null) {
    reviewCount = 0;
} else {
    reviewCount = parseInt(reviewCount);
}

// Increment the count
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);

// Display the count on the confirmation page
const reviewCountSpan = document.getElementById("reviewCount");
if (reviewCountSpan) {
    reviewCountSpan.textContent = reviewCount;
}

// Set footer year and last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = "Last modified: " + document.lastModified;