const menu__btn = document.querySelector(".hamburger"),
  res__menu = document.querySelector(".responsive__menu"),
  menu_list = document.querySelectorAll(".menu__list"),
  buttonBtn = document.querySelector(".bBtn"),
  next = document.querySelector(".next");

menu__btn.addEventListener("click", function () {
  menu__btn.classList.toggle("is-active");
  res__menu.classList.toggle("is-active");
});

menu_list.forEach((link) => {
  link.addEventListener("click", () => {
    menu_list.forEach((item) => {
      item.classList.remove("menu__active");
    });
    console.log("chiq");
    link.classList.add("menu__active");
  });
});

buttonBtn.addEventListener("click", function () {
  buttonBtn.classList.toggle("changeBtn");
  console.log("chqi");
});

