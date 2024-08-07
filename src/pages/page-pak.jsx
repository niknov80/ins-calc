import React, {useEffect} from "react";
import Title, {TitleLevel, TitleSize} from "../components/ui/title/title";
import {MainWrapper} from "../components/layout/page-wrapper/styles";
import CalcForm from "../components/layout/calc-form/calc-form";
import ProductCard from "../components/blocks/product-card/product-card";
import {Container} from "../components/styled";

const PagePak = ({calcData}) => {

  useEffect(() => {
    // console.log("pak-page")
  }, []);

  return (
    <Container>
      <Title className={"header"} level={TitleLevel.H1} size={TitleSize.BIG}>Подберите конфигурацию<br/><span>ПАК ИнсоНет</span></Title>
      <MainWrapper>
        <CalcForm calcData={calcData} />
        <ProductCard />
      </MainWrapper>
    </Container>
  )
}
export default PagePak;
