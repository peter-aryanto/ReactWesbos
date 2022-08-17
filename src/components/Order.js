import React from 'react';
import { formatCurrency } from '../helpers';

export default function Order(poops) {
  const orderKeys = Object.keys(poops.order);
  const renderOrderItem = (key) => {
    const fish = poops.fishes[key];
    if (!fish)
      return;

    const isAvailable = fish.status === 'available';
    if (isAvailable) {
      const count = poops.order[key];
      return (
        <li key={key}>
          {count} {fish.name}
          {formatCurrency(count * fish.price)}
        </li>
      );
    }
    else {
      return (
        <li key={key}>Sorry {fish.name} is no longer available.</li>
      );
    }
  }
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
        {orderKeys.map((key) => renderOrderItem(key))}
      </ul>
      <div className='total'>
        Total: <strong>{formatCurrency(totalPrice)}</strong>
      </div>
    </div>
  );
}