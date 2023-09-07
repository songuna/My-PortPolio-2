const input = document.getElementById("input");
const sc = document.getElementById("sc");
const itd = document.getElementById("itd");
const pf = document.getElementById("pf");
const sk = document.getElementById("sk");



input.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();

        if (input.value === '프로필') {
            window.open('../profile/profile.html');
        }
    }
});

sc.addEventListener('click', function () {
    alert('click')
})