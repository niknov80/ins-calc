import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Main, Wrapper } from "./styles";
import Device from "../../blocks/device/device";



function PageWrapper({calcData}) {
  return (
    <Wrapper>
      <Header />
      <Main as="main">
        <h1>Калькулятор ПАК</h1>
        <Device calcData={calcData}/>
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default PageWrapper;
