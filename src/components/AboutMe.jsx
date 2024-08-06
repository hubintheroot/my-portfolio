import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  text-align: left;
  white-space: pre-line;
  margin: 0;
  @media screen and (max-width: 768px) {
    align-items: flex-start;
  }
`;
const StyledTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin: 0 0 20px;
`;
const Desc = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: rgb(156 163 175);
  max-width: 750px;
  word-break: keep-all;
  margin: 0;
`;

export default function AboutMe(props) {
  // const descript = props.desc.map((text, index) => (
  //   <StyledDesc key={index}>{text}</StyledDesc>
  // ));
  const data = props.about;

  return (
    <Container>
      <div>
        <StyledTitle>{data.title}</StyledTitle>
      </div>
      <div>
        <Desc>{data.desc}</Desc>
      </div>
    </Container>
  );
}
