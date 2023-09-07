const input = document.getElementById("input");
const sc = document.getElementById("sc");

const checkInputandOpenPage = function () {
    if (input.value === '프로필') {
        window.open('../profile/profile.html')
    } else if (input.value === '자기소개') {
        window.open('../introduce/introduce.html')
    } else if (input.value === '스킬') {
        window.open('../skills/skills.html')
    }
};

input.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        checkInputandOpenPage();
    }
});

sc.addEventListener('click', function () {
    checkInputandOpenPage();
})