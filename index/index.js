const input = document.getElementById("input");
const sc = document.getElementById("sc");

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        alert("enter");
    }
});

sc.addEventListener('click', function () {
    alert('click')
})
