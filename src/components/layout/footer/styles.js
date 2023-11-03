import styled from "styled-components";
import {Section} from "../../styled";

export const StyledSection= styled(Section)`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 0;
  background-color: ${(props) => props.theme.colorWhite};
  color: ${(props) => props.theme.colorTextDefault};
`;

export const FooterWrapper = styled.div`
  display: flex;
  column-gap: 10%;
  align-items: center;
  justify-content: end;
  min-height: 80px;
`;
