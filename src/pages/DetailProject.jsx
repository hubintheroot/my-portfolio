import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.article`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  padding: 0 1.5rem;
  margin: 5rem 0 0;

  @media screen and (min-width: 768px) {
    width: 60vw;
    margin: 120px auto 0;
    & > div:not(:first-of-type) {
      margin-top: 5rem;
    }
  }
  @media screen and (min-width: 900px) {
    width: 96vw;
  }
`;
const Div = styled.div`
  margin-top: ${(props) => (props.$demo ? "2rem" : ".8rem")};
  text-align: ${(props) => props.$textalign};

  @media screen and (max-width: 768px) {
    margin-top: ${(props) => (props.$demo ? "3rem" : "0")};
  }
`;
const FirstViewBox = styled.div`
  margin-bottom: 2rem;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 5rem;
  }
`;
const ButtonContainer = styled(Div)`
  min-height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  margin: 0;

  @media screen and (max-width: 768px) {
    padding: 1rem 0;
  }
`;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0;
  gap: 0.3rem;
  margin-top: ${(props) => (props.$marginTop ? null : "2rem")};

  @media screen and (min-width: 768px) {
    gap: 0.5rem;
  }
`;
const Li = styled.li`
  font-size: 14px;
  list-style: none;
  padding: 4px 6px;
  color: ${(props) => (props.$textColor ? "#2a7fa7" : null)};
  border: 1px solid;
  border-color: ${(props) => (props.$borderColor ? "#4ac0f7" : "#000")};
  border-radius: ${(props) => (props.$borderRadius ? "2rem" : "12px")};
  &::before {
    content: "#";
  }

  @media screen and (min-width: 768px) {
    transition: all 0.6s;
    cursor: default;
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    &:hover {
      color: #fff;
      background-color: #4ac0f7;
    }
  }
`;
const A = styled(Link)`
  border-radius: 1.2rem;
  padding: 0.8rem 1.4rem;
  height: 4rem;
  display: inherit;
  justify-content: center;
  align-items: center;
  word-break: keep-all;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  background-color: #000;
  box-sizing: border-box;
  margin-right: ${(props) =>
    props.$marginRight ? props.$marginRight + "rem" : null};
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    transition: background-color 0.3s;
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;
const ImgBox = styled.div`
  height: fit-content;
  margin: 3rem 0;
  @media screen and (min-width: 768px) {
    margin: 0;
    max-width: calc(50vw - 5rem);
  }
`;
const Img = styled.img`
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 0px 3px;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  @media screen and (min-width: 768px) {
    border-radius: 0;
  }
`;
const DetailInfoBox = styled.div`
  text-align: left;
  & > ul {
    list-style: none;
    margin: 2rem 0 0;
    padding: 0;
    line-height: 2;
    font-size: 1.1rem;

    @media screen and (max-width: 768px) {
      margin-top: 1rem;
      & > li {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border: 0.1rem solid #000;
        border-radius: 1rem;
        margin-bottom: 1rem;
        & > span {
          border-bottom: 0.1rem solid #000;
        }
      }
    }
  }

  & > ul > li:last-child {
    display: flex;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      margin-bottom: 0;
      & > ul {
        padding: 1rem 0.5rem 0;
      }
    }
  }
`;
const SubTitle = styled.h4`
  font-weight: 400;
  font-size: 1.8rem;
  padding: 0;
  margin: 0;
`;
const DetailDesc = styled.p`
  white-space: pre-line;
  word-break: keep-all;
  font-size: 1.1rem;
  margin-top: 2rem;
  line-height: 2;
  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;
const Span = styled.span`
  display: inline-block;
  width: 7rem;
  font-weight: 600;
  font-size: 1.2rem;
  color: darkslategray;
`;
const GoBackBtn = styled(Link)`
  padding: 1rem 1.4rem;
  margin: 8rem auto 1rem;
  width: fit-content;
  border-radius: 2rem;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  background-color: #000;
  color: #fff;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    transition: background-color 0.3s;
  }

  @media screen and (min-width: 768px) {
    margin: 8rem auto 4rem;
  }
