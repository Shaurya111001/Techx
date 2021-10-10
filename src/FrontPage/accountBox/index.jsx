import React, { useState} from "react";
import styled from 'styled-components'
import LoginForm from './loginForm'
import { motion } from "framer-motion"
import  {AccountContext} from "./accountContext";
import SignupForm from "./signupForm";
function AccountBox(props) {
   const [isExpanded, setExpanded] = useState(false);
   const [active, setActive] =useState("signin");
   
   
   const playExpandingAnimation =() => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);

        }, expandingTransition.duration * 1000 - 1500);
   };

   const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
        setActive("signup");
    }, 400);
    
};

const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
        setActive("signin");
    }, 400);
    
};

   const contextValue = {switchToSignup, switchToSignin};
   return (
       <AccountContext.Provider value ={contextValue}>
       <BoxContainer>
           <TopContainer>
              <BackDrop initial = {false} animate={isExpanded ? "expanded" : "collapsed"} variants={backdropvariants} transition={expandingTransition} />
              { active === "signin" && <HeaderContainer>
                  <HeaderText>Welcome</HeaderText>
                  <HeaderText>Back</HeaderText>
                  <SmallText>Please Sign In to Continue</SmallText>
                  
              </HeaderContainer> }
              { active === "signup" && <HeaderContainer>
                  <HeaderText>Create</HeaderText>
                  <HeaderText>Account</HeaderText>
                  <SmallText>Please Sign Up to Continue</SmallText>
                  
              </HeaderContainer> }
           </TopContainer>
           <InnerContainer>
              {active === "signin" && <LoginForm />}
              {active === "signup" && <SignupForm />}

              
           </InnerContainer>
       </BoxContainer>
       </AccountContext.Provider>
    )
}

export default AccountBox

const BoxContainer = styled.div`
width:380px;
min-height:550px;
display: flex;
flex-direction: column;
border-radius:19px;
margin-top:50px;
margin-left: 30px;
background-color: white;
box-shadow:0 0 2px rgba(15, 15, 15, 0.28);
position:relative;
overflow:hidden;
`;
const TopContainer = styled.div`
width:100%;
height:250px;
display:flex;
flex-direction:column;
justify-content:flex-end;
padding: 0 1.8em;
padding-bottom:5em;`;


const BackDrop = styled(motion.div)`
width:160%;
height:550px;
position:absolute;
display:flex;
flex-direction:column;
border-radius:50%;
transform:rotate(60deg);
top:-290px;
left:-70px;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 3%, rgba(19,105,188,1) 44%, rgba(0,212,255,1) 100%);
`

const HeaderContainer =styled.div`
width:100%;
display: flex;
flex-direction: column;
`
const HeaderText = styled.h2`
font-size: 30px;
font-weight:600;
line-height:1.24;
color: #fff;
z-index:10;
margin:0;

`
const SmallText =styled.h5`
color:white; 
font-weight:500;
font-size:11px;
z-index:10;
margin:0;
margin-top:8px;
`
const InnerContainer = styled.div`
width:100%;
display: flex;
flex-direction: column;
padding:0 1.3em;
`
const backdropvariants = {
    expanded: {
        width: "233%",
        height:"1050px",
        borderRadius: "20%",
        transform:"rotate(60deg)",
    },
    collapsed: {
        width:"160%",
        height:"600px",
        borderRadius:"50%",
        transform:"rotate(60deg)",
    },
};

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
};
