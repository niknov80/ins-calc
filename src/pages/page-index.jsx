import React from "react";
import {Container} from "../components/styled";
import Title, {TitleLevel, TitleSize} from "../components/ui/title/title";
import {MainWrapper} from "../components/layout/page-wrapper/styles";
import CalcItem from "../components/blocks/calc-item/calc-item";
import CalcList from "../components/layout/calc-list/calc-list";

const PageIndex= () => {

  return (
    <Container>
      <Title className={"header"} level={TitleLevel.H1} size={TitleSize.BIG}>Выберите калькулятор</Title>
      <MainWrapper>
        <CalcList>
          <CalcItem link={"pak"} title={"ПАК Инсонет"} />
          <CalcItem link={"ds"} title={"Диалоговые станции"} />
        </CalcList>
      </MainWrapper>
    </Container>
  )
}
export default PageIndex;
