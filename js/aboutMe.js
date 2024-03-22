function toggleContent(event) {
    event.stopPropagation();
    var target = event.target;
    if (target && (target.classList.contains('date') || (target.parentElement && target.parentElement.classList.contains('date')))) {
        var content = target.classList.contains('date') ? target.nextElementSibling : target.parentElement.nextElementSibling;
        if (content && content.classList.contains('dropdown-content')) {
            // Check if the dropdown is already open
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                // If the content is being closed, store its state in localStorage
                if (content.id === 'newest') {
                    localStorage.setItem('aboutMeClosed', 'true');
                }
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                // If the content is being opened, remove its state from localStorage
                if (content.id === 'newest') {
                    localStorage.removeItem('aboutMeClosed');
                }
            }
        }
    }
}

document.addEventListener('click', toggleContent);

window.onload = function() {
    var firstContent = document.getElementById('newest');
    if (firstContent) {
        // Check localStorage for 'aboutMeClosed' item
        var aboutMeClosed = localStorage.getItem('aboutMeClosed');
        // If 'aboutMeClosed' is not 'true', open the about me section on window load
        if (aboutMeClosed !== 'true') {
            firstContent.style.maxHeight = firstContent.scrollHeight + "px";
        } else {
            // If 'aboutMeClosed' is 'true', keep the about me section closed
            firstContent.style.maxHeight = null;
        }
    }
};