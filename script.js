// Change text content dynamically
document.getElementById('text-changer').addEventListener('click', function() {
    const textElement = document.getElementById('changeable-text');
    textElement.textContent = "The text has been changed successfully!";
});

// Modify CSS styles via JavaScript
document.getElementById('toggle-style').addEventListener('click', function() {
    const styleTarget = document.getElementById('style-target');
    styleTarget.classList.toggle('highlighted');
});

// Add or remove an element when a button is clicked
document.getElementById('toggle-element').addEventListener('click', function() {
    const specialElement = document.getElementById('special-element');
    specialElement.classList.toggle('hidden');
});