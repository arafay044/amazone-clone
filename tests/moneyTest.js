// AUTOMATED TEST: use code to test code instead of manually doing on site
import {formatCurrency} from '../scripts/utlis/money.js';
// Test Cases: 
// 1- Basic test case: if code is working or not
// 2- Edge case: test with values that are at the extremes of the input domain

// group of related test is called test suite

console.log('Test  Suite: formatCurrency');//name the groput of test cases
// Basic test case
console.log('converts cents into dollars');
if(formatCurrency(2095) === '20.95'){
    console.log('passed');
}else{
    console.log('failed');
}


// Edge test case
console.log('works with 0')
if(formatCurrency(0) === '0.00'){
    console.log('passed');
}
else{
    console.log('failed');
}

// Edge test case
console.log('rounds up to the nearest cent');
if(formatCurrency(2000.5) === '20.01'){
    console.log('passed');
}
else{
    console.log('failed');
}

console.log('rounds up to the nearest cent');
if(formatCurrency(2000.4) === '20.00'){
    console.log('passed');
}
else{
    console.log('failed');
}