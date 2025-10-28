document.addEventListener("DOMContentLoaded", function () {
    let number_one = document.getElementById("INum1");
    let number_two = document.getElementById("INum2");
    let swap_BTN = document.querySelector("button.submit_BTN");
    let reset_BTN = document.querySelector("button[type='reset']");
    let pos1 = document.getElementById("pos1");
    let pos2 = document.getElementById("pos2");

    swap_BTN.addEventListener("click", function () {
        pos1.textContent = number_two.value;
        pos2.textContent = number_one.value;
    });

    reset_BTN.addEventListener("click", function () {
        pos1.textContent = "";
        pos2.textContent = "";
        number_one.value = "";
        number_two.value = "";
    });
});