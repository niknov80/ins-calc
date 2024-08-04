import React from "react";
import {StyledCalcList} from "./styles";
import CalcItem from "../../blocks/calc-item/calc-item";


const CalcList = () => {
  return (
    <StyledCalcList>
      <CalcItem link={"pak"} title={"ПАК Инсонет"} />
      <CalcItem link={"ds"} title={"Диалоговые станции"} />
    </StyledCalcList>
  )
}
export default CalcList;
