export function formatCurrency(valueInCents) {
  return (valueInCents / 100).toLocaleString(
    'en-AU',
    {style: 'currency', currency: 'AUD'}
  );
}