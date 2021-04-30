import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { Button } from '../../styles/global';

import {
    Nav,
    NavLogo,
    NavIcon,
    NavContainer,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './styles';

export function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    useEffect(() => {
        showButton();
    }, []);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };



    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to="/" >
                        <NavIcon />
                        GOLDEN
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/' onClick={closeMobileMenu}>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/services' onClick={closeMobileMenu}>
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/products' onClick={closeMobileMenu}>
                                Products
                            </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to='/sign-up'>
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/sign-up'>
                                    <Button onClick={closeMobileMenu} fontBig primary>
                                        SIGN UP
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>



                </NavContainer>
            </Nav>


        </>
    )
}
