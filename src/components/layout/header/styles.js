import styled from "styled-components";
import {Section} from "../../styled";

export const StyledSection= styled(Section)`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 0;
  background-color: ${(props) => props.theme.colorBg};
  color: ${(props) => props.theme.colorWhite};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  column-gap: 5%;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 25px;
  
  @media(max-width: ${(props) => props.theme.mobileWidth}) {
    flex-direction: column;
    align-items: start;
  };
`;
