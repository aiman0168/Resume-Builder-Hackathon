// Function to show or hide an element
function toggleVisibility(element: HTMLElement): void {
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

// Initialize event listeners after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button') as HTMLButtonElement;
    const toggleDiv = document.getElementById('toggle-div') as HTMLElement;

    if (toggleButton && toggleDiv) {
        toggleButton.addEventListener('click', () => {
            toggleVisibility(toggleDiv);
        });
    }
});