const toggle = document.querySelector(".menu-toggle");
const sidemenu = document.querySelector(".sidemenu");

toggle.addEventListener("click", () => {
  sidemenu.classList.toggle("collapsed");
});

function handleResize() {
  if (window.innerWidth <= 752) {
    sidemenu.classList.remove("collapsed");
  }
}

window.addEventListener("resize", handleResize);
handleResize();