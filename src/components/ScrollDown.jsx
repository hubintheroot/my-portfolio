import styled from "styled-components";

const ScrollDownBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.div`
  width: ${(props) => (props.$width ? props.$width + "px" : "50px")};
  height: ${(props) => (props.$height ? props.$height + "px" : "90px")};
  border: 3px solid #333;
  border-radius: 60px;
  position: relative;
  &::before {
    content: "";
    width: ${(props) => (props.$innerSize ? props.$innerSize + "px" : "12px")};
    height: ${(props) => (props.$innerSize ? props.$innerSize + "px" : "12px")};
    position: absolute;
    top: ${(props) => (props.$topHeight ? props.$topHeight + "px" : "10px")};
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    border-radius: 50%;
    opacity: 1;
    animation: wheel 1.6s infinite;
    -webkit-animation: wheel 1.6s infinite;
  }
  @keyframes wheel {
    to {
      opacity: 0;
      top: ${(props) => (props.$toHeight ? props.$toHeight + "px" : "60px")};
    }
  }
  @-webkit-keyframes wheel {
    to {
      opacity: 0;
      top: ${(props) => (props.$toHeight ? props.$toHeight + "px" : "60px")};
    }
  }
`;
const H3 = styled.h3`
  margin: 0;
  padding: 0.5rem 0 0;
  text-align: center;
  font-size: ${(props) =>
    props.$textSize ? props.$textSize + "px" : "1.1rem"};
  font-weight: 600;
  word-break: keep-all;
`;

export default function ScrollDown(props) {
  const width = props.width ? props.width : 25;
  const height = (props.width / 5) * 9;
  const innerSize = (props.width / 25) * 6;
  const toHeight = (height / 3) * 2;
  const topHeight = height / 9;
  const textSize = props.textSize ? props.textSize : 16;
  const text = props.text ? props.text : "Scroll Down";
  return (
    <ScrollDownBox>
      <Icon
        $width={width}
        $height={height}
        $innerSize={innerSize}
        $toHeight={toHeight}
        $topHeight={topHeight}
      />
      <H3 $textSize={textSize}>{text}</H3>
    </ScrollDownBox>
  );
}
