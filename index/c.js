let index = 0;
const items = document.querySelectorAll(".item");
const length = items.length;
setInterval(() => {
    items[index].classList.remove("active");
    index = (index + 1) % length;
    items[index].classList.add("active");
}, 3000);

const main = document.querySelector('.main');
const searchInput = document.querySelector('.searchInput');
const carousel = document.querySelector('.carousel');

main.addEventListener('click', () => {
    // main 클릭 시 searchInput 이 나타나고, carousel 은 사라짐
    carousel.style.display = 'none';
    searchInput.style.display = 'block';
    searchInput.focus();
});

searchInput.addEventListener('blur', () => {
    // searchInput 이 blur 처리가 될때(foucsOut 될 때), searchInput 이 사라지고, carousel 이 나타남. 
    searchInput.style.display = 'none';
    carousel.style.display = 'block';
})