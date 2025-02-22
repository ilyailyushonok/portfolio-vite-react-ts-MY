import styled from "styled-components";
import {theme} from "../../styles/theme.ts";

export const NavStyled=styled.nav`
    max-width: 610px;
    width: 100%;
`
type menuPropsType = {
items: Array<string>
}
export const MenuContent = (props:menuPropsType) => {
    return (
        <NavStyled>
            <MenuStyled>
                {props.items.map((item,i) => {
                 return(   <MenuItem key={i}>{item}</MenuItem>
                 )
                })}
            </MenuStyled>
        </NavStyled>
    )
}

export const MenuStyled=styled.ul<{gap?:string,justify?:string}>`
    display: flex;
    justify-content:${({justify})=>justify|| "stretch"}; 
    align-items: center;
    width: inherit;
    gap:${({gap})=>gap||"10px"};
`
export const MenuItem=styled.li`
    color: ${theme.colorFont};
    &:hover{
        color: ${theme.primaryColor};
        cursor: pointer;
    }
    &+li{
        padding-left: 10px;
    }
    a{
        font-family: ${theme.secondaryFont};
        font-weight: 500;
        font-size: 20px;
        line-height: 1.3;
        text-align: center;
        color: ${theme.colorFont} ;
        white-space: nowrap;
    }
`