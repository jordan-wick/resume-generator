import { useState } from 'react';

export default function Input({ id, type, label, placeHolder }) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <label htmlFor={id}>
      {label}
      <input 
        id={id} 
        type={type}
        placeholder={placeHolder}
        value={text}
        onChange={handleChange}
      />
    </label>
  )
}