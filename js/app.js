document.addEventListener('DOMContentLoaded', function () {


  let accountancyCheckbox = document.getElementById('accountancyCheckboc');
  let terminalCheckbox = document.getElementById('terminalCheckbox');
  let summaryList = document.querySelector('.calculator ul');
  let numberOfProducts = document.getElementById('numberOfProducts');
  let numberOfOrders = document.getElementById('numberOfOrders');
  let packageChoose = document.querySelector('.calculator select');

  console.log(packageChoose);
  console.log(options);
  // console.log(numberOfOrders);
  let accountancyPrice = 35;
  let terminalPrice = 5;
  let singleProductPrice = 0.5;
  let singleOrderPrice = 0.25;
  let basicPackagePrice = parseInt(document.querySelector('.basic_package>h3').innerText.slice(1));
  console.log(basicPackagePrice);

  let productsOption = document.getElementById('products');
  let ordersOption = document.getElementById('orders');
  let packageOption = document.getElementById('package');
  let accountancyOption = document.getElementById('accountancy');
  let terminalOption = document.getElementById('terminal');
  let total = document.getElementById('total');

  console.log(productsOption, ordersOption, packageOption, accountancyOption, terminalOption, total);

  accountancyOption.querySelector('.price').innerText = `$${accountancyPrice}`;
  terminalOption.querySelector('.price').innerText = `$${terminalPrice}`


  numberOfProducts.addEventListener('input', function () {

    if (numberOfProducts.value > 0) {

      console.log(numberOfProducts.value);
      productsOption.querySelector('.description').innerText = `${numberOfProducts.value} * $${singleProductPrice}`;
      productsOption.querySelector('.price').innerText = `$${numberOfProducts.value * singleProductPrice}`;
    } else {
      productsOption.querySelector('.description').innerText = '';
      productsOption.querySelector('.price').innerText = '';
      numberOfProducts.value = numberOfProducts.placeholder;
    }
  });


  numberOfOrders.addEventListener('input', function () {

    if (numberOfOrders.value > 0) {

      console.log(numberOfOrders.value);
      ordersOption.querySelector('.description').innerText = `${numberOfOrders.value} * $${singleOrderPrice}`;
      ordersOption.querySelector('.price').innerText = `$${numberOfOrders.value * singleOrderPrice}`;
    } else {
      ordersOption.querySelector('.description').innerText = '';
      ordersOption.querySelector('.price').innerText = '';
      numberOfOrders.value = numberOfOrders.placeholder;
    }
  });


  packageChoose.addEventListener('change', function () {

    let options = [...packageChoose.children];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        packageOption.querySelector('.description') = options[i].value;
      }
    }
  });


  accountancyCheckbox.addEventListener('click', function () {

    if (accountancyCheckbox.checked === true) {
      accountancyOption.classList.toggle('invisible');
    } else {
      accountancyOption.classList.toggle('invisible');
    }
  });

  terminalCheckbox.addEventListener('click', function () {

    if (accountancyCheckbox.checked === true) {
      terminalOption.classList.toggle('invisible');
    } else {
      terminalOption.classList.toggle('invisible');
    }

  })


})
;

