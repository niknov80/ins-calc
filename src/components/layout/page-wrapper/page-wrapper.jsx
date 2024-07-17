import React, {useState} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import {Main, MainWrapper, Wrapper} from "./styles";
import CalcForm from "../calc-form/calc-form";
import ProductCard from "../../blocks/product-card/product-card";
import {Container} from "../../styled";
import MoreProductCard from "../../blocks/more-product-card/more-product-card";
import Title, {TitleLevel, TitleSize} from "../../ui/title/title";
import {observer} from "mobx-react-lite";
import {appStore} from "../../../stores";

function PageWrapper({calcData}) {
  const [modalActive, setModalActive] = useState(false);

  return (
    <Wrapper>
      <Header />
      <Main as="main">
        <Container>
          <Title className={"header"} level={TitleLevel.H1} size={TitleSize.BIG}>Подберите конфигурацию<br/><span>ПАК ИнсоНет</span></Title>
          <MainWrapper>
            <CalcForm calcData={calcData} />
            <ProductCard setActive={setModalActive} />
          </MainWrapper>
        </Container>
      </Main>
      <Footer />
      <MoreProductCard
        name = {appStore.getPakName}
        article = {appStore.getPakArticle}
        price = {appStore.getPakPrice}
        active = {modalActive}
        setActive = {setModalActive}
      />
    </Wrapper>
  );
}

export default observer (PageWrapper);
