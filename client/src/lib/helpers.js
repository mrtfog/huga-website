window.addEventListener("scroll", () => {
  const path = window.location.pathname;
  const menu = document.getElementById("menu");

  if (path === "/") {
    menu.classList.toggle("menu-scroll", window.scrollY > 0);
  } else {
    menu.classList.add("menu-scroll");
  }
});
