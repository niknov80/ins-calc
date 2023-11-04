import styled from "styled-components";
import {Section} from "../../styled";

export const Main = styled(Section)`
  flex-grow: 1;
  width: 100%;
  margin: 0 auto;
  
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 320px;
`;

export const MainWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 3%;

  @media (max-width: ${(props) => props.theme.mobileWidth}) {
    display: flex;
    flex-direction: column;
    padding-top: 0;
    padding-bottom: 0;
    row-gap: 30px;
  }
`;
