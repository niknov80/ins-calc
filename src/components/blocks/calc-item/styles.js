import styled from "styled-components";
import {Link} from "react-router-dom";
import {Li} from "../../styled";



export const StyledCalcItem = styled(Li)`
    display: flex;
   
`

export const StyledCalcLink = styled(Link)`
    color: white;
    font-size: 24px;
    line-height: 28px;
    font-weight: 600;
    text-decoration: none;
    border: 1px solid white;
    border-radius: 6px;
    padding: 16px 32px;
    width: 320px;
    text-align: center;
    
    &:hover {
        background-color: #fff;
        color: purple;
    }
`
