document.getElementById('visitorCount').innerText = Math.floor(Math.random() * 1000) + 1;
function updateTicker() {
    let date = new Date();
    document.getElementById('ticker').innerText = `Current Date & Time: ${date.toDateString()} ${date.toLocaleTimeString()}`;
}
setInterval(updateTicker, 1000);

 function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach(function(el) {
        if (isElementInViewport(el)) {
            el.classList.add('visible');
        }
    });
}


window.addEventListener('scroll', handleScroll);


document.addEventListener('DOMContentLoaded', handleScroll);
