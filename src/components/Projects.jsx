import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  @media screen and (max-width: 768px) {
    align-items: flex-start;
  }
`;
const Container = styled(Div)`
  box-sizing: border-box;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 2rem;
  padding: 0 0.5rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
`;

const TitleBox = styled.div`
  border-radius: 8px;
  padding: 0.5rem 1.2rem;
  margin-bottom: 0.8rem;
  text-align: center;
  background-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
  @media screen and (min-width: 768px) {
    text-align: left;
    cursor: default;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }
`;
const ProjectCard = styled(Link)`
  width: 100%;
  background-color: #fff;
  color: #000;
  border-radius: 8px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  overflow: hidden;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    height: 380px;
    &:hover > div > img {
      transform: scale(1.2, 1.2);
      transition-duration: 0.5s;
    }
  }
  @media screen and (min-width: 1225px) {
    height: 360px;
  }
`;
const ProjectImgBox = styled.div`
  height: 200px;
  overflow: hidden;
`;
const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease 0s;
`;
const InfoContainer = styled.div`
  padding: 20px;
  text-align: left;
  @media screen and (min-width: 768px) {
    padding-top: 0;
  }
`;
const ProjectTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 6px 0px;
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
const ProjectDesc = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    overflow-y: hidden;
  }
`;
const ProjectStackBox = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const ProjectStack = styled.li`
  font-size: 14px;
  list-style: none;
  margin-top: 2px;
  margin-right: 6px;
  padding: 4px 6px;
  border: 1px solid #000;
  border-radius: 12px;
  &::before {
    content: "#";
  }
`;

export default function Projects(props) {
  const handleScrollAnchor = () => {
    sessionStorage.setItem("anchor", window.scrollY);
  };
  const data = props.projects;

  // 프로젝트를 담을 div
  const ProjectCards = (pj, index) => (
    <ProjectCard
      key={index}
      to={`projects/${pj.id}`}
      state={{ pj }}
      onClick={handleScrollAnchor}
    >
      <ProjectImgBox>
        <ProjectImg src={pj.img} alt={`${pj.title} screenshot image`} />
      </ProjectImgBox>
      <InfoContainer>
        <ProjectTitle>{pj.title}</ProjectTitle>
        <div>
          <ProjectDesc>{pj.desc}</ProjectDesc>
        </div>
        <ProjectStackBox>
          {pj.stack &&
            pj.stack.map((stack, index) => (
              <ProjectStack key={index}>{stack}</ProjectStack>
            ))}
        </ProjectStackBox>
      </InfoContainer>
    </ProjectCard>
  );

  const projectData = data.projects.map((pj, index) => ProjectCards(pj, index));

  return (
    <Div>
      <TitleBox>
        <h2>프로젝트</h2>
      </TitleBox>
      <Container>{projectData}</Container>
    </Div>
  );
}
