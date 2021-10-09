import './front.css';
import React from 'react';
import {useState, useEffect} from 'react';
import { Suspense} from 'react';
import Popup from "./accountBox/modal";
import AccountBox from "./accountBox/index";
import AnimationCanvas from "./animation";

function Front() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="Front">
      <header>
        <button onClick = {togglePopup}>LOGIN/REGISTER</button>
        </header>
      <body>
       <div className="anim">
          <Suspense fallback={<div>Loading...</div>}>
            <AnimationCanvas />
          </Suspense>
    </div> 
    <div>
    {isOpen && <Popup
      content={<>
        <AccountBox/>
      </>}
      handleClose={togglePopup}
    />}
  </div>
    </body>
    </div>

  );
}
export default Front;