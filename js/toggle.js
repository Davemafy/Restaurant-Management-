const navToggle = document.getElementById('mobile-nav-toggle')
const primaryNav = document.getElementById('primary-navigation')

navToggle.addEventListener('click', function() {
  const navVisible = primaryNav.getAttribute('data-visible')
  if (navVisible === 'false') {
    primaryNav.setAttribute('data-visible', true)
    navToggle.setAttribute('aria-expanded', true)
  }
  else if (navVisible === 'true') {
    primaryNav.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
  }
})


// This code offs primary transition on mouseout event
const inputBox = document.querySelector('#input-box')

inputBox.addEventListener("mouseout", () => {
  const transed = primaryNav.getAttribute("data-transed")
  primaryNav.setAttribute("data-transed", true)

  navToggle.addEventListener("click", () => {
    primaryNav.setAttribute("data-transed", false)
  })
})





//ons / offs  primary calc visibility 

const calculatorToggle = document.querySelector("#calculator-toggle")
const primaryCalculator = document.querySelector("#primary-calculator")
const calcToggleOff = document.querySelector("#primary-calculator-toggle")

function toggleVisibility(arr) {
  if (arr === "false") {
    primaryCalculator.setAttribute("data-visible", true)
  } else if (arr === "true") {
    primaryCalculator.setAttribute("data-visible", false)
  }
}

calculatorToggle.addEventListener("click", () => {
  const calcVisible = primaryCalculator.getAttribute("data-visible")
  toggleVisibility(calcVisible)

})

calcToggleOff.addEventListener('click', () => {
  const calcVisible = primaryCalculator.getAttribute("data-visible")
  const calcClosed = primaryCalculator.getAttribute("data-closing")

  if (calcClosed === "false") {
    primaryCalculator.setAttribute("data-closing", true)
  } else if (calcClosed === "true") {
    primaryCalculator.setAttribute("data-closing", false)
  }
  toggleVisibility(calcVisible)
})


const inputBtn = document.querySelector('#input-btn')

let todayNames = []
let clientNames = JSON.parse(localStorage.getItem("clients"))
if (clientNames) {
  todayNames = clientNames
}

inputBtn.addEventListener("click", () => {
  if (inputBox.value && !clientNames.includes(inputBox.value)) {
    todayNames.push(inputBox.value)
  }

  localStorage.setItem("clients", JSON.stringify(todayNames))
  clientNames = JSON.parse(localStorage.getItem("clients"))
  console.log(todayNames);
  localStorage.setItem("todayClients", JSON.stringify(clientNames))
})