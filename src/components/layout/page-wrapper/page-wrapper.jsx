import React, {useState} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import {Main, Title, Wrapper} from "./styles";
import CalcForm from "../../blocks/calc-form/calc-form";
import ProductCard from "../../blocks/product-card/product-card";


function PageWrapper({calcData}) {

  const [price, setPrice] = useState('');
  const [article, setArticle] = useState('');
  const [name, setName] = useState('')
  const handleChange = (fullPrice, article, name) => {
    setPrice(fullPrice);
    setArticle(article);
    setName(name);
  }

  return (
    <Wrapper>
      <Header />
      <Main as="main">
        <Title>Калькулятор ПАК ИНСОНЕТ</Title>
        <CalcForm calcData={calcData} onChange={handleChange}/>
        <ProductCard price={price} article={article} name={name}/>
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default PageWrapper;
