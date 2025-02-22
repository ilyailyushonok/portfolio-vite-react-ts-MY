import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {MenuContent} from "../../components/navBar/NavBar.tsx";
import {theme} from "../../styles/theme.ts";
import styled from "styled-components";

// const items=['Home','About','Tech Stack','Projects','Contact']

export const Footer = () => {
    return (
        <Container>
            <FlexWrapper justify="space-between" align="center">
                    {/*<MenuStyled justify={"space-between"}>*/}
                    {/*    <MenuItem><a href="/home">Home</a></MenuItem>*/}
                    {/*    <MenuItem><a  href="/about">About</a></MenuItem>*/}
                    {/*    <MenuItem><a href="/tech">Tech Stack</a></MenuItem>*/}
                    {/*    <MenuItem><a href="/projects">Projects</a></MenuItem>*/}
                    {/*    <MenuItem><a href="/cotacts">Contact</a></MenuItem>*/}
                    {/*</MenuStyled>*/}
                <MenuContent />
                <FooterDescStyled>© 2025 Ilya Ilyushonok, All Rights Reserved.</FooterDescStyled>
            </FlexWrapper>
        </Container>
    )
}
const FooterDescStyled=styled.p`
    color: ${theme.colorFont};
`
