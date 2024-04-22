import styled from "styled-components";
import ScrollDown from "./ScrollDown";
import { useState } from "react";

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
    & > h1 {
        margin: 0;
        padding: 0;
        font-weight: 700;
        font-size: 5rem;
    }
`;
const IconBox = styled.div`
    width: 10vw;
    margin: 0 auto;
    position: absolute;
    bottom: 2vh;
    left: calc(50% - 5vw);
`;
export default function AboveTheFold() {
    console.log('above the fold is online.');
    const [size, setSize] = useState({ // eslint-disable-line no-unused-vars
        width: 25,
        textSize: 16
    });

    return (
        <Container>
            <IntroBox>
                <h1>Developer Portfolio</h1>
            </IntroBox>
            <IconBox>
                <ScrollDown width={size.width} textSize={size.textSize}/>
            </IconBox>
        </Container>
    )
}