  const inputName = document.querySelector('#name')
  const inputOrder = document.querySelector('#menu')
  const inputPrice = document.querySelector('#price')
  const formBtn = document.querySelector('#form-btn')
  const formInputs = document.querySelectorAll("#primary-form-input")

  const primaryRecordsUlDisplay = document.querySelector('#display')
  const primaryRecordsEarlier = document.querySelector('#earlier-cards')

  const visibilityBtn = document.querySelector('#visibility-btn')
  const deleteBtn = document.querySelector('#delete-btn')
  const exitAnalysis = document.querySelector('#exit-analysis')
  const quickActions = document.querySelector('#quick-actions')
  const selectedDisplay = document.querySelector('#primary-records #title h1')

  const popUp = document.querySelector('#pop-up')
  const popUpItems = document.querySelector('#pop-up #item')
  const yesBtn = document.querySelector('#yes-btn')
  const noBtn = document.querySelector('#no-btn')


  let nameList = document.querySelector('#customers-list')
  let recordedCustomers = ["Tall Boy", "Philip Tailor Neighbor", "Kebbi", "POS Guy Front", "Alhaji", "Kebbi Junior Bro", "Crayfish Man(short)", "Musa", "Kuruma", "Bucher Neighbor(buy meat from)", "Bucher Nieghbour (black)", "Bucher Neighbor(fair)", "Chairman", "Chairman Son", "Chairman last son(takeaway)", "Grinding Woman", "Kuruma Accomplice", "Dye Woman", "Odogwu", "Odogwu Friend", "Tomato Man", "Sani Baiwa", "Takeaway Guy", "Kitchen Woman", "Perfume Baba", "Semo Customer", "Biscuit Woman", "Kitchen Woman Sister", "Bwari Brother", "Always transfer before eat", "Chinedu", "Papa", "Mama", "Tall Boy Girl", "Supremarket", "Extreme End", "Chinedu", "Igbo Meat Seller(left)", "Umar", "Near Takeaway man", "Chukwudi", "Plastic Woman", "Ugwu woman near chairman", "Mummy Twins", "Extreme End left", "Extreme End opposite", "opp takeaway man", "Customer Ate Here", "Daniel Friend", "Egusi Woman", "First Man by Left", "First Man by Right", "Next man after first bucher right", "Grinding Man", "Neighbor doesn't collect money", "Ugwu Woman Neigh", "Hagiya"]
  recordedCustomers.sort()
  let customers = JSON.parse(localStorage.getItem("allCustomers"))

  let ordersId = new Array()
  let storedOrders = JSON.parse(localStorage.getItem("Orders"))
  let prices = []
  let cardSelected = []
  const time = new Date()
  const timeStr = time.toLocaleTimeString()

  if (storedOrders) {
    ordersId = storedOrders
    setPrices(storedOrders)
    render()
  } 

  function setPrices(arr, num) {
    for (let i = 0; i < arr.length; i++) {
      prices.push(arr[i].price)
    }
    if (num) {
      prices.push(arr[num].price)
    }
  }

  function suggest() {
    if (customers) {
      // CREATE NEW OPTIONS
      appendOptions()
    } else {
      localStorage.setItem("allCustomers", JSON.stringify(recordedCustomers))
    }

    function appendOptions() {
      let option = ''
      let amount = customers.length


      for (let i = 0; i < amount; i++) {
        option += `<option value="${customers[i]}"></option>`
      }
      nameList.innerHTML += option
    }

    inputName.setAttribute('list', 'customers-list')
  }

  function reset() {
    inputName.value = ''
    inputOrder.value = ''
    inputPrice.value = ''

  }

  function save(item) {
    if (inputName.value && inputOrder.value && inputPrice.value) {
      ordersId.push(item)
      localStorage.setItem("Orders", JSON.stringify(ordersId))

      storedOrders = JSON.parse(localStorage.getItem("Orders"))
      // DETECTS A NEW CUSTOMER
      if (!customers.includes(ordersId[ordersId.length - 1].customer)) {
        alert("Hurray! We've got a new customer")
      }
      paragraph = `    <li class="cstm-card">
                          <div class="circle"></div>
                          <div class="card-main">
                            <div class="cstm-title">
                              <h1>${ordersId[ordersId.length-1].customer}</h1>
                              <h6><small>28/3/23</small></h6>
                            </div>
                            <p>
                              <span>${ordersId[ordersId.length-1].order}</span><span>N${ordersId[ordersId.length-1].price}</span>
                            </p>
                          </div>
                        </li>
                  `
      const subTitle = document.querySelector('.sub-title')
      const subVisibility = subTitle.getAttribute('data-visible')

      if (subVisibility === 'false') {
        subTitle.setAttribute('data-visible', true)
      }

      primaryRecordsUlDisplay.innerHTML += paragraph
      cardsToggle()
      //  console.log(`${ordersId[ordersId.length - 1].customer} , Bought ${ordersId[ordersId.length - 1].order}. At The Price Of ${ordersId[ordersId.length - 1].price}`)
    }
  }


  function render() {
    const primaryRecords = document.querySelector('#primary-records')
    paragraph = ''
    ordersId.reverse()
    for (var i = 0; i < ordersId.length; i++) {
      paragraph += `    <li class="cstm-card">
                          <div class="circle"></div>
                          <div class="card-main">
                            <div class="cstm-title">
                              <h1>${ordersId[i].customer}</h1>
                              <h6><small>${timeStr}</small></h6>
                            </div>
                            <p>
                              <span>${ordersId[i].order}</span><span>N${ordersId[i].price}</span>
                            </p>
                          </div>
                        </li>
                  `
    }
    primaryRecordsEarlier.innerHTML = `<h1 class="sub-title">Earlier</h1> ${paragraph}`
    cardsToggle()
  }

  function cardsToggle() {
    primaryCards = document.querySelectorAll('.cstm-card')
    primaryCards.forEach(card => {
      let display = ''
      card.addEventListener('click', () => {
        if (!cardSelected.includes(card)) {
          cardSelected.push(card)

          cardSelected.forEach(item => {
            display += `<div class='cstm-card'>${item.innerHTML}</div>`
          })
          popUpItems.innerHTML = display

          console.log(cardSelected.length)

          card.style.background =
            'hsla(145, 0%, 10%, 0.85)'

          updateDisplay(
            cardSelected.length)
        }
        else if (cardSelected.includes(card)) {
          display = ''
          card.style.background = 'transparent'

          cardSelected.splice(
            cardSelected.indexOf(card), 1)

          console.log(cardSelected.length)

          cardSelected.forEach(item => {
              display += `<div class='cstm-card'>${item.innerHTML}</div>`
          })

          popUpItems.innerHTML = display
          updateDisplay(
            cardSelected.length)
        }

        if (cardSelected.length === 0) {
          updateDisplay(
            null, 'History')
          card.style.background = 'transparent'
        }

        deleteBtn.addEventListener('click', () => {
          cardSelected.forEach(selected => {
            popUp.style.display = 'grid'

            yesBtn.addEventListener('click', () => {
              cardSelected.splice(
                cardSelected.indexOf(selected), 1)

              selected.remove()

              popUp.style.display = 'none'

              updateDisplay(
                cardSelected.length)


              if (cardSelected.length === 0) {
                updateDisplay(null, 'History')
              }

              popUpItems.innerHTML = ''
              selected.style.background = 'none'

            })

            noBtn.addEventListener('click', () => {
              popUp.style.display = 'none'
            })
          })
        })
      })
    })
  }

  function updateDisplay(num, title) {
    selectedDisplay.innerHTML = `${num} selected`
    if (title) {
      selectedDisplay.innerHTML = title
    }
  }


  // EVENT LISTENERS
  document.addEventListener('DOMContentLoaded', () => {
    suggest()
  })
  formBtn.addEventListener('click', () => {
    newItem = { customer: inputName.value, order: inputOrder.value, price: inputPrice.value }
    //if (popUp()){
    save(newItem)
    setPrices(storedOrders, storedOrders.lenght - 1)
    //}
    reset()
    console.log('cliked');
  })
