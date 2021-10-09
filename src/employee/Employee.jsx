import React from 'react'
import styled from 'styled-components'
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
function Employee() {
    return (
        <Div>
            
            <Sidebar />
           
            
            <MainContent />
            
            
        </Div>
    )
}

export default Employee
const Div = styled.div`
display: flex;
  height: 100vh;
  width:100vw;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }`

