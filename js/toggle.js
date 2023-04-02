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

const recordsToggle = document.getElementById('records-toggle')
const homeToggle = document.querySelector('#home-toggle')
const analysisToggle = document.querySelector('#analysis-toggle')
const activitiesToggle = document.querySelector('#activities-toggle')


const navKit = document.getElementById('nav-kits')
const primaryRecords = document.querySelector('#primary-records')
const primaryHome = document.querySelector('#primary-home')
const primaryAnalysis = document.querySelector('#primary-analysis')
const primaryActivities = document.querySelector('#primary-activities')

recordsToggle.addEventListener('click', () => {
  const visibility = primaryRecords.getAttribute('data-visible')
  primaryHome.setAttribute('data-visible', false)
  primaryAnalysis.setAttribute('data-visible', false)
  primaryActivities.setAttribute('data-visible', false)

  if (visibility === 'false') {
    primaryRecords.setAttribute('data-visible', true)
  }
  else if (visibility === 'true') {
    primaryRecords.setAttribute('data-visible', false)
  }
  navKit.style.background = ''
})
homeToggle.addEventListener('click', () => {
  const visibility = primaryHome.getAttribute('data-visible')
  primaryRecords.setAttribute('data-visible', false)
  primaryAnalysis.setAttribute('data-visible', false)
  primaryActivities.setAttribute('data-visible', false)

  if (visibility === 'false') {
    primaryHome.setAttribute('data-visible', true)
  }
  else if (visibility === 'true') {
    primaryHome.setAttribute('data-visible', false)
  }
  navKit.style.background = '#00CFC1'

})
analysisToggle.addEventListener('click', () => {
  const visibility = primaryAnalysis.getAttribute('data-visible')
  primaryRecords.setAttribute('data-visible', false)
  primaryHome.setAttribute('data-visible', false)
  primaryActivities.setAttribute('data-visible', false)

  if (visibility === 'false') {
    primaryAnalysis.setAttribute('data-visible', true)
  }
  else if (visibility === 'true') {
    primaryAnalysis.setAttribute('data-visible', false)
  }
  navKit.style.background = '#00FFAD'
})
activitiesToggle.addEventListener('click', () => {
  const visibility = primaryActivities.getAttribute('data-visible')
  primaryRecords.setAttribute('data-visible', false)
  primaryAnalysis.setAttribute('data-visible', false)
  primaryHome.setAttribute('data-visible', false)

  if (visibility === 'false') {
    primaryActivities.setAttribute('data-visible', true)
  }
  else if (visibility === 'true') {
    primaryActivities.setAttribute('data-visible', false)
  }
  navKit.style.background = '#00FAFF'
})

const recordsDisplayToggle = document.querySelector('svg[aria-controls="records-all"]')
const allRecords = document.querySelector('#records-all')

recordsDisplayToggle.addEventListener('click', () => {
  visibility = allRecords.getAttribute('data-visible')
  if (visibility === 'true') {
    allRecords.setAttribute('data-visible', false)
    allRecords.classList.add('none')
    console.log(visibility);
  }
  else if (visibility === 'false') {
    allRecords.setAttribute('data-visible', true)
    allRecords.classList.remove('none')
    console.log(visibility);
  }
})
