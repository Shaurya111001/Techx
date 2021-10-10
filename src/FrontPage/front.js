import './front.css';
import React from 'react';
import {useState, useEffect} from 'react';
import { Suspense} from 'react';
import AnimationCanvas from "./animation";
import Button from './accountBox/Button';

function Front() {
  return (
    <div className="Front">
      <header>
        <Button />
        </header>
      <body>
       <div className="anim">
          <Suspense fallback={<div>Loading...</div>}>
            <AnimationCanvas />
          </Suspense>
    </div> 
    </body>
    </div>

  );
}
export default Front;