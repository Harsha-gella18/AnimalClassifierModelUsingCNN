document.addEventListener("DOMContentLoaded", function() {
    // This script handles some dynamic UI changes for the page

    // Example: Change background color based on the time of day
    const hour = new Date().getHours();
    const body = document.body;

    if (hour < 12) {
        // Morning - Light blue background
        body.style.backgroundColor = "#e0f7fa";
    } else if (hour < 18) {
        // Afternoon - Light yellow background
        body.style.backgroundColor = "#fff8e1";
    } else {
        // Evening - Light grey background
        body.style.backgroundColor = "#eceff1";
    }

    // Add more dynamic interactions here as needed
    // For example: Highlight the upload button when the file input is changed
    const fileInput = document.querySelector('input[type="file"]');
    const uploadButton = document.querySelector('button[type="submit"]');

    fileInput.addEventListener('change', function() {
        if (fileInput.files.length > 0) {
            uploadButton.style.backgroundColor = "#45a049"; // Green when a file is selected
        } else {
            uploadButton.style.backgroundColor = ""; // Reset to default
        }
    });
});
