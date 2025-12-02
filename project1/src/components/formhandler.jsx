import React, { useState } from 'react';

function FormExample() {
  const [text, setText] = useState('');

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('Submitted: ' + text);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormExample;