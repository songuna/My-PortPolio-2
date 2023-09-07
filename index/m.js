const m = document.getElementById("m");
const box = document.getElementById("box");
const ins = document.getElementById("ins");
const gh = document.getElementById("gh");
const mes = document.getElementById("mes");

jQuery(function () {
    jQuery("#m").on("click", function () {
        jQuery("#box").slideToggle("fast");
    });
});

ins.addEventListener("click", function () {
    window.location.href = 'https://instagram.com/v2ly_you?igshid=NGVhN2U2NjQ0Yg=='
})

gh.addEventListener("click", function () {
    window.location.href = 'https://github.com/songuna'
})

mes.addEventListener("click", function () {
    window.location.href = "./kakao.jpg"
})