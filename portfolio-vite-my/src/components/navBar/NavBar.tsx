import styled, {WebTarget} from "styled-components";
import {theme} from "../../styles/theme.ts";
import {Link} from "react-scroll";



const itemsScroll=[

    {
        title:'About me',
        href:'aboutMe'
    },
    {
        title:'Tech Stack',
        href:'techStack'
    },
    {
        title:'Projects',
        href:'projects'
    },
    {
        title:'Contacts',
        href:'mailMe'
    }
]


export const MenuContent = (props:{href?:string}) => {
    return (
        <NavStyled>
            <MenuStyled>
                {itemsScroll.map((item) => {
                    return(   <ItemLink offset={-70} activeClass={'active'} spy={true} to={props.href||item.href} smooth={true}><MenuItem key={item.href}>{item.title}</MenuItem></ItemLink>
                 )
                })}
            </MenuStyled>
        </NavStyled>
    )
}

export const NavStyled=styled.nav`
    max-width: 610px;
    width: 100%;
    @media ${theme.mediaTablet} {
        display: none;
    }
`

export const MenuStyled=styled.ul<{gap?:string,justify?:string,display?:string,wrap?:string}>`
    display: flex;
    justify-content:${({justify})=>justify|| "stretch"}; 
    align-items: center;
    flex-wrap:${({wrap})=>wrap||"nowrap"};
    gap:${({gap})=>gap||"10px"};
    @media ${theme.mediaTablet} {
        gap:${({gap})=>gap||"35px"};
        display: ${({display})=>display||"none"};
    padding: 0;
`

export const ItemLink=styled(Link as WebTarget)`
    color: ${theme.colorFont};

    &:hover,&.active{
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


export const MenuItem=styled.li`
    a{
        color: ${theme.colorFont} ;
    }
   
`