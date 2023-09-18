let index = 0;
const items = document.querySelectorAll(".item");
const length = items.length;
setInterval(() => {
    items[index].classList.remove("active");
    index = (index + 1) % length;
    items[index].classList.add("active");
}, 3000);