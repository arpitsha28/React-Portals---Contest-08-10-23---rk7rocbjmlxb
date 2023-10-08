import React from 'react';
import  ReactDOM  from 'react-dom';

//complete this function using portals
const PortalButton = ({ onClick }) => {
  const btnRef = useRef(null);

  const handleClick = () => {
    const text = document.getElementById("input").value;
    onClick(text);
  };
  return ReactDOM.createPortal(
    <button id="button" onClick={handleClick}>
      Click
    </button>,
    btnRef.current
  );
};
export default PortalButton;


//portal-button id will be used here for portal purpose
