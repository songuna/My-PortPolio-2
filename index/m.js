const m = document.getElementById("m");
const box = document.getElementById("box");

jQuery(function () {
    jQuery("#m").on("click", function () {
        jQuery("#box").slideToggle("fast");
    });
});