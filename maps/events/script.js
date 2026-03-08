const toggle = document.querySelector(".menu-toggle");
const sidemenu = document.querySelector(".sidemenu");

let wasCollapsed = false;

toggle.addEventListener("click", () => {
  sidemenu.classList.toggle("collapsed");
  wasCollapsed = sidemenu.classList.contains("collapsed");
});

function handleResize() {
  if (window.innerWidth <= 752) {
    sidemenu.classList.remove("collapsed");
  } else {
    if (wasCollapsed) {
      sidemenu.classList.add("collapsed"); 
    }
  }
}

window.addEventListener("resize", handleResize);
handleResize();