import styled from 'styled-components';
import AboutMe from './AboutMe';
import MySkills from './MySkills';
import Projects from './Projects';

const StyledDiv = styled.section`
    margin: 0 8px;
    padding: 50px 0;
    @media screen and (min-width: 768px){
     padding: 50px 50px;
    }
`;

const content = (props) => {
    if(props.id === 'about'){
        return <AboutMe props={props}/>
    } else if(props.id === 'skills'){
        return <MySkills props={props}/>
    } else if(props.id === 'projects'){
        return <Projects props={props}/>
    }
}

export default function Container({props}){
    
    return(
        <StyledDiv id={props.id}>
            {content(props)}
        </StyledDiv>
    )
}