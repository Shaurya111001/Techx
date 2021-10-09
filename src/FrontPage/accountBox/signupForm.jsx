import React, {useContext} from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./coomon";
import {AccountContext} from "./accountContext"
import axios from 'axios';
function SignupForm() {
    const { switchToSignin } =useContext(AccountContext);
    const signup = () => {
        axios.post()
    }
    const [email, setemail] = useState("")
    const [password, setpass] = useState("")

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" value ={email} placeholder ="Full Name" />
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
