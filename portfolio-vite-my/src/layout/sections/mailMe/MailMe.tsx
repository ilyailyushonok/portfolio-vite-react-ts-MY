import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {theme} from "../../../styles/theme.ts";


export const MailMe = () => {
    return (
        <Container>
            <FlexWrapper direction="column" align={"center"} justify="center">
                <MailDescStyled>For any questions please mail me:</MailDescStyled>
                <a href={"mailto:ilyushonok2014@mail.ru"} target={'_blank'}><Icon iconId={'mailMe'} fill={theme.primaryColor}/></a>
            </FlexWrapper>
        </Container>
    )
}
const MailDescStyled=styled.p`
    color: ${theme.colorFont};
 
`