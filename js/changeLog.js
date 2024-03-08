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
        // Check if the about me section was previously closed
        if (localStorage.getItem('aboutMeClosed') === 'true') {
            firstContent.style.maxHeight = null;
        } else {
            firstContent.style.maxHeight = firstContent.scrollHeight + "px";
        }
    }
};