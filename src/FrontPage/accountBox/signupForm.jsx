import React, {useContext} from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./coomon";
import {AccountContext} from "./accountContext"
function SignupForm() {
    const { switchToSignin } =useContext(AccountContext);
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder ="Full Name" />
                <Input type="email" placeholder ="Email" />
                <Input type="password" placeholder ="Password" />
                <Input type="password" placeholder =" Confirm Password" />
               
            </FormContainer>
                <SubmitButton type="submit">SignUp</SubmitButton>
                <MutedLink href="#">Already Have an account? <BoldLink href ="#" onClick= {switchToSignin}>SignIn</BoldLink></MutedLink>
        </BoxContainer>
    ) 
}

export default SignupForm;
