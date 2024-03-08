function toggleContent(event) {
    event.stopPropagation();
    var target = event.target;
    if (target.classList.contains('date') || target.parentElement.classList.contains('date')) {
        var content = target.classList.contains('date') ? target.nextElementSibling : target.parentElement.nextElementSibling;
        if (content.classList.contains('dropdown-content')) {
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }
    }
}

document.addEventListener('click', toggleContent);

window.onload = function() {
    var firstContent = document.getElementById('newest');
    firstContent.style.maxHeight = firstContent.scrollHeight + "px";
    // Add this line to make the text inside not selectable
    firstContent.style.userSelect = "none";
};

document.addEventListener('click', toggleContent);


// Open the first dropdown content when the page is loaded
window.onload = function() {
    var firstContent = document.getElementById('newest');
    firstContent.style.maxHeight = firstContent.scrollHeight + "px";
};