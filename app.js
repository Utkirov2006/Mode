const btn = document.querySelector(".menu");
const navbarFluid = document.querySelector(".navbarFluid");
const main = document.querySelector(".main");
const navbar = document.querySelector('.navbar');
const mode = document.querySelector('#mode');

btn.addEventListener("click", () => {
    navbarFluid.classList.toggle("show");
})

mode.addEventListener("input", () => {
    navbar.classList.toggle("navDark");
    main.classList.toggle("mainDark");
})