const toggleCheckbox = document.getElementById('darkModeToggle');
const body = document.body;

// Check if dark mode preference is stored in localStorage
let isDarkMode = localStorage.getItem('darkMode');

// If there's no preference in localStorage, default to dark mode
if (isDarkMode === null) {
  isDarkMode = 'true';
  localStorage.setItem('darkMode', isDarkMode);
}

// Apply dark mode if it's enabled in localStorage
if (isDarkMode === 'true') {
  body.classList.add('dark-mode');
} else {
  toggleCheckbox.checked = true; // Check the checkbox if dark mode is disabled
}

// Function to toggle dark mode and update localStorage
function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
  toggleCheckbox.checked = !isDark; // Invert the checkbox
}

// Event listener for the checkbox
toggleCheckbox.addEventListener('change', toggleDarkMode);