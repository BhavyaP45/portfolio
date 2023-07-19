
const footer_buttons = document.querySelectorAll(".svgClass")

footer_buttons.forEach(element => {
  element.getSVGDocument().getElementById("svgInternalID").setAttribute("fill", "red")
})
