const btnMenu = document.querySelector("#menu-burguer");
const menuList = document.querySelector("#menu-list");
const arrayMenu = document.querySelectorAll("#menu-list li");

// FUNÇÕES :::

const openMenu = () => {
  menuList.classList.toggle("openMenu");
  btnMenu.classList.toggle("active");
};

function selectedLink() {
  arrayMenu.forEach((item) => {
    item.classList.remove("selected");
  });
  this.classList.add("selected");
  menuList.classList.toggle("openMenu");
  btnMenu.classList.toggle("active");
}

// EVENTOS :::

arrayMenu.forEach((item) => {
  item.addEventListener("click", selectedLink);
});

arrayMenu.forEach((item) => {
  item.addEventListener("touch", selectedLink);
});

btnMenu.addEventListener("click", openMenu);
