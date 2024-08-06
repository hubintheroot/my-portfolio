import styled from "styled-components";
import ScrollDown from "./ScrollDown";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const IntroBox = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 5rem;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
const IconBox = styled.div`
  width: 10rem;
  margin: 0 auto;
  position: absolute;
  bottom: 2vh;
  left: calc(50% - 5rem);
  @media screen and (max-width: 768px) {
    z-index: -1;
  }
`;
export default function AboveTheFold(props) {
  const ScrollDownConfig = {
    width: 25,
    textSize: 16,
  };
  const title = props.title ? props.title : "Portfolio";

  return (
    <Container>
      <IntroBox>
        <Title>{title}</Title>
      </IntroBox>
      <IconBox>
        <ScrollDown
          width={ScrollDownConfig.width}
          textSize={ScrollDownConfig.textSize}
        />
      </IconBox>
    </Container>
  );
}
