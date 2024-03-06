// JavaScript to toggle dark mode and store user preference
const toggleButton = document.getElementById('toggle');
const body = document.body;

// Check if dark mode preference is stored in localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Apply dark mode if it's enabled in localStorage
if (isDarkMode) {
  body.classList.add('dark-mode');
}

// Function to toggle dark mode and update localStorage
function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
}

// Event listener for the toggle button
toggleButton.addEventListener('click', toggleDarkMode);
