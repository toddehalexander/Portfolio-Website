function toggleContent(event) {
    var target = event.target;
    if (target.classList.contains('date')) {
        var content = target.nextElementSibling;
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


// Open the first dropdown content when the page is loaded
window.onload = function() {
    var firstContent = document.getElementById('newest');
    firstContent.style.maxHeight = firstContent.scrollHeight + "px";
};