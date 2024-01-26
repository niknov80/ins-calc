import styled from "styled-components";
import {Section} from "../../styled";
import bgImage from "../../../assets/bg.jpeg";

export const Main = styled(Section)`
  flex-grow: 1;
  width: 100%;
  margin: 0 auto;
  
`;

export const Wrapper = styled.div`
  background-blend-mode: multiply;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 320px;
  background-image: url(${bgImage});
  background-color: rgba( 0, 0, 0, 0.5);
  background-size: cover;
`;

export const MainWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 0;
  display: grid;
  grid-template-columns: 68% 30%;
  column-gap: 2%;

  @media (max-width: ${(props) => props.theme.mobileWidth}) {
    display: flex;
    flex-direction: column;
    padding-top: 0;
    padding-bottom: 0;
    row-gap: 30px;
  }
`;
