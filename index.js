const burgerMenu = document.getElementById("burger-menu");
const menu = document.querySelector(".menu");

console.log(burgerMenu);
console.log(menu);

burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
});
