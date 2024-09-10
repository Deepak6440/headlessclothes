/**
 * Format a number as a currency string.
 *
 * @param {number|string} amount - The amount to format.
 * @param {string} currency - The currency symbol to use.
 * @param {string} locale - The locale to use for formatting.
 * @returns {string} - The formatted currency string.
 */
export function formatCurrency(amount, currency = "$", locale = "en-US") {
    const number = parseFloat(amount);
    if (isNaN(number)) return amount;
  
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currencyDisplay: "symbol",
      currency: "USD", // You can customize this if needed
    }).format(number).replace('US$', currency);
  }
  