import { renderOrerSummary} from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';
import { loadProducts } from "../data/products.js";     

loadProducts(()=>{// callback is a fucntion that we want to run in future
    renderOrerSummary();
    renderPaymentSummary();
});
