  const inputName = document.querySelector('#name')
  const inputOrder = document.querySelector('#menu')
  const inputPrice = document.querySelector('#price')
  const formBtn = document.querySelector('#form-btn')

  let nameList = document.querySelector('#customers-list')
  let recordedCustomers = ["Alhaji", "Tall Boy", "Philip Tailor Neighbor", "Kebbi", "POS Guy Front", "Kebbi Junior Bro", "Crayfish Man(short)", "Musa", "Kuruma", "Bucher Neighbor(buy meat from)", "Bucher Nieghbour (black)", "Bucher Neighbor(fair)", "Chairman", "Chairman Son", "Chairman last son(takeaway)", "Grinding Woman", "Kuruma Accomplice", "Dye Woman", "Odogwu", "Odogwu Friend", "Tomato Man", "Sani Baiwa", "Takeaway Guy", "Kitchen Woman", "Perfume Baba", "Semo Customer", "Biscuit Woman", "Kitchen Woman Sister", "Bwari Brother", "Always transfer before eat", "Chinedu", "Papa", "Mama", "Tall Boy Girl", "Supremarket", "Extreme End", "Chinedu", "Igbo Meat Seller(left)", "Umar", "Near Takeaway man", "Chukwudi", "Plastic Woman", "Ugwu woman near chairman", "Mummy Twins", "Extreme End left", "Extreme End opposite", "opp takeaway man", "Customer Ate Here", "Daniel Friend", "Egusi Woman", "First Man by Left", "First Man by Right", "Next man after first bucher right", "Grinding Man", "Neighbor doesn't collect money", "Ugwu Woman Neigh", "Hagiya"]
  let customers = JSON.parse(localStorage.getItem("allCustomers"))
  let ordersId = new Array()
  let storedOrders = JSON.parse(localStorage.getItem("storedOrders"))

  if (customers) {
    let option = ''
    let amount = customers.length

    for (let i = 0; i < amount; i++) {
      option += `<option value="${customers[i]}"></option>`
    }
    nameList.innerHTML += option
  }  else {
    localStorage.setItem("allCustomers", JSON.stringify(recordedCustomers))
  }

  if (storedOrders) {
    ordersId = storedOrders
  }
  else {
    localStorage.setItem("storedOrders", JSON.stringify(ordersId))
  }

  function reset() {
    inputName.value = ''
    inputOrder.value = ''
    inputPrice.value = ''

  }

  function save(item) {
    if (inputName.value && inputOrder.value && inputPrice.value) {
      ordersId.push(item)
      localStorage.setItem("storedOrders", JSON.stringify(ordersId))

      storedOrders = localStorage.getItem("storedOrders")
      if (!customers.includes(ordersId[ordersId.length -1].customer)){
        console.log('Hurray! We Got A New Customer. Saved');
      alert('Hurray! We Got A New Customer. Saved')
        
      }
    //  console.log(`${ordersId[ordersId.length - 1].customer} , Bought ${ordersId[ordersId.length - 1].order}. At The Price Of ${ordersId[ordersId.length - 1].price}`)
    }
  }

  formBtn.addEventListener('click', () => {
    newItem = { customer: inputName.value, order: inputOrder.value, price: inputPrice.value }
    save(newItem)
    
    reset()
  })
  
  
  let a = 'N500'
  a.startsWith('N')
