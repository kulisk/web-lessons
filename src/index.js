import "../styles/main.css";

let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
}

let observer = new IntersectionObserver(checkItems, options);
document.querySelectorAll(".timeline li").forEach(item => observer.observe(item));

function checkItems(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    })
}