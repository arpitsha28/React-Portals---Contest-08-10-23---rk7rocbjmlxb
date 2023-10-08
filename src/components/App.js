import React, { useState, useRef } from 'react';
import '../styles/App.css';
import PortalButton from './PortalButton';
import PortalTextArea from './PortalTextArea';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const textareaRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (textareaRef.current) {
      textareaRef.current.value = inputValue;
    }
  };

  return (
    <div id="main">
      <input id="input" value={inputValue} onChange={handleInputChange} />
      <br />
      <PortalButton buttonClick={handleButtonClick} />
      <br />
      <PortalTextArea textareaRef={textareaRef} />
    </div>
  );
};

export default App;
