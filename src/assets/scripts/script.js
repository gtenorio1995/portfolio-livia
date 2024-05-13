const btnMenu = document.querySelector("#menu-burguer");
const menuList = document.querySelector("#menu-list");
const arrayMenu = document.querySelectorAll("#menu-list li");
const animaTexto = document.querySelector(".text-animate");

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

function typeWriter(el) {
  const textoArray = el.innerHTML.split("");
  el.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => {
      el.innerHTML += letra;
    }, 75 * i);
  });
  setInterval(() => {
    const textoArray = el.innerHTML.split("");
    el.innerHTML = "";
    textoArray.forEach((letra, i) => {
      setTimeout(() => {
        el.innerHTML += letra;
      }, 75 * i);
    });
  }, 3000);
}

// EVENTOS :::

arrayMenu.forEach((item) => {
  item.addEventListener("click", selectedLink);
});

arrayMenu.forEach((item) => {
  item.addEventListener("touch", selectedLink);
});

btnMenu.addEventListener("click", openMenu);

window.addEventListener("load", () => {
  typeWriter(animaTexto);
});
