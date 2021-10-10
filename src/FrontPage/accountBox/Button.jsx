import React from 'react'
import styled from 'styled-components'
import {useState} from "react";
import Popup from "./modal";
import AccountBox from "./index";
function Button() {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
    setIsOpen(!isOpen);
    }
    return (
        <div>
        <Div>
            <button onClick ={togglePopup}>Login</button>
        </Div>
        <div>
        {isOpen && <Popup
        content={<>
            <AccountBox/>
        </>}
        handleClose={togglePopup}
        />}
        </div>
    </div>
    )
}

export default Button

const Div = styled.div`

margin:0;
padding:0;
background-color:black;
padding-top:1em;
padding-bottom:1em;









button {
    position: relative;
    text-align: center;
background-color:black;
    width:250px;
    padding:20px;
    font-size:35px;
    color:#15f4ee;
    font-family: poppins;
    font-weight: 400;
    border: 5px solid;
    text-transform:uppercase;
    Letter-spacing:10px;
    cursor:pointer;
    border-radius: 100px;
    transition:1.5s;
    &:hover {
        box-shadow: 0 5px 50px 0 #15f4ee inset, 0 5px 50px 0 #15f4ee,
        0 5px 50px 0 #15f4ee inset, 0 5px 50px 0 #15f4ee;
        text-shadow: 0 0 5px #15f4ee,0 0 5px #15f4ee;
    }
}`
