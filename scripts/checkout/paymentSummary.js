import {cart} from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOption.js';
import {formatCurrency} from '../utlis/money.js';
import { addOrder } from '../../data/orders.js';

export function renderPaymentSummary(){
    let productPriceCents = 0;
    let shippingPriceCents = 0;
    cart.forEach((cartItem) => {
       const product = getProduct(cartItem.productId);
       productPriceCents += product.priceCents * cartItem.quantity;
      const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
      shippingPriceCents += deliveryOption.priceCents;
    });
    const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
    const taxCents = totalBeforeTaxCents * 0.1;

    const totalCents = totalBeforeTaxCents + taxCents;

    

    const paymentSummaryHTML =  `
        <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${cart.length}):</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shippingPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary js-place-order">
            Place your order
          </button>
    `;

    document.querySelector('.js-payment-summary')
        .innerHTML = paymentSummaryHTML;
         const itemsNumber = document.querySelector('.js-number-of-items');
     itemsNumber.textContent = cart.length + " items";
    document.querySelector('.js-place-order').addEventListener('click',async () => {
      // we use post to send the order to the server and thats why we have second parameter object
      try{
        const response = await fetch('https://supersimplebackend.dev/orders',{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cart: cart
          })
        });
          //resposne.json is also a promise
       const order = await response.json();
       addOrder(order);
      }catch(error){
        console.error('Unexpected error, try again later');
      }

      // special obj that let us control url at top of browser if change location obj it change url
      window.location.href = 'orders.html';// replace after / with orders.html
    
    });
}


