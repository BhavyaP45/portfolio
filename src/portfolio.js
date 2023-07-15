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

window.addEventListener("resize", (event) => {
  if (screen.width > 768) {
  Responsive_nav.classList.remove("responsive-nav");
  Responsive_nav.classList.add("hidden");
  fa_bars.classList.replace("fa-xmark", "fa-bars")

  }

  let slide_width = carousel_items[0].getBoundingClientRect().width;
  //Place all elements beside eachother,and change according to screensize

  carousel_items.forEach((slide, index) => {
  slide.style.left = slide_width * index + "px";
  if (slide.classList.contains("active-item")) {
      return ind = index
  } 
  }); 
  console.log(carousel_items[ind], carousel_items[0], carousel_track)
  moveToSlide(carousel_items[ind], carousel_items[0], carousel_track)

} )

//Carousel
const carousel = document.querySelector("#skills_carousel");
const carousel_track = document.querySelector(".carousel_track");
const carousel_items = document.querySelectorAll(".carousel_item");
let slide_width = carousel_items[0].getBoundingClientRect().width;
const left_button = document.querySelector(".carousel-button--left");
const right_button = document.querySelector(".carousel-button--right");


//Place all elements beside eachother
carousel_items.forEach((slide, index) => {
  slide.style.left = slide_width * index + "px";
}); 


const moveToSlide = (current_slide, target_slide, track) =>{
  current_slide.classList.remove("active-item")
  target_slide.classList.add("active-item")
  track.style.transform = "translateX(-" + target_slide.style.left + ")"
}

function movetoright() {
  const active_slide = carousel_track.querySelector(".active-item")

  if (active_slide == carousel_track.lastElementChild) {
    var next_slide = carousel_items[0]
  }
  else {
    var next_slide = active_slide.nextElementSibling;
  }
  moveToSlide(active_slide, next_slide, carousel_track)
}

function movetoleft() {
  const active_slide = carousel_track.querySelector(".active-item")

  if (active_slide == carousel_track.firstElementChild) {
    var last_slide = carousel_track.lastElementChild;
  }
  else {
    var last_slide = active_slide.previousElementSibling;
  }
  moveToSlide(active_slide, last_slide, carousel_track);
}


right_button.addEventListener("click", e =>{
  clearInterval(autocarousel)
  autocarousel = setInterval(e => {
      movetoright();
  }, 5000);
  movetoright()})

left_button.addEventListener("click", e => {
  clearInterval(autocarousel);
  autocarousel = setInterval(e => {
    movetoright();
    
  }, 5000)
  movetoleft()});
  
//Sets intervals to automatically change slides
var autocarousel =  setInterval(movetoright, 5000)


