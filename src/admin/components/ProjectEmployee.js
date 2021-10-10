import styled from 'styled-components';
import {useState,useEffect} from'react'
import AvatarImage from '../assets/avatarImage2.jpg';
import AvatarImage2 from '../assets/avatarImage3.jpg';
import { cardShadow, hoverEffect, themeColor } from '../utils';
import { Link } from 'react-router-dom';
import axios from 'axios';
function ProjectEmployee({employee}) {  

    
  const [tasks,setTasks] = useState([])  ;

  const getTasks = () => {
    
  axios.get(`http://localhost:9000/tasks/${employee.email}`).then((res)=>{
    console.log(res)
    if(tasks.length === 0) ;
    else{
      setTasks(res.data.data.tasks)
    }
  })
  }

  useEffect(() => {
    getTasks() 
  }, [])

  return (
    <Project>
      <Avatar>
        <img src={AvatarImage2} alt='' />
      </Avatar>
      <Detail>
        <Title>{employee.name}</Title>
        <SubTitle> {tasks.length === 0 ? 'No ongoing tasks' : tasks[0]} </SubTitle>
      </Detail>
    </Project>
  );
}

const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;
const Avatar = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;
const Detail = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h3`
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;
const SubTitle = styled.h5`
  font-weight: 300;
`;
const AllProjects = styled.h5`
  text-align: end;
  color: ${themeColor};
  cursor: pointer;
`;

export default ProjectEmployee;
