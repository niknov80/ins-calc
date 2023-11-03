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
`;

export const MainWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 3%;
`;
