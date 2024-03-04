import styled, { keyframes } from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;
const StyledTitle = styled.h2`
    font-size: 32px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
`;
const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
    width: 100%;
    margin-bottom: 20px;

    @media screen and (min-width: 490px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 30px;
    }
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

const StyledSkillName = styled.span`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
`;

const StyledIcon = styled.img`
    width: 128px;
    height: 128px;
`;

const StyledIconBox = styled.div`
    @media screen and (min-width: 768px){
        &:hover {
            animation: ${ShakeAnimation} .5s ease-in-out infinite;
        }
    }
`;

export default function MySkills({props}){
    const mySkills = props.mySkills.map((skill, index) => 
        <StyledIconBox key={index}>
            <div>
                <StyledIcon src={skill.img}></StyledIcon>
            </div>
            <div>
                <StyledSkillName>{skill.name}</StyledSkillName>
            </div>
        </StyledIconBox>
    );
    const skillContainer = <StyledContainer>
        {mySkills}
    </StyledContainer>;


    return(
        <StyledDiv>
            <StyledTitle>{props.title}</StyledTitle>
            {skillContainer}
        </StyledDiv>
    )
}