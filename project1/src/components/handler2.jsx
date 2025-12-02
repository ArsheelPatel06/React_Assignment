import React, { useState } from 'react';

function ToggleMessage() {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && <h3>Chupgaya 🔥♥️</h3>}
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Message
      </button>
    </div>
  );
}

export default ToggleMessage;