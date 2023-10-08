import React from 'react';
import ReactDOM from 'react-dom';

const PortalButton = () => {
  const handleClick = () => {
    const inputText = document.getElementById('input').value;
    const textarea = document.getElementById('textarea');
    if (textarea) {
      textarea.value = inputText;
    }
  };

  return ReactDOM.createPortal(
    <div id="portal-button">
      <button id="button" onClick={handleClick}>Click</button>
    </div>,
    document.getElementById('portal-button')
  );
};

export default PortalButton;
