import styled from "styled-components";
import {Section} from "../../styled/section/section";

export const Main = styled(Section)`
  flex-grow: 1;
  width: 100%;
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 0;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
