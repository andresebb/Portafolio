const burgerMenu = document.getElementById("burger-menu");
const menu = document.querySelector(".menu");

const cerrar = document.querySelectorAll(".a-header");

console.log(burgerMenu);
console.log(menu);

burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
});

/* inicio.addEventListener("click", () => {
  menu.classList.toggle("is-active");
}); */

cerrar.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.toggle("is-active");
  });
});
