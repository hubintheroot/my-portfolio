import styled from 'styled-components';
import AppNav from './AppNav';

const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    z-index: 999;

    @media screen and (min-width: 768px){
        box-shadow: rgba(38, 57, 77, .3) 0px 20px 30px -10px;
    }
`;

const navData = [
    {link:'#about', text:'ABOUT'},
    {link:'#skills', text:'SKILLS'},
    {link:'#projects', text:'PROJECTS'},
];

export default function AppHeader() {
    return(
        <StyledHeader>
            <AppNav data={navData}/>
        </StyledHeader> 
    )
}