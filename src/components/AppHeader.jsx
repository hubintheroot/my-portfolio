import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Header = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 8rem;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color .3s;
    &:hover{
        background-color: rgba(0, 0, 0, .2);
    }
    @media screen and (max-width: 768px){
        height: 4rem;
    }
`;
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    color: #000;
    
    @media screen and (max-width: 768px){
        padding: 0 2rem;
        border-bottom: 0.1rem solid #000;
        backdrop-filter: blur(0.5rem);
        -webkit-backdrop-filter: blur(0.5rem);
    }

    @media screen and (min-width: 1200px){
        width: 1200px;
        margin: 0 auto;

    }
`
const MenuBox = styled.div`
    list-style: none;
    display: flex;
    flex-direction: row;
`;
const BlackLink = styled(Link)`
    text-decoration: none;
    color: #000;
`;
const MenuItem = styled(BlackLink)`
    
`;
const Logo = styled(BlackLink)`
    font-weight: 800;
    font-size: 1.5rem;
    transition: color .5s;
    &:before{
        content: 'ps.G';
    }
    &:hover{
        cursor: pointer;
        color: rgba(0,0,0, .5);
    }
`;

export default function AppHeader() {

    return(
        <Header>
            <Container>
                <Logo to={`/`}/>
                <MenuBox>
                    <MenuItem to='https://github.com/hubintheroot/'><FaGithub size={`40`}/></MenuItem>
                </MenuBox>
            </Container>
        </Header> 
    )
}