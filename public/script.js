// Function to check if an element is in the viewport
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.left <= window.innerWidth/1.1 ||
        rect.right <= window.innerWidth 
    );
}

// Function to handle scroll event
function handleScroll() {
    var events = document.querySelectorAll('.event');
    events.forEach(function(event) {
        if (isElementInViewport(event)) {
            event.classList.remove('hidden')
            event.classList.add('visible');
        } else {
            event.classList.remove('visible'); // Remove the 'visible' class if the event is not in the viewport
            event.classList.add('hidden'); // Add the 'hidden' class if the event is not in the viewport
        }
    });
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);
window.addEventListener('wheel', function(e) {
    window.scrollBy(e.deltaY, -e.deltaX, {behavior: 'smooth'});
}, {passive: false});