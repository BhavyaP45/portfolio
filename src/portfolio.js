function navBar() {
  if (Nav_elements.classList.contains("hidden")) {
    Nav_elements.classList.remove("hidden");
    Nav_elements.classList.add("flex-col", "flex");
  } else {
    Nav_elements.classList.add("hidden");
    Nav_elements.classList.remove("flex-col");
  }
}

const Nav_elements = document.querySelector("#nav-elements");
const fa_bars = document.querySelector("#fa-bar");

window.addEventListener("resize", (event) => {
  if (screen.width > 768) {
  Nav_elements.classList.remove("flex-col");
  Nav_elements.classList.add("hidden");
  }
} )

console.log(Nav_elements.className)