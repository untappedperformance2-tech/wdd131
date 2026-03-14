// get the current year for the copyright
const today = new Date();
const currentYear = today.getFullYear();

// put the year in the footer
document.getElementById("currentyear").textContent = currentYear;

// get when the document was last changed
const lastModifiedDate = document.lastModified;

// put that in the second paragraph
document.getElementById("lastModified").innerHTML = "Last modified: " + lastModifiedDate;

// just to check in console that it's working
console.log("Copyright year:", currentYear);
console.log("Last modified:", lastModifiedDate);
console.log("Page by: Aaron Morris");