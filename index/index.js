const input = document.getElementById("input");
const sc = document.getElementById("sc");
const itd = document.getElementById("itd");
const pf = document.getElementById("pf");
const sk = document.getElementById("sk");



input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        alert("enter");
    }
});

sc.addEventListener('click', function () {
    alert('click')
})