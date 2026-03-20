// Step 1: Declare variables that hold references to the input, button, and list elements
const chapterInput = document.getElementById('chapterInput');
const addButton = document.getElementById('addChapterBtn');
const chapterList = document.getElementById('chapterList');


function addChapter() {
    // Step 2: Check if input is not empty
    if (chapterInput.value.trim() !== '') {
        // Step 3: Create a li element
        const li = document.createElement('li');
        
        // Step 4: Create a delete button
        const deleteBtn = document.createElement('button');
        
        // Step 5: Populate the li with the input value
        li.textContent = chapterInput.value;
        
        // Step 6: Set the delete button's textContent to ❌
        deleteBtn.textContent = '❌';
        
        // Step 7: Add aria-label for accessibility
        deleteBtn.setAttribute('aria-label', `Remove ${chapterInput.value}`);
        
        // Step 8: Append the delete button to the li
        li.appendChild(deleteBtn);
        
        // Step 9: Append the li to the unordered list
        chapterList.appendChild(li);
        
        // Clear the input field
        chapterInput.value = '';
        
        // Focus back on the input field
        chapterInput.focus();
    } else {
        alert('Please enter a chapter!');
    }
}

// This function will be used in the next activity to delete chapters
function deleteChapter(button) {
    const li = button.parentElement;
    chapterList.removeChild(li);
}

// For testing purposes only - this shows that the variables are working
console.log('Script loaded successfully!');
console.log('Input element:', chapterInput);
console.log('Button element:', addButton);
console.log('List element:', chapterList);