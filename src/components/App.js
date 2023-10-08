import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/App.css';
import PortalButton from './PortalButton';
import PortalTextArea from './PortalTextArea';

const App = () => {
  return (
    <div id="root">
      <input id="input" type="text" placeholder="Enter text" />
      <PortalButton />
      <PortalTextArea />
    </div>
  );
};

export default App;
