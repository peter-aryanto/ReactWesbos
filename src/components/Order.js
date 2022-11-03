import React from 'react';
import { formatCurrency } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
        <CSSTransition classNames='order' key={key} timeout={{enter:250,exit:250}}>
          <li key={key}>
            {count} {fish.name}
            {formatCurrency(count * fish.price)}
          </li>
        </CSSTransition>
      );
    }
    else {
      return (
        <CSSTransition key={key} timeout={{enter:250,exit:250}}>
          <li key={key}>
            Sorry {fish.name} is no longer available.
          </li>
        </CSSTransition>
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
      <TransitionGroup component='ul'>
        {orderKeys.map((key) => renderOrderItem(key))}
      </TransitionGroup>
      <div className='total'>
        Total: <strong>{formatCurrency(totalPrice)}</strong>
      </div>
    </div>
  );
}