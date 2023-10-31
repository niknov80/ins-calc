import styled from "styled-components";
import {Section} from "../../styled/section/section";

export const StyledSection= styled(Section)`
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 80px;
  padding-top: 0;
  padding-bottom: 0;
  background-color: ${(props) => props.theme.colorBg};
  color: ${(props) => props.theme.colorWhite};
`;
