import styled from "styled-components";


const StyledNav = styled.nav`
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    display: flex;
    @media screen and (min-width: 768px){
        height: 60px;
    }
`;
const StyledA = styled.a`
    flex: 1;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    color: #333;
    font-weight: 700;
    ${props => props.$isLast ? 'border-right: 1px solid #ddd':''};

    @media screen and (min-width: 768px){
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        &:hover {
            color: #800020;
            font-size: 1.2em;
        }
        transition: color .3s ease-in-out, font-size .1s linear;
    }
`;

export default function AppNav({data}){
    const nav = () => {
        const maxLength = data.length - 1;
        const listA = data.map((a, index) => {
            if(index !== maxLength){
                return <StyledA href={a.link} key={index} $isLast='False'>{a.text}</StyledA>
            }else{
                return <StyledA href={a.link} key={index}>{a.text}</StyledA>
            }
        });
        return listA;
    };
    return(
        <StyledNav>
            {nav()}
        </StyledNav>
    );
}