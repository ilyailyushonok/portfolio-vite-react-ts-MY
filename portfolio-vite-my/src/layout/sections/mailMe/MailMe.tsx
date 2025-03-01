import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {theme} from "../../../styles/theme.ts";


export const MailMe = () => {
    return (
        <MailMeStyled>
        <Container>
            <FlexWrapper direction="column" align={"center"} justify="center">
                <MailDescStyled id='mailMe' >For any questions please right me:</MailDescStyled>
              <FormStyled>
                  <InputStyled placeholder={'Your name'}/>
                  <InputStyled  placeholder={'Your e-mail'}/>
                  <InputStyled placeholder={'Message'} as={'textarea'}/>
              </FormStyled>
            </FlexWrapper>
        </Container>
        </MailMeStyled>
    )
}
const MailMeStyled=styled.section`

`

const MailDescStyled=styled.p`
    color: ${theme.colorFont};
    padding-bottom: 30px;
`
 const FormStyled=styled.form`
     display: flex;
     flex-direction: column;
     gap: 22px;
     max-width: 500px;
     width: 100%;
     textarea{
         min-height: 150px;
         resize: none;
         padding: 7px;
     }
 `
const InputStyled=styled.input`
    background-color: #27282b;
    color: ${theme.colorFont};
    font-family: ${theme.secondaryFont};
    width: 100%;
    min-height: 30px;
    outline: 1px solid ${theme.primaryColor};
    padding: 5px;

`


