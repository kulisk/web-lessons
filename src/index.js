import "../styles/main.css";

function onPageLoaded() {
    let items = document.querySelectorAll(".timeline li");
    items = Array.from(items);

    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkItems() {
        let itemsToDelete = [];
        for (let i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
                itemsToDelete.push(i);
            }
        }
        for (let i = itemsToDelete.length - 1; i >= 0; i--) {
            items.splice(itemsToDelete[i], 1);
        }
    }

    window.addEventListener("load", checkItems);
    window.addEventListener("resize", checkItems);
    window.addEventListener("scroll", checkItems);
}

document.addEventListener("DOMContentLoaded", onPageLoaded);