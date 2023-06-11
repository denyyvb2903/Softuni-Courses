function solve() {
   let addButtons = document.querySelectorAll('.add-product');
   let addButtonArr = Array.from(addButtons);
   let textArea = document.querySelector('textarea')
   let totalSum = 0;
   let products = {};
   let checkoutBtn = document.querySelector('.checkout');

   addButtonArr.forEach(x => x.addEventListener('click', addHandler));
   checkoutBtn.addEventListener('click', checkoutHandler);

   function checkoutHandler(e) {
      addButtonArr.forEach(x => x.disabled = true);
      let productNames = Object.keys(products).join(', ');
      textArea.textContent += `You bought ${productNames} for ${totalSum.toFixed(2)}.`;
   }

   function addHandler(e) {
      let element = e.target;
      let productDiv = element.parentElement.parentElement;

      let title = productDiv.querySelector('.product-title');
      let priceDiv = productDiv.querySelector('.product-line-price');

      let name = title.textContent;
      let price = Number(priceDiv.textContent);
      totalSum += price;
      products[name] = true;

      textArea.textContent += `Added ${name} for ${price} to the cart. \n`;
   }
}

function solve() {
   let addButtons = document.querySelectorAll('.add-product');
   let addButtonArr = Array.from(addButtons);
   let textArea = document.querySelector('textarea');
   let totalSum = 0;
   let products = {};
   let checkoutBtn = document.querySelector('.checkout');

   addButtonArr.forEach(x => x.addEventListener('click', addHandler));
   checkoutBtn.addEventListener('click', checkoutHandler);

   function checkoutHandler(e) {
      addButtonArr.forEach(x => x.disabled = true);
      let productNames = Object.keys(products).join(', ');
      textArea.value += `You bought ${productNames} for ${formatPrice(totalSum)}.\n`;
   }

   function addHandler(e) {
      let element = e.target;
      let productDiv = element.parentElement.parentElement;

      let title = productDiv.querySelector('.product-title');
      let priceDiv = productDiv.querySelector('.product-line-price');

      let name = title.textContent;
      let price = Number(priceDiv.textContent);
      totalSum += price;
      products[name] = true;

      textArea.value += `Added ${name} for ${formatPrice(price)} to the cart.\n`;
   }

   function formatPrice(price) {
      return price.toFixed(2).replace(/\.00$/, '');
   }
}
