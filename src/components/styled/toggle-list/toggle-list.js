import styled from "styled-components";
import {Ul} from "../index";

export const ToggleList = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colorForBorderList};
  border-radius: ${(props) => props.theme.borderRadiusForList};
  box-shadow: ${(props) => props.theme.boxShadow};
  overflow: hidden;
`;

export const ToggleUl = styled(Ul)`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding-right: 20px;
`;
