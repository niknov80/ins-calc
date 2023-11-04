import styled from "styled-components";
import {TitleSize} from "./title";

export const StyledTitle = styled.h1`
  margin: 0;
  padding: ${(props) => {
    let padding = "0";
    if (props.className === "list__title") {
      padding = (props) => props.theme.paddingHeader;
    }
    return padding;
  }};
  font-weight: ${(props) => {
    let fontWeight = "700";
    if (props.className === "list__title") {
      fontWeight = "500";
    }
    return fontWeight;
  }};
  line-height: ${(props) => {
    let lineHeight= "39px";
    if (props.$size === TitleSize.BIG) {
      lineHeight = "54px";
    }
    if (props.$size === TitleSize.SMALL) {
      lineHeight = "20px";
    }
    return lineHeight;
  }};
  font-size: ${(props) => {
    let fontSize = "24px";
    if (props.$size === TitleSize.BIG) {
      fontSize = "36px";
    }
    if (props.$size === TitleSize.SMALL) {
      fontSize = "16px";
    }
    return fontSize;
  }};
  color: ${(props) => {
    let color = (props) => props.theme.colorWhite;
    if (props.className === "list__title") {
      color = (props) => props.theme.colorWhite;
    }
    return color;
  }};
  background-color: ${(props) => {
    let backgroundColor = "unset";
    if (props.className === "list__title") {
      backgroundColor = (props) => props.theme.colorBgListHeader;
    }
    return backgroundColor;
  }};
`;