`;
const ProblemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
  & > :first-child {
    margin-top: 2rem;
    @media screen and (min-width: 768px) {
      margin-top: 0;
    }
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
`;
const ProblemBox = styled.div`
  background-color: #f3f3f3;
  & * {
    word-break: keep-all;
    text-align: left;
    white-space: pre-line;
  }
  & > div {
    padding: 0 1rem;
  }
  & > div.problem-experience {
    display: flex;
    justify-content: center;
    background-color: rgba(51, 51, 51, 1);
    color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  & > div {
    & > div.problem {
      color: rgb(248, 113, 113);
    }
    & > div.cause {
      color: rgb(245, 158, 11);
    }
    & > div.solution {
      color: rgb(96, 156, 250);
    }
  }
`;

export default function ProjectInfo() {
  const props = useLocation();
  const navigate = useNavigate();
  const data = props.state;
  useEffect(() => {
    if (data === null) {
      navigate("/forbidden");
    }
  }, [navigate, data]);

  if (data === null) {
    return null;
  } else {
    const home = "/";

    const useTools = data.pj.workInfo.useTools.map((tool, index) => (
      <Li
        key={index}
        $textColor={true}
        $borderColor={true}
        $borderRadius={true}
      >
        {tool}
      </Li>
    ));

    const problemSolution = data.pj.workInfo.worked.map((work, index) => (
      <ProblemBox key={index}>
        <div className="problem-experience">
          <h3>{work.mainProblem}</h3>
        </div>
        <div>
          <div className="problem">
            <h3>⛔ 문제</h3>
          </div>
          <div className="problem-desc">
            <p>{work.descProblem}</p>
          </div>
        </div>
        {work.descCause ? (
          <div>
            <div className="cause">
              <h3>🔍 원인</h3>
            </div>
            <div className="cause-desc">
              <p>{work.descCause}</p>
            </div>
          </div>
        ) : null}
        <div>
          {/* 해결과정 */}
          <div className="solution">
            <h3>✨ 해결 과정</h3>
          </div>
          <div className="solution-desc">
            <p>
              {work.myPlan}
              <br />
              {work.solution}
            </p>
          </div>
        </div>
        {work.learningPoint ? (
          <div>
            {/* 해결하고 얻은것 (있으면) */}
            <div>
              <h3>📚 배운 점</h3>
            </div>
            <p>{work.learningPoint}</p>
          </div>
        ) : null}
      </ProblemBox>
    ));

    return (
      <Container>
        <div>
          <Title>{data && data.pj.title}</Title>
          <Div $textalign="left">{data && data.pj.desc}</Div>
        </div>
        <FirstViewBox>
          <ImgBox>
            <Img src={data.pj.img} alt="" />
          </ImgBox>
          {/* DetailInfoBox를 IntroductBox */}
          <DetailInfoBox>
            <SubTitle>{data.pj.type} 프로젝트</SubTitle>
            {/* 어떤 프로젝트인지 (개인 프로젝트 or 팀 프로젝트) */}
            {/* 사용 기술을 여기에 */}
            {/* 간단한 프로젝트 설명. 이 프로젝트는 무엇을 위한 것인지 */}
            <DetailDesc>{data.pj.descDetail}</DetailDesc>
            <ButtonContainer $demo="true">
              {data.pj.demo ? (
                <A to={data.pj.demo} $marginRight="1">
                  홈페이지 바로가기
                </A>
              ) : null}
              <A to={data.pj.git}>Github</A>
            </ButtonContainer>
          </DetailInfoBox>
        </FirstViewBox>
        <DetailInfoBox>
          <SubTitle>작업 정보</SubTitle>
          <ul>
            <li>
              <Span>제작 기간</Span>
              {data.pj.workInfo.date}
            </li>
            <li>
              <Span>사용 기술</Span>
              <Ul $marginTop={true}>{useTools}</Ul>
            </li>
          </ul>
          {/* 수정중인 구간 */}
          <ProblemContainer>{problemSolution}</ProblemContainer>
          {/* 수정중인 구간 */}
        </DetailInfoBox>
        <GoBackBtn
          to={home}
          onClick={() => {
            sessionStorage.setItem("gobackEvent", true);
          }}
        >
          목록으로 돌아가기
        </GoBackBtn>
      </Container>
    );
  }
}
