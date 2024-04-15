import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;
const Container = styled(Div)`
    @media screen and (min-width: 768px){
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 1fr;
        grid-gap: 30px;
    }
`
const Title = styled.h2`
    font-size: 32px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
`;
const ProjectCard = styled.a`
    width: 100%;
    background-color: #fff;
    color: #000;
    border-radius: 8px;
    margin-bottom: 40px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    overflow: hidden;
    text-decoration: none;
    @media screen and (min-width: 768px){
        margin: 0;
        height: 380px;
        &:hover > div > img{
            transform: scale(1.2, 1.2);
            transition-duration: 0.5s;
        }
    }
    @media screen and (min-width: 1225px){
        height: 360px;
    }
`;
const ProjectImgBox = styled.div`
    height: 200px;
    overflow: hidden;
`
const ProjectImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease 0s;
`;
const InfoContainer = styled.div`
    padding: 20px;
    text-align: left;
    @media screen and (min-width: 768px){
        padding-top: 0;
    }
`;
const ProjectTitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    @media screen and (min-width: 768px){
        margin: 6px 0px;
    }
`;
const ProjectDesc = styled.p`
    font-size: 16px;
    margin-bottom: 15px;
    @media screen and (min-width: 768px){
        overflow-y: hidden;
    }
`;
const ProjectStackBox = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const ProjectStack = styled.li`
    font-size: 14px;
    list-style: none;
    margin-top: 2px;
    margin-right: 6px;
    padding: 4px 6px;
    border: 1px solid #000;
    border-radius: 12px;
    &::before{
        content: '#';
    }
    
`;
// 프로젝트를 담을 div
const ProjectCards = (pj, index) => (
    <ProjectCard key={index} href={pj.git} target='_blank'>
        <ProjectImgBox>
            <ProjectImg
                src={`/public_assets/projectImgs/${pj.img}.jpg`}
                alt={`${pj.title} screenshot image`}
            />
        </ProjectImgBox>
        <InfoContainer>
            <ProjectTitle>{pj.title}</ProjectTitle>
            <div><ProjectDesc>{pj.desc}</ProjectDesc></div>
            <ProjectStackBox>{pj.stack && pj.stack.map((stack) => <ProjectStack>{stack}</ProjectStack>)}</ProjectStackBox>
        </InfoContainer>
    </ProjectCard>);


export default function Projects({props}){
    const projects = props.projects.map((pj, index) => ProjectCards(pj, index));
    return(
        <Div>
            <Title>{props.id}</Title>
            <Container>
                {projects}
            </Container>
        </Div>
    )
}