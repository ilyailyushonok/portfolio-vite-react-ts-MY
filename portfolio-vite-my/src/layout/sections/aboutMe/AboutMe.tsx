import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import ava from "../../../assets/myAva.jpg"
import styled from "styled-components";
import {theme} from "../../../styles/theme.ts";

export const AboutMe = () => {
    return (

        <AboutMeStyled id="aboutMe">
        <Container>
            <FlexWrapper justify={'space-between'}  wrap={'wrap-reverse'}>
                <ContentAboutStyled>
                    <TitleH2AboutStyled><span>Hi 👋,</span>My name is Ilya Ilyushonok</TitleH2AboutStyled>
                    <TitleH1AboutStyled>A Web Developer.</TitleH1AboutStyled>
                </ContentAboutStyled>
                <AvaStyled src={ava} alt={"photo"}/>
            </FlexWrapper>
        </Container>
        </AboutMeStyled>
    )
}
const ContentAboutStyled=styled.div`
 padding-top: 50px;
    @media screen and (max-width: 890px) {
        margin: 0 auto;
        
    }
   
`
const AvaStyled=styled.img`
    border-radius: 50%;
    max-width: 320px;
    max-height: 320px;
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border:4px solid ${theme.primaryColor}; ;
   object-position: bottom ;
    @media screen and (max-width: 890px) {
            margin: 0 auto;
    }
`

const AboutMeStyled=styled.section`
    padding-top: 40px;
    min-width: 100%;
  
    
`




const TitleH2AboutStyled=styled.span`
    color: ${theme.colorFont} ;
    font-size: 35px;
`
const TitleH1AboutStyled=styled.h1`
    color: ${theme.colorFont} ;
    font-size: 50px;
   
`