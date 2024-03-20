import styled from "styled-components";
import {Section} from "../../styled";

export const StyledSection= styled(Section)`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 0;
  color: ${(props) => props.theme.colorWhite};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  position: relative;
  gap: 25px;
  justify-content: space-between;
  padding-top: 45px;
  padding-bottom: 25px;
  padding-left: 25px;
  padding-right: 55px;
  
  @media(max-width: ${(props) => props.theme.mobileWidth}) {
    flex-direction: column;
    align-items: start;
  };
`;
