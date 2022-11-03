import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

const Myp = styled.p`
  color: red;
`;

export default function App() {
  /*
  const state = {
    fishes: {},
    order: {}
  }
  */
  const [fishes, setFishes] = useState({});
  const [order, setOrder] = useState({});
  const addFish = (fish) => {
    //alert('Adding a Fish...');
    console.log('Adding a fish ...');
    console.log(fish);
    const fishesCopy = {...fishes};
    fishesCopy[`fish${Date.now()}`] = fish;
    setFishes(fishesCopy);
  }
  const updateFish = (key, fish) => {
    //alert('Adding a Fish...');
    console.log('Adding a fish ...');
    console.log(fish);
    const fishesCopy = {...fishes, [key]: fish};
    setFishes(fishesCopy);
  }
  const loadSampleFishes = () => {
    //alert('Loading sample fishes ...');
    setFishes(sampleFishes);
  }
  const addToOrder = (key) => {
    const orderCopy = {...order};
    orderCopy[key] = order[key] + 1 || 1;
    setOrder(orderCopy);
  }
  return (
    <>
    <Myp>Hello Again!</Myp>
    <div className='catch-of-the-day'>
      <div className='menu'>
        <Header tagline='It is zuper fresh!' />
        <ul>
          {
            Object.keys(fishes)
              //.map((key) => <p>{fishes[key].name}</p>)
              .map((key) =>
                <Fish key={key}
                  theKey = {key}
                  details={fishes[key]}
                  addToOrder={addToOrder}/>)
          }
        </ul>
      </div>
      <Order fishes={fishes} order={order} />
      <Inventory
        addFish={addFish}
        loadSampleFishes={loadSampleFishes}
        fishes={fishes}
        updateFish={updateFish}/>
    </div>
    </>
  );
}
