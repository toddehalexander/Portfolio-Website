function toggleContent(event) {
    event.stopPropagation();
    var target = event.target;
    if (target && (target.classList.contains('date') || (target.parentElement && target.parentElement.classList.contains('date')))) {
        var content = target.classList.contains('date') ? target.nextElementSibling : target.parentElement.nextElementSibling;
        if (content && content.classList.contains('dropdown-content')) {
            // Check if the dropdown is already open
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }
    }
}

document.addEventListener('click', toggleContent);