import React, {useState} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import {Main, Title, Wrapper} from "./styles";
import CalcForm from "../../blocks/calc-form/calc-form";
import ProductCard from "../../blocks/product-card/product-card";


function PageWrapper({calcData}) {
  const [article, setArticle] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const handleChange = (art, prc, name) => {
    setArticle(art);
    setPrice(prc);
    setName(name);
  }

  return (
    <Wrapper>
      <Header />
      <Main as="main">
        <Title>Калькулятор ПАК ИНСОНЕТ</Title>
        <CalcForm calcData={calcData} onChange={handleChange}/>
        <ProductCard article={article} price={price} name={name}/>
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default PageWrapper;
