import React, {useState} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import {Main, Wrapper} from "./styles";
import MoreProductCard from "../../blocks/more-product-card/more-product-card";
import {observer} from "mobx-react-lite";
import {appStore} from "../../../stores";
import {Outlet} from "react-router-dom";

function PageWrapper({calcData}) {
  const [modalActive, setModalActive] = useState(false);

  return (
    <Wrapper>
      <Header />
      <Main as="main">
        <Outlet />
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
