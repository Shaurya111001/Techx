import React, {useContext} from 'react'
import axios from 'axios';
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./coomon";
import {AccountContext} from "./accountContext"
import {useState} from 'react';
import { Link } from 'react-router-dom';
function LoginForm() {

    const { switchToSignup } =useContext(AccountContext);
    const [email, setemail] = useState("");
    const [password, setpass] = useState("");
    const sending = ()=>{
        axios.post('http://localhost:9000/adminsignin', {
            email,
            password
          })
          .then(function (response) {
            console.log(response);
          })
    }
    return (
        <BoxContainer>
            <FormContainer>
                <Input value={email} type="email" onChange={(event) =>{setemail(event.target.value)}} placeholder ="Email" />
                <Input value={password} type="password" onChange = {(event) =>{setpass(event.target.value)}} placeholder ="Password" />
               
            </FormContainer>
                <MutedLink href="#">Forget your password</MutedLink>
                <Link to="./employee">
                <SubmitButton type="submit" onClick={sending}>SignIn</SubmitButton>
                </Link>
                <MutedLink href="#">Don't have account? <BoldLink href ="#" onClick= {switchToSignup}>SignUp</BoldLink></MutedLink>
        </BoxContainer>
    )
}

export default LoginForm;
