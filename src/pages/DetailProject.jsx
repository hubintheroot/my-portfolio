import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components";


const Container = styled.article`
    width: 60rem;
    margin: 120px auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    & > div:not(:first-of-type){
        /* background-color: antiquewhite; */
        margin-top: 5rem;
    }

    @media screen and (max-width: 768px) {
        width: 100vw;
        box-sizing: border-box;
        padding: 0 1.5rem;
        margin: 5rem 0;
    }
`;
const UnderConstruction = styled.article`
    display: none;
`;
const Div = styled.div`
    margin-top: ${(props) => props.$demo ? '7rem' : '.8rem'};
    text-align: ${(props) => props.$textalign};

    @media screen and (max-width: 768px){
      margin-top: ${(props) => props.$demo ? '3rem' : '0'};
    }
`;
const ButtonContainer = styled(Div)`
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
    }
`
const Title = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    text-align: left;
    margin: 0;

    @media screen and (max-width: 768px){
      padding: 1rem 0;
    }
`;
const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0;
    gap: 0.5rem;
    margin-top: ${(props) => props.$marginTop ? null : '2rem'};

    @media screen and (max-width: 768px){
      gap: 0.3rem;
    }
`;
const Li = styled.li`
    font-size: 14px;
    list-style: none;
    /* margin-top: 2px; */
    /* margin-right: 6px; */
    padding: 4px 6px;
    color: ${(props) => props.$color ? '#2a7fa7' : null};
    border: 1px solid;
    border-color: ${(props) => props.$borderColor ? '#4ac0f7' : '#000'};
    border-radius: ${(props) => props.$borderRadius ? '2rem' : '12px'};
    &::before{
        content: '#';
    }
`;
const A = styled(Link)`
    border-radius: 1.2rem;
    padding: .8rem 1.4rem;
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    background-color: #000;
    box-sizing: border-box;
    margin-left: ${(props) => props.$marginLeft ? props.$marginLeft + 'rem' : null};
    &:hover {
        background-color: rgba(0,0,0,.5);
        transition: background-color .3s;
    }

    @media screen and (max-width: 768px){
      margin: 1rem 0 0;
      border-radius: 5rem;
    }
`;
const ImgBox = styled.div`
    height: fit-content;
`;
const Img = styled.img`
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 0px 3px;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 768px){
      border-radius: 2rem;
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

        @media screen and (max-width: 768px){
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

    & > ul > li:last-child{
        display: flex;
        @media screen and (max-width: 768px){
            flex-direction: column;
            margin-bottom: 0;
            & > ul {
                padding: 1rem 0.5rem 0;
            }
        }
    }
`;
const SubTitle = styled.h4`
    font-weight: 600;
    font-size: 1.8rem;
    padding: 0;
    margin: 0;
    `;
const DetailP = styled.p`
    white-space: pre-line;
    word-break: keep-all;
    font-size: 1.1rem;
    margin-top: 2rem;
    line-height: 2;
    @media screen and (max-width: 768px){
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
    margin: 8rem auto 4rem;
    width: fit-content;
    border-radius: 2rem;
    box-sizing: border-box;
    font-weight: 600;
    font-size: 1.4rem;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    &:hover {
        cursor: pointer;
        background-color: rgba(0,0,0,.5);
        transition: background-color .3s;
    }
`;
export default function ProjectInfo() {
    const props = useLocation();
    const navigate = useNavigate()
    const data = props.state;
    useEffect(() => {
        if (data === null){
            navigate('/forbidden');
        }
    }, [navigate, data]);

    if(data === null){
        return null;
    }

    const home = '/';

    const prettyStack = data.pj && data.pj.stack.map((stack, index) => <Li key={index}>{stack}</Li>);
    const useTools = data.pj && data.pj.workInfo.useTools.map((tool, index) => <Li key={index} $color={true} $borderColor={true} $borderRadius={true}>{tool}</Li>);
    

    return (
        <>
            <UnderConstruction>
                <div>
                    <h1>Under Construction</h1>
                    <p>모바일 화면을 준비중입니다.</p>
                </div>
            </UnderConstruction>
            <Container>
                <div>
                    <Title>{data && data.pj.title}</Title>
                    <Div $textalign='left'>{data && data.pj.desc}</Div>
                    <Ul>{prettyStack}</Ul>
                    <ButtonContainer $demo='true'>
                        <A to={data.pj.demo}>사이트 보러가기</A>
                        <A to={data.pj.git} $marginLeft='1'>코드 보러가기</A>
                    </ButtonContainer>
                </div>
                <ImgBox>
                    <Img src={data.pj.img} alt=""/>
                </ImgBox>
                <DetailInfoBox>
                    <SubTitle>개요</SubTitle>
                    <DetailP>{data.pj.descDetail}</DetailP>
                </DetailInfoBox>
                <DetailInfoBox>
                    <SubTitle>작업 정보</SubTitle>
                    <ul>
                        <li><Span>제작 기간</Span>{data.pj.workInfo.date}</li>
                        <li><Span>작업 영역</Span>{data.pj.workInfo.worked}</li>
                        <li><Span>사용 도구</Span><Ul $marginTop={true}>{useTools}</Ul></li>
                    </ul>
                </DetailInfoBox>
                <GoBackBtn to={home} onClick={() => { sessionStorage.setItem('gobackEvent', true)}}>목록으로 돌아가기</GoBackBtn>
                
            </Container>
        </>
    )
}