import React, {useContext} from 'react'
import { useState } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./coomon";
import {AccountContext} from "./accountContext"
import axios from 'axios';
import { Link } from 'react-router-dom';
function SignupForm() {
    const { switchToSignin } =useContext(AccountContext);

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpass] = useState("");

    const signup = ()=>{

        const config = {
            "name":name,
            "email":email,
            "password":password
        }

        axios.post('http://localhost:9000/adminRegister',config)
          .then(function (response) {
            console.log(response);
          })
    }
    // const [conpass, setconpass] = useState("");

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" value ={name} onChange={(event) =>{setname(event.target.value)}} placeholder ="Full Name" />
                <Input type="email" value={email} onChange={(event) =>{setemail(event.target.value)}} placeholder ="Email" />
                <Input type="password" value={password} onChange={(event) =>{setpass(event.target.value)}} placeholder ="Password" />
                {/* <Input type="password" value={conpass} onChange={(event) =>{setconpass(event.target.value)}} placeholder =" Confirm Password" /> */}
               
            </FormContainer>
                <Link to="./admin">
                <SubmitButton type="submit" onClick={signup}>SignUp</SubmitButton>
                </Link>
                <MutedLink href="#">Already Have an account? <BoldLink href ="#" onClick= {switchToSignin}>SignIn</BoldLink></MutedLink>
        </BoxContainer>
    ) 
}

export default SignupForm;
