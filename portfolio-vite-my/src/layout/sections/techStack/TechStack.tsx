import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {theme} from "../../../styles/theme.ts";




export const TechStack = () => {
    return (
        <Container>
            <FlexWrapper direction="column" align="center">
                <TechTitleStyled>My Tech Stack</TechTitleStyled>
                <TechDescriptionStyled>Technologies I’ve been working with recently</TechDescriptionStyled>
                <TechStackIcons>
                    <Icon iconId={'html'}/>
                    <Icon iconId={'css'}/>
                    <Icon iconId={'ts'}/>
                    <Icon iconId={'react'}/>
                    <Icon iconId={'redux'}/>
                    <Icon iconId={'figma'}/>
                    <Icon iconId={'styled'}/>
                    <Icon iconId={'vite'}/>
                    <Icon iconId={'git'}/>
                    <Icon iconId={'GitHubTech'}/>
                </TechStackIcons>
            </FlexWrapper>
        </Container>
    )
}

const TechStackIcons=styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: 1fr 1fr;
    grid-template-columns:repeat(5,1fr);
    row-gap :77px;
   justify-content: space-between;
    justify-items: center;
`
const TechTitleStyled = styled.h2`
color: ${theme.colorFont} ;
`
const TechDescriptionStyled = styled.p`
color: ${theme.colorFont} ;
`