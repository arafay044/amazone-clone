export function formatCurrency(priceCents){
   return (priceCents/100).toFixed(2);
}
export default formatCurrency;//now we can import this without curly brackets
// Each file can only have one default export