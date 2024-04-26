import styled from 'styled-components';


const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    @media screen and (max-width: 768px){
        align-items: flex-start;
    }
`;
const StyledTitle = styled.h2`
    font-size: 32px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
`;
const StyledDesc = styled.p`
    font-size: 18px;
    line-height: 1.8;
    color: #555;
    max-width: 750px;
    white-space: pre-line;
    word-break: keep-all;
    
`;

export default function AboutMe({props}){
    const descript = props.desc.map((text, index) => <StyledDesc key={index}>{text}</StyledDesc>)
    return(
        <StyledDiv>
            <StyledTitle>{props.title}</StyledTitle>
            {descript}            
        </StyledDiv>
    )
}