import React from 'react';
import { formatCurrency } from '../helpers';

export default function Header(props) {
///class Header extends React.Component {
  ///render() {
  return (
    <>
    <header className='top'>
      <h1>Catch o d Day</h1>
      <h3 className='tagline'>
        <span>{props.tagline}</span>
        {/*<span>{this.props.tagline}</span>*/}
      </h3>
      <h3 className='tagline'>
        <span>As Low As {formatCurrency(1.5 * 100)}</span>
      </h3>
    </header>
    </>
  );
  ///}
}
///export default Header;