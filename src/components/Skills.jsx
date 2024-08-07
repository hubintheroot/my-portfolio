import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  & > :last-child {
    margin-bottom: 0;
  }
`;
const SkillBox = styled.div`
  border: 1px solid #000;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 1rem;
`;
const Title = styled.h2`
  margin: 0.5rem 0 1rem;
`;
const LevelContainer = styled.ul`
  margin: 0;
  padding: 0;
  & > :last-child {
    padding-bottom: 0;
  }
`;
const Level = styled.li`
  list-style: none;
  padding-bottom: 0.5rem;
`;
const SubTitleBox = styled.div`
  border-radius: 8px;
  padding: 0.5rem 1.2rem;
  margin-bottom: 0.8rem;
  background-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
    cursor: default;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }
`;

export default function Skills(props) {
  const skills = props.skills;
  const contents = skills.frontend.map((skill) => {
    const level = skill.level.map((lv, i) => <Level key={i}>{lv}</Level>);
    return (
      <SkillBox key={skill.key}>
        <Title>{skill.name}</Title>
        <LevelContainer>{level}</LevelContainer>
      </SkillBox>
    );
  });

  return (
    <Container>
      <SubTitleBox>
        <h2>기술스택</h2>
      </SubTitleBox>
      {contents}
    </Container>
  );
}
