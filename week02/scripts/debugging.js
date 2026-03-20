// Get references to HTML elements
const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area');  // Fixed: was using wrong selector

let area = 0;
const PI = 3.14159;  // Fixed: removed extra equals sign

let radius = 10;  // Fixed: changed from const to let so it can be reassigned
area = PI * radius * radius;
radiusOutput.textContent = radius;  // Fixed: using textContent property
areaOutput.textContent = area;       // Fixed: using textContent property

radius = 20;  // Now works because radius is declared with let
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;