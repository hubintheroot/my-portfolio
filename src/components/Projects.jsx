import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;
const StyledContainer = styled(StyledDiv)`
    @media screen and (min-width: 768px){
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 380px;
        grid-gap: 30px;
    }
`
const StyledTitle = styled.h2`
    font-size: 32px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
`;
const StyledProjectCard = styled.div`
    background-color: #fff;
    color: #000;
    border-radius: 8px;
    margin-bottom: 40px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    overflow: hidden;
    @media screen and (min-width: 768px){
        max-width: 400px;
        min-height: 380px;
        max-height: 380px;
        margin: 0;
        &:hover > img{
            max-height: 50px;
            transition: max-height .4s linear;
        }
        &:hover > div > p {
            max-height: 205px;
            height: 205px;
            transition: height .4s linear;
        }
    }
`;
const StyledProjectImg = styled.img`
    width: 100%;
    max-height: 150px;
    height: 150px;
    object-fit: cover;
`;
const StyledInfoContainer = styled.div`
    padding: 20px;
    @media screen and (min-width: 768px){
        padding-top: 0;
    }
`;
const StyledProjectTitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    @media screen and (min-width: 768px){
        margin: 6px 0px;
    }
`;
const StyledProjectDesc = styled.p`
    font-size: 16px;
    margin-bottom: 15px;
    @media screen and (min-width: 768px){
        max-height: 105px;
        height: 105px;
        overflow-y: hidden;
    }
`;
const StyledProjectButton = styled.button`
    width: 100%;
    padding: 10px;
    white-space: pre-wrap;
    text-align: center;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
`;
const openURL = (url) => {
    window.open(url, '_blank');
}
// 프로젝트를 담을 div
const ProjectCard = (pj, index) => (
    <StyledProjectCard key={index}>
        <StyledProjectImg
            src={`${process.env.PUBLIC_URL}/public_assets/projectImgs/${pj.img}.jpg`}
            alt={`${pj.title} screenshot image`}
        />
        <StyledInfoContainer>
            <StyledProjectTitle>{pj.title}</StyledProjectTitle>
            <StyledProjectDesc className='description'>{pj.desc}</StyledProjectDesc>
            <StyledProjectButton onClick={() => {openURL(pj.git);}}>GitHub</StyledProjectButton>
        </StyledInfoContainer>
    </StyledProjectCard>);


export default function Projects({props}){
    const projects = props.projects.map((pj, index) => ProjectCard(pj, index));
    return(
        <StyledDiv>
            <StyledTitle>{props.id}</StyledTitle>
            <StyledContainer>
                {projects}
            </StyledContainer>
        </StyledDiv>
    )
}