import React, { useRef } from 'react';

export default function AddFishForm(props) {
  const nameRef = useRef();
  const priceRef = useRef();
  const statusRef = useRef();
  const descRef = useRef();
  const imageRef = useRef();
  const addFish = e => {
    e.preventDefault();
    const fish = {
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value),
      status: statusRef.current.value,
      desc: descRef.current.value,
      image: imageRef.current.value,
    };
    //console.log(fish);
    props.addFish(fish);
    e.currentTarget.reset();
  }
  return (
    <form className='fish-edit' onSubmit={addFish}>
      <input name='name' ref={nameRef} type='text' placeholder='Name' />
      <input name='price' ref={priceRef} type='text' placeholder='Price' />
      <select name='status' ref={statusRef} type='text' placeholder='Status'>
        <option value='available'>Fresh!</option>
        <option value='unavailable'>Sold Out!</option>
      </select>
      <textarea name='desc' ref={descRef} type='text' placeholder='Desc' />
      <input name='image' ref={imageRef} type='text' placeholder='Image' />
      <button type='submit'>+ Add Fish</button>
    </form>
  );
}