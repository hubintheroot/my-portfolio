import styled, { keyframes } from 'styled-components';
import { DiGithubFull } from "react-icons/di";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
`;
const StyledTitle = styled.h2`
    font-size: 32px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
`;
const StyledDesc = styled.p`
    font-size: 18px;
    line-height: 1.5;
    color: #555;
    max-width: 750px;
    white-space: pre-line;
`;
const ShakeAnimation = keyframes`
    0%, 100% {
        transform: translate(0,0);
    }
    25% {
        transform: translate(2px, 2px);
    }
    50% {
        transform: translate(2px, -2px);
    }
    75% {
        transform: translate(-2px, 2px);
    }
`;
const GitIcon = styled(DiGithubFull)`
    background-color: #000;
    color: #fff;
    padding: 0 16px;
    border-radius: 5px;
    @media screen and (min-width: 768px){
        &:hover {
            animation: ${ShakeAnimation} .5s ease-in-out infinite;
            color: #ffd700;
            transition: color .5s ease-in;
        }
    }
`;
const StyledA = styled.a`
    margin-top: 8px;
    height: 64px;
`;

export default function AboutMe({props}){
    const descript = props.desc.map((text, index) => <StyledDesc key={index}>{text}</StyledDesc>)
    return(
        <StyledDiv>
            <StyledTitle>{props.title}</StyledTitle>
            {descript}
            <StyledA href={props.github} target='blank'>
                <GitIcon size='64'/>
            </StyledA>
            
        </StyledDiv>
    )
}