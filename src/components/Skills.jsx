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

export default function Skills(props) {
  const skills = props.skills;
  const contents = skills.frontend.map((skill, i) => {
    const level = skill.level.map((lv, i) => <Level key={i}>{lv}</Level>);
    return (
      <SkillBox key={i}>
        <Title>{skill.name}</Title>
        <LevelContainer>{level}</LevelContainer>
      </SkillBox>
    );
  });

  return <Container>{contents}</Container>;
}
