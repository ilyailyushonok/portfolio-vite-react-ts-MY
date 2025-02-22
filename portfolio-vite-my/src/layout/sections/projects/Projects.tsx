import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {GridItem} from "../../../components/gridItem/GridItem.tsx";
import Rectangle22 from "../../../assets/Rectangle22.png"
import Rectangle23 from "../../../assets/Rectangle23.png"
import Rectangle24 from "../../../assets/Rectangle24.png"
import Rectangle8 from "../../../assets/Rectangle8.png"
import Rectangle16 from "../../../assets/Rectangle16.png"
import Rectangle18 from "../../../assets/Rectangle18.png"
import {theme} from "../../../styles/theme.ts";

export const Projects = () => {
    return (
        <Container>
            <FlexWrapper direction="column" align="center">
                <ProjectsTitleStyled id={'projects'}>Projects</ProjectsTitleStyled>
                <ProjectsDescStyled>Things I’ve built so far</ProjectsDescStyled>
                <GridWrapperStyled>
                    <GridItem idProject={Rectangle22}/>
                    <GridItem idProject={Rectangle23}/>
                    <GridItem idProject={Rectangle24}/>
                    <GridItem idProject={Rectangle8}/>
                    <GridItem idProject={Rectangle16}/>
                    <GridItem idProject={Rectangle18}/>
                </GridWrapperStyled>
            </FlexWrapper>
        </Container>
    )
}

const GridWrapperStyled=styled.div`
    display: grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-auto-rows:1fr 1fr ;
    gap:30px;
`
const ProjectsTitleStyled=styled.h2`
color: ${theme.colorFont};
`
const ProjectsDescStyled=styled.p`
color: ${theme.colorFont};
`
