import styled from "styled-components";
import StyledLink from "../../ui/link/styles";
export const StuledMenuList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 65px;
    row-gap: 30px;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
`;

export const StuledMenuItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 30px;
`;

export const StyledMenuLink = styled(StyledLink)`
    position: relative;
    color: ${(props) => props.theme.colorTextDefault};
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: 0 1px;
    transition: background-size .5s ease;
    
    &:hover{
      background-size: 100% 1px;
    }
`;
