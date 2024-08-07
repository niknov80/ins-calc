import React, {useEffect} from "react";
import {Container} from "../components/styled";
import Title, {TitleLevel, TitleSize} from "../components/ui/title/title";
import {MainWrapper} from "../components/layout/page-wrapper/styles";
import CalcFormDs from "../components/layout/calc-form-ds/calc-form-ds";
import {observer} from "mobx-react-lite";
import DsProductCard from "../components/blocks/ds-product-card/ds-product-card";
import {appStore} from "../stores";

const PageDs = ({calcData}) => {

  useEffect(() => {
    // console.log("ds-page")
  }, []);

  return (
    <Container>
      <Title className={"header"} level={TitleLevel.H1} size={TitleSize.BIG}>Подберите конфигурацию<br/><span>Диалоговой станции</span></Title>
      <MainWrapper>
        <CalcFormDs calcData={calcData}/>
        <DsProductCard/>
      </MainWrapper>
    </Container>
  )
}
export default observer  (PageDs);
