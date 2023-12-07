// Child22.js

import React from 'react';

function HelloChild({ count1, onButtonClick }) {
  console.log('child');

  return (
    <div>
      <h1>Hello from Child</h1>
      {count1}
      <button onClick={onButtonClick}>Click me from Child</button>
    </div>
  );
}

export default React.memo(HelloChild)
