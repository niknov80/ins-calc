import React, {useState} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import {Main, MainWrapper, Wrapper} from "./styles";
import CalcForm from "../calc-form/calc-form";
import ProductCard from "../../blocks/product-card/product-card";
import {Container} from "../../styled";
import Modal from "../../ui/modal/modal";

function PageWrapper({calcData}) {
  const [article, setArticle] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const handleChange = (art, prc, name) => {
    setArticle(art);
    setPrice(prc);
    setName(name);
  }

  return (
    <Wrapper>
      <Header />
      <Main as="main">
        <Container>
          <MainWrapper>
            <CalcForm calcData={calcData} onChange={handleChange}/>
            <ProductCard article={article} price={price} name={name} setActive={setModalActive}/>
          </MainWrapper>
        </Container>
      </Main>
      <Footer />
      <Modal active={modalActive} setActive={setModalActive}></Modal>
    </Wrapper>
  );
}

export default PageWrapper;
