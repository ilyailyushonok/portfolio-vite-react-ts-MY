import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import ava from "../../../assets/myAva.jpg"
import styled from "styled-components";
import {theme} from "../../../styles/theme.ts";

export const AboutMe = () => {
    return (
        <AboutMeStyled id="aboutMe">
        <Container>
            <FlexWrapper justify={'space-between'} wrap={'wrap-reverse'}>
                <div>
                    <TitleH2AboutStyled>Hi 👋,<br/>My name is <br/>Ilya Ilyushonok</TitleH2AboutStyled>
                    <TitleH1AboutStyled>A Web Developer.</TitleH1AboutStyled>
                </div>
                <AvaStyled src={ava} alt={"photo"}/>
            </FlexWrapper>
        </Container>
        </AboutMeStyled>
    )
}

const AvaStyled=styled.img`
    border-radius: 50%;
    max-width: 320px;
    max-height: 320px;
    width: 100%;
    object-fit: cover;
    border:4px solid ${theme.primaryColor}; ;
   object-position: bottom ;
`
const AboutMeStyled=styled.div`
    padding-top: 40px;

`
const TitleH2AboutStyled=styled.h2`
    color: ${theme.colorFont} ;
    font-size: 35px;
`
const TitleH1AboutStyled=styled.h1`
    color: ${theme.colorFont} ;
    font-size: 50px;
`