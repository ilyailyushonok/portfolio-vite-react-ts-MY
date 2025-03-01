import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {theme} from "../../../styles/theme.ts";




export const TechStack = () => {
    return (
        <TechStackStyled>
        <Container>
            <FlexWrapper direction="column" align="center">
                <TechTitleStyled id={'techStack'}>My Tech Stack</TechTitleStyled>
                <TechDescriptionStyled>Technologies I’ve been working with recently</TechDescriptionStyled>
                <TechStackIcons >
                    <Icon iconId={'html'}/>
                    <Icon iconId={'css'}/>
                    <Icon iconId={'js'} viewBox={'-8 -8 120 120'}/>
                    <Icon iconId={'ts'} viewBox={'-8 -8 120 120'}/>
                    <Icon iconId={'npm'} viewBox={'-8 -8 120 120'}/>
                    <Icon iconId={'react'} viewBox={'-8 -8 120 120'}/>
                    <Icon iconId={'redux'} viewBox={'-8 -8 120 120'}/>
                    <Icon iconId={'vite'} viewBox={'-8 -8 120 120'}/>
                    <Icon iconId={'figma'} viewBox={'-8 -8 120 120'}/>
                    <Icon iconId={'styled'} viewBox={'-8 -8 120 120'}/>
                    <Icon iconId={'git'} viewBox={'-8 -8 120 120'}/>
                    <Icon iconId={'GitHubTech'} viewBox={'-16 -16 120 120'}/>
                </TechStackIcons>
            </FlexWrapper>
        </Container>
        </TechStackStyled>
    )
}

const TechStackStyled=styled.section`

`

const TechStackIcons=styled.div`
    display: grid;
    width: 100%;
    grid-template-columns:repeat(auto-fit,minmax(165px, auto));
    row-gap :77px;
   justify-content: space-between;
    justify-items: center;
    @media ${theme.mediaTablet} {
        grid-template-columns:repeat(auto-fit,minmax(120px, auto));
        justify-content: space-around;
        
    }
`
const TechTitleStyled = styled.h2`
color: ${theme.colorFont} ;
`
const TechDescriptionStyled = styled.p`
color: ${theme.colorFont} ;
`