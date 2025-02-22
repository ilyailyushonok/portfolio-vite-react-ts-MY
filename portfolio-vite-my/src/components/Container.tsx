import styled from "styled-components";

export const Container = styled.div<{padding?:string}>`
    max-width: 1440px;
    width: 100%;
    min-height: 100%;
    margin: 0 auto;
    
    padding:${({padding})=>padding ||'40px 15px'};
    //outline: 2px solid #fa0000;
    
    
`