import { renderOrerSummary} from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';
import { loadProducts,loadProductsFethch } from "../data/products.js";   
import { loadCart } from "../data/cart.js";

// PRMOISES: better way to handel asynchronous code (jo wait nai karta complete honay ka)
//  -- lets us wait for some code to finish, before going to next step

// Built in class and we have to give it a function 
//  when we create this promise it run this function immediately 

// inner function have resolve parameter just like done in jasmine tell when to go next 


// async = make a function return a promise
// await = wait for a promise to finish before going to next line of code (can only used inside async cannot in normal function)
async function loadPage(){
   try{
    // throw 'error1';//manually create error
    await loadProductsFethch();//can only use await when we are in async function

    const value = await new Promise((resolve,reject)=>{//reject allow to create error in future
        // throw 'error2';
         loadCart(()=>{
            // reject('error3');
             resolve('value2');
         });
     });
   } catch(error){
    console.log('error, please try again later');
   }
   
    renderOrerSummary();
    renderPaymentSummary();

    // return 'value2';//converted in resolve value2
}
loadPage();
/*
Promise.all([
    loadProductsFethch(),
    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        })
    })
]).then((values)=>{
    console.log(values);
    renderOrerSummary();
    renderPaymentSummary();
})
*/


/*

// We can run mulitple promises at same time and wait for all of them to finish 
Promise.all([//takes an array of promises
    new Promise((resolve) => {
        loadProducts(() => {
            resolve('value1');//we can give parameter to resolve function that is saved in then function
        });
    }),
    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    })

]).then((values)=>{ //then take a function to run
    console.log(values);
    renderOrerSummary();
    renderPaymentSummary();
});

*/

/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1');//we can give parameter to resolve function that is saved in then function
    });

}).then( (value) => {// promise create a seperate thread for this code and we have to tell next step using then
    console.log(value);

    return new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    });  

}).then(()=>{
    renderOrerSummary();
    renderPaymentSummary();
});
*/

/*
// Callback (multiple callback casue alot of nesting => problem)
loadProducts(()=>{// callback is a fucntion that we want to run in future
    loadCart(()=>{
        renderOrerSummary();
        renderPaymentSummary();
    });
    
});
*/