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
  document.getElementById('github-icon').style.filter = 'invert(1)';
} else {
  toggleCheckbox.checked = true; // Check the checkbox if dark mode is disabled
  document.getElementById('github-icon').style.filter = 'none';
}

// Function to toggle dark mode and update localStorage
function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
  toggleCheckbox.checked = !isDark; // Invert the checkbox

  // Invert the GitHub icon's colors if dark mode is active
  if (isDark) {
    document.getElementById('github-icon').style.filter = 'invert(1)';
  } else {
    document.getElementById('github-icon').style.filter = 'none';
  }
}

// Event listener for the checkbox
toggleCheckbox.addEventListener('change', toggleDarkMode);