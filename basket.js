// open Basket
const basket = document.querySelector(".basket-box");
const basketIcon = document.querySelector("#basket-icon");

basketIcon.addEventListener("click", () => {
    basket.classList.toggle("active");
    searchBox.classList.remove("active");
    navbar.classList.remove("active");
    searchBox.classList.remove("active");
})