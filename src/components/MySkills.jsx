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
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
`;
const StyledSkillName = styled.span`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
`;
const StyledProgressBar = styled.div`
    height: 20px;
    background-color: #f2f2f2;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    border-radius: 10px;
    overflow: hidden;
`;
const ProgressAnimation = (percent) => keyframes`
    from { width: 0%; }
    to { width: ${percent}%; }
`;
const StyledProgress = styled(StyledProgressBar)`
    width: ${props => `${props.$percent}%` || 0};
    background-color: ${props => props.$bgc || '#3498db'};
    display: flex;
    align-items: center;
    justify-content: end;
    animation: ${props => ProgressAnimation(props.$percent)} 5s ease-out;
`;
const StyledPercentage = styled.span`
    font-size: 18px;
    font-weight: bold;
    padding-right: 5px;
    ${props => props.$isDark ? 'color: #fff' : 'color: #000' || 'color: #000'};
`;
const StyledProgressBarInfoDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const StyledProgressBarInfo = styled.span`
    font-size: 12px;
    font-weight: 700;
`;

export default function MySkills({props}){
    const mySkills = props.mySkills.map((skill, index) => 
        <StyledContainer key={index}>
            <StyledSkillName>{skill.name}</StyledSkillName>
            <StyledProgressBar>
                <StyledProgress $percent={skill.percent} $bgc={skill.color}>
                    <StyledPercentage $isDark={skill.isDark}>
                        {skill.percent} %
                    </StyledPercentage>
                </StyledProgress>
            </StyledProgressBar>
        </StyledContainer>
    );
    return(
        <StyledDiv>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledProgressBarInfoDiv>
                <StyledProgressBarInfo>경험있는</StyledProgressBarInfo>
                <StyledProgressBarInfo>익숙한</StyledProgressBarInfo>
            </StyledProgressBarInfoDiv>
            {mySkills}
        </StyledDiv>
    )
}