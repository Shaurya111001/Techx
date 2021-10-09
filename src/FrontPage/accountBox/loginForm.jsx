import React, {useContext} from 'react'
import axios from 'axios';
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./coomon";
import {AccountContext} from "./accountContext"
function LoginForm() {

    const { switchToSignup } =useContext(AccountContext);
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder ="Email" />
                <Input type="password" placeholder ="Password" />
               
            </FormContainer>
                <MutedLink href="#">Forget your password</MutedLink>
                <SubmitButton type="submit">SignIn</SubmitButton>
                <MutedLink href="#">Don't have account? <BoldLink href ="#" onClick= {switchToSignup}>SignUp</BoldLink></MutedLink>
        </BoxContainer>
    )
}

export default LoginForm;
