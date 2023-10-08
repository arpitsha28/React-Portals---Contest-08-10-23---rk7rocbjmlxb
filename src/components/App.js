import React ,{useState, useRef} from 'react'
import '../styles/App.css';
import PortalButton from './PortalButton.js';
import PortalTextArea from './PortalTextArea.js';

//complete the function 
const App = () => {
  const [inputText,setInputText] = useState('');

  const handleBtnClick = (e)=>{
    setInputText(e);
  }


  return (
    
    <div id="main">
      <input id="input" value={inputText} ></input><br/>
      <PortalButton buttonclick={handleBtnClick} /><br/>
      <PortalTextArea value={inputText}/>
    </div>
  )
}


export default App;
