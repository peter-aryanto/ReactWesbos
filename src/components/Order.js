import React from 'react';
import { formatCurrency } from '../helpers';

export default function Order(poops) {
  const orderKeys = Object.keys(poops.order);
  const totalPrice = orderKeys.reduce(
    (currentTotal, key) => {
      const fish = poops.fishes[key];
      const isAvailable = fish && fish.status === 'available';
      if (!isAvailable)
        return currentTotal;

      const count = poops.order[key];
      return currentTotal + count * fish.price;
    },
    0
  );
  return (
    <div className='order-wrap'>
      <h2>Order!!!</h2>
      <ul>
        {orderKeys.map((key) =>
          <li>{key}</li>
        )}
      </ul>
      <div className='total'>
        Total: <strong>{formatCurrency(totalPrice)}</strong>
      </div>
    </div>
  );
}