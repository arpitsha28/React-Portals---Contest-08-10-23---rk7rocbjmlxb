import React from 'react';
import ReactDOM from 'react-dom';

const PortalTextArea = () => {
  return ReactDOM.createPortal(
    <div id="portal-textfield">
      <textarea id="textarea" placeholder="Text will appear here..."></textarea>
    </div>,
    document.getElementById('portal-textfield')
  );
};

export default PortalTextArea;
