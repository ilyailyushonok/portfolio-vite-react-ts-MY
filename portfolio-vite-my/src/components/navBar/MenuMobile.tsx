import styled, { css, WebTarget } from "styled-components";
import { theme } from "../../styles/theme.ts";
import { Link } from "react-scroll";
import {useEffect, useState} from "react";

const itemsScroll = [
    {
        title: 'About me',
        href: 'aboutMe'
    },
    {
        title: 'Tech Stack',
        href: 'techStack'
    },
    {
        title: 'Projects',
        href: 'projects'
    },
    {
        title: 'Contacts',
        href: 'mailMe'
    }
];

export const MenuMobile = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const onBurgerClick = () => {setMenuIsOpen(!menuIsOpen);};
    useEffect(() => {
        if (menuIsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [menuIsOpen]);
    return (
        <NavStyledMobile>
            <BurgerButton isOpen={menuIsOpen} onClick={() => onBurgerClick()}>
                <span></span>
            </BurgerButton>

            <MenuStyledMobile isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
                {itemsScroll.map((item) => (
                    <ItemLinkMobile key={item.href} offset={-70} activeClass={'active'} spy={true} to={item.href} smooth={true}>
                        <MenuItem>{item.title}</MenuItem>
                    </ItemLinkMobile>
                ))}
            </MenuStyledMobile>
        </NavStyledMobile>
    );
};

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: relative;
    width: 70px;
    height: 70px;
    background-color: rgba(255, 255, 255, 0);
    z-index: 99999;
    
    @media ${theme.mediaTablet} {
        display: block;
    }
    span {
        display: inline-block;
        width: 35px;
        height: 2px;
        background-color: ${theme.colorFont};
     

        ${({ isOpen }) => isOpen && css`
            transition: 0.5s;
            background-color: rgba(255, 255, 255, 0);
        `};

        &::before {
            content: '';
            position: absolute;
            display: block;
            width: 35px;
            height: 2px;
            background-color: ${theme.colorFont};
         
            transform: translate(5px, 5px);

            ${({ isOpen }) => isOpen && css`
                transform: translate(0,0) rotate(45deg);
            `};
        }

        &::after {
            content: '';
            position: absolute;
            display: block;
            width: 35px;
            height: 2px;
            background-color: ${theme.colorFont};
          
            transform: translate(5px, -5px);

            ${({ isOpen }) => isOpen && css`
                transform: translate(0,0) rotate(-45deg);
            `};
        }
    }
`;

export const NavStyledMobile = styled.nav`
`

const MenuStyledMobile = styled.ul<{ justify?: string, isOpen?: boolean }>`
    display: none;

    @media ${theme.mediaTablet} {
        ${({ isOpen }) => isOpen && css`
            display: flex;
            position: fixed;
            flex-direction: column;
            justify-content: center;
            gap:100px;
            align-items: center;
            background-color: #27282b;
            margin: 0;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 222;
        `}
    }
`;

const ItemLinkMobile = styled(Link as WebTarget)`
    color: ${theme.colorFont};
   &:hover,&.active{
        color: ${theme.primaryColor};
    }
`;

const MenuItem = styled.li`
    color: ${theme.colorFont};
    &:hover,&.active{
        color: ${theme.primaryColor};
    }
`;