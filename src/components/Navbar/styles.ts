import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav`
    background: #101522;
    height:80px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top:0;
    z-index:999;
 `;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self:flex-start;
    cursor:pointer;
    text-decoration:none;
    font-size: 2rem;
    display: flex;
    align-items: center;
      

`;

export const NavIcon = styled.div`
 
      

`;