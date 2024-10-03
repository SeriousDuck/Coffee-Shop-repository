const searchBox = document.querySelector(".search-box");
const searchIcon = document.querySelector("#search-icon");

searchIcon.addEventListener("click", () => {
    searchBox.classList.toggle("active");
    navbar.classList.remove("active");
    basket.classList.remove("active");
})


// burger menu
const navbar = document.querySelector(".navbar");
const menuIcon = document.querySelector("#menu-icon");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    searchBox.classList.remove("active");
    basket.classList.remove("active");
})


// close nav menu, serch box when scroll
window.onscroll = () => {
    navbar.classList.remove("active");
    searchBox.classList.remove("active");
    basket.classList.remove("active");
}


// Header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
})

