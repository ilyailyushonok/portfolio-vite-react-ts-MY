
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {MenuStyled, MenuContent, MenuItem} from "../../components/navBar/NavBar.tsx";
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";


 const items=['Home','About','Tech Stack','Projects','Contact']

export const Header = () => (
    <HeaderStyled>
    <Container max-height="60px" padding="0 15px">
    <FlexWrapper justify="space-between" align="center" >
        <Icon iconId={'logo'} width={'50px'} height={'50px'} viewBox={'0 0 50 50'}/>
        {/*<NavStyled>*/}
        {/*   <MenuContent items={items} justify={"space-between"}>*/}
        {/*       <MenuItem><a href="/home">Home</a></MenuItem>*/}
        {/*       <MenuItem><a  href="/about">About</a></MenuItem>*/}
        {/*       <MenuItem><a href="/tech">Tech Stack</a></MenuItem>*/}
        {/*       <MenuItem><a href="/projects">Projects</a></MenuItem>*/}
        {/*       <MenuItem><a href="/cotacts">Contact</a></MenuItem>*/}
        {/*   </MenuContent>*/}
        {/*</NavStyled>*/}
        <MenuContent items={items}/>
            <MenuStyled>
                <MenuItem><a href="https://github.com/ilyailyushonok" target={"_blank"}><Icon  iconId={"GitHub"} viewBox={"0 0 30 30"} height={"30"} width={"28"}/></a></MenuItem>
                <MenuItem><a href="/" target={"_blank"}><Icon iconId={"Telegram"} viewBox={"0 0 30 30"} height={"30"} width={"30"}/></a></MenuItem>
                <MenuItem><a href="/" target={"_blank"}><Icon iconId={"Linkedin"} viewBox={"0 0 30 30"} height={"30"} width={"30"}/></a></MenuItem>
            </MenuStyled>
    </FlexWrapper>
    </Container>
</HeaderStyled>
)


const HeaderStyled=styled.div`
    position: fixed;
    width: 100%;
    margin: 0 auto;
    background-color: #191919;
    opacity: 0.8;
`
