import React from "react";
import {StyledCalcItem, StyledCalcLink} from "./styles";

const CalcItem = ({
  link,
  title
}) => {
  return (
    <StyledCalcItem>
      <StyledCalcLink to={`/${link}`}>{title}</StyledCalcLink>
    </StyledCalcItem>
  )
}
export default CalcItem;
