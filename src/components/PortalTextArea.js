
import ReactDOM from 'react-dom';

const PortalTextArea = ({ textareaRef }) => {
  return ReactDOM.createPortal(
    <div>
      <textarea id="textarea" ref={textareaRef} placeholder="Text will appear here..."></textarea>
    </div>,
    document.getElementById('portal-textfield')
  );
};

export default PortalTextArea;
