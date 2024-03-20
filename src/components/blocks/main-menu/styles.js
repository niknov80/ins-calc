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

    @media(max-width: ${(props) => props.theme.tabletWidth}) {
      display: none;
      
    };

    &.show-menu {
        display: flex;
    }
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

export const Burger = styled.button`
  display: none;
  border: none;
  position: absolute;
  top: 45px;
  right: 0;
  background-color: transparent;
  height: 50px;
  width: 50px;
  cursor: pointer;

  @media(max-width: ${(props) => props.theme.tabletWidth}) {
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: "\\2630";
        color: white;
        font-size: 32px;
    }

    &.show-menu {
        &::before {
            content: "\\2716";            
        }
    }
  };
`;
