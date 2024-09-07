// Function to show or hide an element
function toggleVisibility(element) {
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}
// Initialize event listeners after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-button');
    var toggleDiv = document.getElementById('toggle-div');
    if (toggleButton && toggleDiv) {
        toggleButton.addEventListener('click', function () {
            toggleVisibility(toggleDiv);
        });
    }
});
