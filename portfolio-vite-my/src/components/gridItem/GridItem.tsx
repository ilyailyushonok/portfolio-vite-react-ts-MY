import styled from "styled-components";
import {theme} from "../../styles/theme.ts";


export const GridItem = (props:{idProject: string}) => {
    return (
        <ItemWrapper>
            <img src={props.idProject} alt="photo"/>
            <GridTitleStyled>Project Tile goes here</GridTitleStyled>
            <GridDescStyled>This is sample project description random things are here in description This is sample project lorem
                ipsum generator for dummy contenThis is sample project description random things are here in description This is sample project lorem
                ipsum generator for dummy content</GridDescStyled>
        </ItemWrapper>
    )
}
const ItemWrapper=styled.div`
    width: 100%;
    background-color: #27282b;
    border-radius: 20px;

    img {
        object-fit: cover;
        width: 100%;
    }

`
const GridTitleStyled=styled.h3`
color: ${theme.colorFont};
`
const GridDescStyled=styled.p`
color: ${theme.colorFont};
`
