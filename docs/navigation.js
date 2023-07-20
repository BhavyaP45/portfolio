//Navigation Bar 
function navBar() {
  Responsive_nav.classList.toggle("responsive-nav")
  const isOpen = Responsive_nav.classList.contains("hidden")
  if (isOpen) {
    Responsive_nav.classList.remove("hidden");
    fa_bars.classList.replace("fa-bars", "fa-xmark")
  } else {
    Responsive_nav.classList.add("hidden");
    fa_bars.classList.replace("fa-xmark", "fa-bars")
  }
}
const Responsive_nav = document.querySelector("#nav-elements");
const fa_bars = document.querySelector("#fa-bar i");

//Check if the user resizes the window
window.addEventListener("resize", event => {
  if (screen.width > 768) {
  Responsive_nav.classList.remove("responsive-nav");
  Responsive_nav.classList.add("hidden");
  fa_bars.classList.replace("fa-xmark", "fa-bars")
  }

} )