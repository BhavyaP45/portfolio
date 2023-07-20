
const opening_container = document.querySelector("#opening_container")
const first_half = document.querySelector("#first_half")
const second_half = document.querySelector("#second_half")
const opening_logo = document.querySelector("#opening_logo")
const seperator = document.querySelector("#seperator")
const opening_list = [seperator, first_half, second_half, opening_logo]

opening_logo.addEventListener("animationend", e => {
  opening_list.forEach(element => {
    element.style.opacity = 0
  });
}) 
  
second_half.addEventListener("transitionend", event => {
  opening_container.classList.add("hidden")
  opening_container.classList.replace("z-50", "-z-10")

})

resume_call_to_action = document.querySelector(".resume_call_to_action")
