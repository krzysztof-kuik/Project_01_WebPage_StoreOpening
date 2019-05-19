document.addEventListener('DOMContentLoaded', function () {


  let accountancyCheckbox = document.getElementById('accountancyCheckboc');
  let terminalCheckbox = document.getElementById('terminalCheckbox');
  let summaryList = [...document.querySelector('.calculator ul').children];
  let numberOfProducts = document.getElementById('numberOfProducts');
  let numberOfOrders = document.getElementById('numberOfOrders');
  let packageChoose = document.querySelector('.calculator select');
  let options = [...packageChoose.children];
  let form = document.querySelector('form');
  console.log(form);
  console.log(packageChoose);
  console.log(options);
  console.log(summaryList);
  // console.log(numberOfOrders);
  let accountancyPrice = 35;
  let terminalPrice = 5;
  let singleProductPrice = 0.5;
  let singleOrderPrice = 0.25;
  let basicPackagePrice = parseInt(document.querySelector('.basic_package>h3').innerText.slice(1));
  let professionalPackagePrice = parseInt(document.querySelector('.professional_package>h3').innerText.slice(1));
  let premiumPackagePrice = parseInt(document.querySelector('.premium_package>h3').innerText.slice(1));


  console.log(basicPackagePrice, professionalPackagePrice, premiumPackagePrice);

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

  // let totalCharge = productsCharge + ordersCharge + packageCharge;

  function totalChargeUpdate() {
    let totalCharge = productsCharge + ordersCharge + packageCharge;
    if (accountancyCheckbox.checked) {
      totalCharge += accountancyPrice;
    }
    if (terminalCheckbox.checked) {
      totalCharge += terminalPrice;
    }
    totalPrice.innerText = `$${totalCharge}`;
    console.log(productsCharge, ordersCharge, packageCharge);
  }


  console.log(totalPrice);

  console.log(productsOption, ordersOption, packageOption, accountancyOption, terminalOption, total);
  console.log(summaryList);

  accountancyOption.querySelector('.price').innerText = `$${accountancyPrice}`;
  terminalOption.querySelector('.price').innerText = `$${terminalPrice}`;

  packageOption.querySelector('.description').innerText = options[0].value;
  packageOption.querySelector('.price').innerText = `$${basicPackagePrice}`;


  numberOfProducts.addEventListener('input', function () {

    // if (numberOfProducts.value > 0) {

    console.log(numberOfProducts.value);
    productsOption.querySelector('.description').innerText = `${numberOfProducts.value} * $${singleProductPrice}`;
    productsOption.querySelector('.price').innerText = `$${numberOfProducts.value * singleProductPrice}`;


    productsCharge = numberOfProducts.value * singleProductPrice;
    totalChargeUpdate();
    // console.log(productsCharge, totalChargeUpdate());


    /*
        } else {
          productsOption.querySelector('.description').innerText = '';
          productsOption.querySelector('.price').innerText = '';
          // numberOfProducts.value = numberOfProducts.placeholder;
        }*/
  });


  numberOfOrders.addEventListener('input', function () {

    // if (numberOfOrders.value > 0) {

    console.log(numberOfOrders.value);
    ordersOption.querySelector('.description').innerText = `${numberOfOrders.value} * $${singleOrderPrice}`;
    ordersOption.querySelector('.price').innerText = `$${numberOfOrders.value * singleOrderPrice}`;


    ordersCharge = numberOfOrders.value * singleOrderPrice;
    totalChargeUpdate()
    // console.log(ordersCharge, totalChargeUpdate());


    // console.log(totalCharge());
    /*} else {
      ordersOption.querySelector('.description').innerText = '';
      ordersOption.querySelector('.price').innerText = '';
      // numberOfOrders.value = numberOfOrders.placeholder;
    }*/
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
        // totalPrice.innerText = `$${totalCharge()}`;
      }
    }
    totalChargeUpdate();
  });


  accountancyCheckbox.addEventListener('click', function () {

    if (accountancyCheckbox.checked === true) {
      accountancyOption.classList.toggle('invisible');
    } else {
      accountancyOption.classList.toggle('invisible');
      // totalPrice.innerText = `$${totalCharge()}`;
    }
    totalChargeUpdate();
  });


  terminalCheckbox.addEventListener('click', function () {

    if (accountancyCheckbox.checked === true) {
      terminalOption.classList.toggle('invisible');
    } else {
      terminalOption.classList.toggle('invisible');
      // totalPrice.innerText = `$${totalCharge()}`;

    }
    totalChargeUpdate();
  });

  /*
    form.addEventListener('click', function () {
      let totalPrice = 0;
      for (let i = 0; i < summaryList.length - 1; i++) {
        if (!summaryList[i].classList.contains('invisible')) {
          console.log(parseInt(summaryList[i].querySelector('.price').innerText.split(1)));
          totalPrice += parseInt(summaryList[i].querySelector('.price').innerText.split(1));

        }
      }
      total.querySelector('.price').innerText = `$${totalPrice}`;
    })
    console.log(summaryList[0].querySelector('.price').innerText.split(1));

    */

  /*  function totalCharge() {
      if (numberOfOrders.value > 0 && numberOfProducts.value > 0) {
        let productsCharge = parseInt(productsOption.querySelector('.price').innerText.split(1));

        let ordersCharge = parseInt(ordersOption.querySelector('.price').innerText.split(1));


        let packageCharge = parseInt(packageOption.querySelector('.price').innerText.split(1));

        let accountancyCharge = (accountancyOption.classList.contains('invisible')) ? 0 : accountancyPrice;
        let terminalCharge = (terminalOption.classList.contains('invisible')) ? 0 : terminalPrice;

        console.log(toString(productsCharge), toString(ordersCharge), toString(packageCharge), toString(accountancyCharge), toString(terminalCharge));
        console.log(typeof productsCharge, typeof ordersCharge, typeof packageCharge, typeof accountancyCharge, typeof terminalCharge);

        return productsCharge + ordersCharge + packageCharge + accountancyCharge + terminalCharge;
      }
    }*/


})
;

