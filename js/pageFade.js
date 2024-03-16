// JavaScript
window.onload = function() {
    if (!sessionStorage.getItem('hasLoadedOnce')) {
      const bodyContent = document.querySelector('.body-content');
      bodyContent.classList.add('animate-on-load');
      sessionStorage.setItem('hasLoadedOnce', true);
    } else {
      const bodyContent = document.querySelector('.body-content');
      bodyContent.style.opacity = 1;
    }
  }