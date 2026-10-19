function openMenu() {
  const menu = document.querySelector(".menu");
  if (!menu) {
    throw new Error("Mobile navigation menu was not found.");
  }
  menu.classList.add("menu--open");
}

function closeMenu() {
  const menu = document.querySelector(".menu");
  if (!menu) {
    throw new Error("Mobile navigation menu was not found.");
  }
  menu.classList.remove("menu--open");
}