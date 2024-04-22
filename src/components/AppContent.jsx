import React from 'react'
import styled from "styled-components";
import AboutMe from './AboutMe';
import Projects from './Projects';
import { useOutletContext } from 'react-router-dom';
import AboveTheFold from './AboveTheFold';


const Container = styled.section`
    margin: 0 8px;
    /* padding: 50px 0; */
    min-height: 100vh;
    display: flex;
    
    justify-content: center;
    align-items: center;
    
    @media screen and (min-width: 768px){
     /* padding: 50px 50px; */
    }
    @media screen and (min-width: 1200px){
        width: 1200px;
        margin: 0 auto;
    }
`;

export default function AppContent() {
    const data = useOutletContext();
    const about = data.about;
    const projects = data.projects;
    return(
        <div>
            <Container><AboveTheFold/></Container>
            <Container><AboutMe props={about}/></Container>
            <Container><Projects props={projects}/></Container>
        </div> 
    )
}