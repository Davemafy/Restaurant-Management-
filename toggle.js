const body = document.querySelector(
  'body')
const navToggle = document.getElementById(
  'mobile-nav-toggle')
const primaryNav = document.getElementById(
  'primary-navigation')
const overlay = document.querySelector(
  '.overlay')
const primaryForm = document.querySelector(
  '#primary-form')
const primaryFormLabel = document.querySelectorAll(
  '#primary-form label')

const primaryRecords = document.querySelector('#primary-records')

navToggle.addEventListener('click', function() {
  const navVisible =
    primaryNav.getAttribute('data-visible')

  if (navVisible === 'false') {
    primaryNav.setAttribute(
      'data-visible', true
    )
    navToggle.setAttribute(
      'aria-expanded', true
    )
    overlay.setAttribute(
      'data-visible', true
    )
    primaryFormLabel.forEach(
      label => {
        label.style.transition = '11s'
        label.style.color = '#222'
      })
  }
  else if (navVisible === 'true') {
    primaryNav.setAttribute(
      'data-visible', false
    )
    navToggle.setAttribute(
      'aria-expanded', false
    )
    overlay.setAttribute(
      'data-visible', false
    )
    primaryFormLabel.forEach(
      label => {
        label.style.color = 'ghostwhite'
      })
  }
})

overlay.addEventListener('click', () => {
	  const navVisible =
    primaryNav.getAttribute('data-visible')

  if (navVisible === 'true') {
    primaryNav.setAttribute(
      'data-visible', false
    )
     overlay.setAttribute(
      'data-visible', false
    )
    navToggle.setAttribute(
      'aria-expanded', false
    )
   }
  
})


// CALCULATOR TOGGLER 
const calculatorToggle =
  document.querySelector("#calculator-toggle")
const primaryCalculator =
  document.querySelector("#primary-calculator")
const calcToggleOff =
  document.querySelector("#primary-calculator-toggle")

function toggleVisibility(arg)
{
  if (arg === "false") {
    primaryCalculator.setAttribute(
      "data-visible", true
    )
  } else if (arg === "true") {
    primaryCalculator.setAttribute(
      "data-visible", false
    )
  }
}

calculatorToggle.addEventListener("click", () => {
  const calcVisible =
    primaryCalculator.getAttribute(
      "data-visible"
    )

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

let openRecords = document.getElementById('records-toggle')
const analysisToggle = document.querySelector('#analysis-toggle')
const addToggle = document.querySelector('#add-toggle')
const notifyToggle = document.querySelector('#notify-toggle')
const settingsToggle = document.querySelector('#settings-toggle')

const navKit = document.getElementById('nav-kits')
const navKitImg = document.querySelectorAll('#nav-kits img')
// primaryRecords = document.querySelector('#primary-records')
const primaryHome = document.querySelector('#primary-home')
const primaryAnalysis = document.querySelector('#primary-analysis')
const primaryActivities = document.querySelector('#primary-activities')
const scroller = document.querySelector('#nav-kits #navigator')

const navBtns =document.querySelectorAll('#nav-kits button')
navBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (btn === navBtns[0]){
      body.style.inset = '0%'
    }
    else if (btn === navBtns[1]){
      body.style.inset = '0 0 0 -100%'
    }
    else if (btn === navBtns[2] ){
      body.style.inset = '0 0 0 -200%'
      const navDot = document.querySelector('#nav-kits .dot')
      navDot.style.opacity = '0'
    }
    else if (btn === navBtns[3]){
      body.style.inset = '0 0 0 -300%'
    }
    else if (btn = navBtns[4]){
      body.style.inset = '0 0 0 -400%'
    }
      let client = btn.getBoundingClientRect()
      scroller.style.transform =
        `translateX(${client.x}px)`
    })
})




const visibilityTool = document.querySelector('svg[aria-controls="records-all"]')

visibilityTool.addEventListener('click', () => {
  visibility = allRecords.getAttribute('data-visible')
  if (visibility === 'true') {
    allRecords.setAttribute('data-visible', false)
    allRecords.classList.add('none')
  }
  else if (visibility === 'false') {
    allRecords.setAttribute('data-visible', true)
    allRecords.classList.remove('none')
  }
})

const toolsBtn =
  document.querySelector(
    '#tools-btn')
const toolsBox =
  document.querySelector(
    '#tools')

toolsBtn.addEventListener('click', showTools)
function showTools(action){
  visibility = toolsBox.getAttribute('data-visible')
  if (visibility === 'false') {
    toolsBox.setAttribute('data-visible', true)
  } else if (visibility === 'true') {
    toolsBox.setAttribute('data-visible', false)
  }
  if (action === 'hide') {
    toolsBox.setAttribute('data-visible', false)
  }else if(action === 'show'){
    toolsBox.setAttribute('data-visible', true)
  }
}

primaryRecords.addEventListener('scrolldown', (e) => {
  visibility = toolsBox.getAttribute('data-visible')
  if (visibility === 'false') {
    toolsBox.setAttribute('data-visible', true)
  }
  console.log(e.clientY);
})
/* This is an accessable setting
let startingX, startingY, movingX, movingY
primaryRecords.addEventListener('touchstart', (e) => {
  startingX = e.touches[0].clientX
//  console.log(startingX)
  startingY = e.touches[0].clientY
//  console.log(startingY)
})
primaryRecords.addEventListener('touchmove', (e) => {
  movingX = e.touches[0].clientX
 // console.log(movingX)
  movingY = e.touches[0].clientY
//  console.log(movingY)
})
primaryRecords.addEventListener('touchend', (e) => {
  if (startingX + 100 < movingX) {
  //  console.log('right')
    primaryRecords.setAttribute('data-visible', false)
    body.classList.remove('insetY')
  } else if (startingX - 100 < movingX) {
//    console.log('left');
  }
  if (startingY + 100 < movingY) {
 //   console.log('down')
  } else if (startingY - 100 < movingY) {
//    console.log('up');
  }
})

*/
const exitBtn = document.querySelector('#exit-btn')

exitBtn.addEventListener('click', (e) => {
  primaryRecords.setAttribute('data-visible', false)
  toolsBox.setAttribute('data-visible', false)
  body.classList.remove('insetY')
})

//const navImg = document.querySelectorAll('#nav-kits img')

