import React, { useRef } from 'react';

export default function AddFishForm(props) {
  const nameRef = useRef();
  const priceRef = useRef();
  const statusRef = useRef();
  const descRef = useRef();
  const imageRef = useRef();
  let addFish = () => false;
  let handleChange = () => false;
  let removeFish = () => false;
  if (!props.details) {
    addFish = e => {
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
  }
  else {
    handleChange = e => {
      console.log(e.currentTarget.name, e.currentTarget.value);
      const updatedFish = {
        ...props.details,
        [e.currentTarget.name]: e.currentTarget.value
      };
      props.updateFish(props.theKey, updatedFish);
    }
    removeFish = () => {
      props.removeFish(props.theKey);
    }
  }
  return (
    /*
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
    */
    <form className='fish-edit' onSubmit={addFish}>
      <input
        name='name'
        ref={nameRef}
        type='text'
        placeholder='Name'
        value={props.details?.name}
        onChange={handleChange} />
      <input name='price'
        ref={priceRef}
        type='text' placeholder='Price'
        value={props.details?.price}
        onChange={handleChange} />
      <select name='status'
        ref={statusRef}
        type='text' placeholder='Status'
        value={props.details?.status}
        onChange={handleChange}>
        <option value='available'>Fresh!</option>
        <option value='unavailable'>Sold Out!</option>
      </select>
      <textarea name='desc'
        ref={descRef}
        placeholder='Desc'
        onChange={handleChange}>
        {props.details?.desc}
      </textarea>
      <input name='image'
        ref={imageRef}
        type='text' placeholder='Image'
        value={props.details?.image}
        onChange={handleChange} />
      {!props.details && <button type='submit'>+ Add Fish</button>}
      {props.details && <button type='button' onClick={removeFish}>
        &times; Remove Fish
      </button>}
    </form>
  );
}