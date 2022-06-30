import React, { /*useCallback,*/ useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function StorePicker() {
  //const storeNameInput = React.createRef();  
  const storeNameInput = useRef();  
  const navigate = useNavigate();
  const goToStore = (e) => {
  //const goToStore = useCallback((e) => {
    e.preventDefault();
    console.log(storeNameInput);
    console.log(storeNameInput.current);
    console.log(storeNameInput.current.value);
    navigate(`store/${storeNameInput.current.value}`);
  }
  //}, []);
  return (
    <form className='store-selector' onSubmit={goToStore}>
      <h2>Please Enter A Store</h2>
      <input type='text' ref={storeNameInput} placeholder='Store Name' defaultValue='My Store' />
      <button type='submit'>Visit Store →</button>
    </form>
  );
}

export default StorePicker;