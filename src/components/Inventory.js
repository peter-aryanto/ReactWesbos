import React from 'react';
import fishes from '../sample-fishes';
import Fish from './Fish';
import AddFishForm from './AddFishForm';

export default function Inventory(props) {
  return (
    <div className='inventory'>
      <h2>Inventory</h2>
      {/*Object.keys(props.fishes).map(key =>
        <Fish key={key}
          theKey = {key}
          details={props.fishes[key]}/>)*/}
      {Object.keys(props.fishes).map(key =>
        <AddFishForm key={key}
          theKey = {key}
          details={props.fishes[key]}
          updateFish={props.updateFish}
          removeFish={props.removeFish} />)}
      <AddFishForm addFish={props.addFish} />
      <button onClick={props.loadSampleFishes}>Load Sample Fishes</button>
    </div>
  );
}