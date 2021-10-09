
import styled from 'styled-components';
export const BoxContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;
`;

export const FormContainer = styled.form`
width:100%;
display: flex;
flex-direction:column;
box-shadow:0px 0px 2.5px rgba(15, 15, 15, 0.19);
`

export const MutedLink = styled.a`
font-size: 12px;
color: rgba(200, 200, 200, 0.8);
font-weight:500;
text-decoration:none;
margin:20px;`
export const BoldLink = styled.a`

color:#00d4ff;
`

export const Input =styled.input`
width:100%;
height:45px;
outline:none;
border: 1px solid rgba(200, 200, 200, 0.3);
padding: 0px 10px;
border-bottom: 1.4px solid transparent;
transition: all 200ms ease-in-out;
&:placeholder {
    color: rgba(200, 200, 200, 1);
}

&:not(:last-of-type) {
     border-bottom:1.5px solid rgba(200, 200, 200, 0.4);
}

 &:focus {
     outline: none;
     border-bottom: 2px solid #00d4ff;
 }
`

export const SubmitButton =styled.button`
width:100%;
padding: 11px 40%;
color: white;
font-size: 12px;
font-weight: 600;
border: none;
border-radius:110px 100px 100px 100px;
cursor:pointer;
transition: all 240ms ease-in-out;
background: rgb(18,10,163);
background: linear-gradient(90deg, rgba(18,10,163,1) 0%, rgba(0,211,255,1) 60%);
margin-top:10px;
&:hover {
    filter: brightness(1.03)
}
`