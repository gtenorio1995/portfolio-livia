const btnMenu = document.querySelector("#menu-burguer");
const menuList = document.querySelector("#menu-list");

const openMenu = () => {
  menuList.classList.toggle("openMenu");
  btnMenu.classList.toggle("active");
};

btnMenu.addEventListener("click", openMenu);
