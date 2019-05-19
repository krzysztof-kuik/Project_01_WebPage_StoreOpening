document.addEventListener('DOMContentLoaded', function () {


  let accountancyCheckbox = document.getElementById('accountancyCheckboc');
  let terminalCheckbox = document.getElementById('terminalCheckbox');
  let numberOfProducts = document.getElementById('numberOfProducts');
  let numberOfOrders = document.getElementById('numberOfOrders');
  let packageChoose = document.querySelector('.calculator select');
  let options = [...packageChoose.children];


  let accountancyPrice = 35;
  let terminalPrice = 5;
  let singleProductPrice = 0.5;
  let singleOrderPrice = 0.25;
  let basicPackagePrice = parseInt(document.querySelector('.basic_package>h3').innerText.slice(1));
  let professionalPackagePrice = parseInt(document.querySelector('.professional_package>h3').innerText.slice(1));
  let premiumPackagePrice = parseInt(document.querySelector('.premium_package>h3').innerText.slice(1));

  let productsOption = document.getElementById('products');
  let ordersOption = document.getElementById('orders');
  let packageOption = document.getElementById('package');
  let accountancyOption = document.getElementById('accountancy');
  let terminalOption = document.getElementById('terminal');
  let total = document.getElementById('total');
  let totalPrice = total.querySelector('.price');

  let productsCharge = 0;
  let ordersCharge = 0;
  let packageCharge = 0;

  function totalChargeUpdate() {
    let totalCharge = productsCharge + ordersCharge + packageCharge;
    if (accountancyCheckbox.checked) {
      totalCharge += accountancyPrice;
    }
    if (terminalCheckbox.checked) {
      totalCharge += terminalPrice;
    }
    totalPrice.innerText = `$${totalCharge}`;
  }

  accountancyOption.querySelector('.price').innerText = `$${accountancyPrice}`;
  terminalOption.querySelector('.price').innerText = `$${terminalPrice}`;
  packageOption.querySelector('.description').innerText = options[0].value;
  packageOption.querySelector('.price').innerText = `$${basicPackagePrice}`;


  numberOfProducts.addEventListener('input', function () {

    productsOption.querySelector('.description').innerText = `${numberOfProducts.value} * $${singleProductPrice}`;
    productsOption.querySelector('.price').innerText = `$${numberOfProducts.value * singleProductPrice}`;

    productsCharge = numberOfProducts.value * singleProductPrice;
    totalChargeUpdate();
  });


  numberOfOrders.addEventListener('input', function () {

    ordersOption.querySelector('.description').innerText = `${numberOfOrders.value} * $${singleOrderPrice}`;
    ordersOption.querySelector('.price').innerText = `$${numberOfOrders.value * singleOrderPrice}`;

    ordersCharge = numberOfOrders.value * singleOrderPrice;
    totalChargeUpdate()
  });


  packageChoose.addEventListener('change', function () {

    let options = [...packageChoose.children];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        packageOption.querySelector('.description').innerText = options[i].value;
        if (options[i].value === 'podstawowy') {
          packageOption.querySelector('.price').innerText = `$${basicPackagePrice}`;
          packageCharge = basicPackagePrice;
        } else if (options[i].value === 'profesjonalny') {
          packageOption.querySelector('.price').innerText = `$${professionalPackagePrice}`;
          packageCharge = professionalPackagePrice;
        } else {
          packageOption.querySelector('.price').innerText = `$${premiumPackagePrice}`;
          packageCharge = premiumPackagePrice;
        }
      }
    }
    totalChargeUpdate();
  });


  accountancyCheckbox.addEventListener('click', function () {

    if (accountancyCheckbox.checked === true) {
      accountancyOption.classList.toggle('invisible');
    } else {
      accountancyOption.classList.toggle('invisible');
    }
    totalChargeUpdate();
  });


  terminalCheckbox.addEventListener('click', function () {

    if (accountancyCheckbox.checked === true) {
      terminalOption.classList.toggle('invisible');
    } else {
      terminalOption.classList.toggle('invisible');
    }
    totalChargeUpdate();
  });
})
;

