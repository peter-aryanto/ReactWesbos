import React from 'react';

export default function Header({tagline}) {
///class Header extends React.Component {
  ///render() {
  return (
    <>
    <header className='top'>
      <h1>Catch o d Day</h1>
      <h3 className='tagline'>
        <span>{tagline}</span>
        {/*<span>{this.props.tagline}</span>*/}
        </h3>
    </header>
    </>
  );
  ///}
}
///export default Header;