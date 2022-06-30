import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

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
  const addFish = (fish) => {
    //alert('Adding a Fish...');
    console.log('Adding a fish ...');
    console.log(fish);
    const fishesCopy = {...fishes};
    fishesCopy[`fish${Date.now()}`] = fish;
    setFishes(fishesCopy);
  }
  const loadSampleFishes = () => {
    //alert('Loading sample fishes ...');
    setFishes(sampleFishes);
  }
  return (
    <>
    <Myp>Hello Again!</Myp>
    <div className='catch-of-the-day'>
      <div className='menu'>
        <Header tagline='It is zuper fresh!' />
      </div>
      <Order />
      <Inventory addFish={addFish} loadSampleFishes={loadSampleFishes} />
    </div>
    </>
  );
}
