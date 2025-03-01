import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import styled from "styled-components";
import { MenuItem, MenuStyled} from "../../../components/navBar/NavBar.tsx";
import {theme} from "../../../styles/theme.ts";


export const Contacts: React.FC = () => {
    return (
        <StyledContacts>
        <Container>
            <FlexWrapper justify="space-between" align={"center"}  wrap={'wrap'} >
              <IconWrpperStyled>  <Icon iconId={'logo'} height={'50px'} width={'50px'} viewBox={'0 0 50px 50px'}/></IconWrpperStyled>
                <ContactsWrap>
                    <a href="tel:+91 12345 09876" className={'telAndMail'}>+375-44-777-77-77</a>
                    <a href="mailto:info@example.com" className={'telAndMail'}>MyImail777777777777777.com</a>
                        <MenuStyled display={'flex'} wrap={'wrap'} >
                        <MenuItem><a href="/" target={"_blank"}><Icon iconId={"GitHub"} viewBox={"0 0 30 30"} height={"30"} width={"30"}/></a></MenuItem>
                        <MenuItem><a href="/" target={"_blank"}><Icon iconId={"Telegram"} viewBox={"0 0 30 30"} height={"30"} width={"30"}/></a></MenuItem>
                        <MenuItem><a href="https://github.com/ilyailyushonok" target={"_blank"}><Icon iconId={"Linkedin"} viewBox={"0 0 30 30"} height={"30"} width={"30"} /></a></MenuItem>
                    </MenuStyled>
                </ContactsWrap>
            </FlexWrapper>
        </Container>
        </StyledContacts>

    )
}

const StyledContacts = styled.section``

const ContactsWrap=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
flex-wrap: wrap;
    gap:60px;
    .telAndMail{
            color: ${theme.primaryColor};

    }
  
`
const IconWrpperStyled=styled.div`

`