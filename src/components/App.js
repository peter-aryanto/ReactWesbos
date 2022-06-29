import Reach from 'react';
import styled from 'styled-components';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

const Myp = styled.p`
  color: red;
`;

export default function App() {
  return (
    <>
    <Myp>Hello Again!</Myp>
    <div className='catch-of-the-day'>
      <div className='menu'>
        <Header tagline='It is super fresh!' />
      </div>
      <Order />
      <Inventory />
    </div>
    </>
  );
}
