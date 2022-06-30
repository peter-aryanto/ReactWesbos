import React from 'react';
import { formatCurrency } from '../helpers';

export default function Fish(poops) {
  const fish = poops.details;
  const { desc, price } = fish;
  return (
    <li className='menu-fish'>
      <h3 className='single-fish'>🐟 {fish.name}</h3>
      <img src={fish.image} alt={fish.name} width={50} height={50} />
      <p>{desc}</p>
      <div className='price'>{formatCurrency(price)}</div>
      <button>Add to Cart</button>
    </li>
  );
}