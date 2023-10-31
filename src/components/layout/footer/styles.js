import styled from "styled-components";
import {Section} from "../../styled/section/section.js";

export const StyledSection = styled(Section)`
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 80px;
  padding-top: 0;
  padding-bottom: 0;
  background-color: ${(props) => props.theme.colorWhite};
`;
