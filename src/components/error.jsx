import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
`;
const InfomationBox = styled.div`
    height: 16rem;
    width: 32rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default function ErrorView(props){

    const navigate = useNavigate();
    const returnToHome = () => {
        navigate('/');
    };
    return (
        <Container>
            <InfomationBox>
                <h1>{props.code}</h1>
                <p>{props.info}</p>
                <button onClick={returnToHome}>홈으로 돌아가기</button>
            </InfomationBox>
        </Container>
    )
}