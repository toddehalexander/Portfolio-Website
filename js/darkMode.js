const toggleCheckbox = document.getElementById('darkModeToggle');
const body = document.body;

// Check if dark mode preference is stored in localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Apply dark mode if it's enabled in localStorage
if (isDarkMode) {
  body.classList.add('dark-mode');
  toggleCheckbox.checked = true; // Check the checkbox if dark mode is enabled
}

// Function to toggle dark mode and update localStorage
function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
}

// Event listener for the checkbox
toggleCheckbox.addEventListener('change', toggleDarkMode);


