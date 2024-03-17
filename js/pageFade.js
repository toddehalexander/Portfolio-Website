// JavaScript
window.onload = function() {
  if (!sessionStorage.getItem('hasLoadedOnce')) {
    const bodyContent = document.querySelector('.body-content');
    bodyContent.classList.add('animate-on-load');
    sessionStorage.setItem('hasLoadedOnce', true);

    // Delay the execution of the code that opens the "About Me" section
    setTimeout(function() {
      var firstContent = document.getElementById('newest');
      if (firstContent) {
        firstContent.style.maxHeight = firstContent.scrollHeight + "px";
      }
    }, 1500); // The delay should be the same as the duration of the fade-in animation
  } else {
    const bodyContent = document.querySelector('.body-content');
    bodyContent.style.opacity = 1;

    var firstContent = document.getElementById('newest');
    if (firstContent) {
      firstContent.style.maxHeight = firstContent.scrollHeight + "px";
    }
  }
}