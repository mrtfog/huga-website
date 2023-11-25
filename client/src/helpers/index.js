window.addEventListener("scroll", () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('menu-scroll', window.scrollY>0);
})