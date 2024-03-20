import React, {useState} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import {Main, MainWrapper, Wrapper} from "./styles";
import CalcForm from "../calc-form/calc-form";
import ProductCard from "../../blocks/product-card/product-card";
import {Container} from "../../styled";
import MoreProductCard from "../../blocks/more-product-card/more-product-card";
import Title, {TitleLevel, TitleSize} from "../../ui/title/title";

function PageWrapper({calcData}) {

  const [article, setArticle] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [ppo, setPpo] = useState("")
  const handleChange = (art, prc, name, ppo) => {
    setArticle(art);
    setPrice(prc);
    setName(name);
    setPpo(ppo);
  }

  return (
    <Wrapper>
      <Header />
      <Main as="main">
        <Container>
          <Title className={"header"} level={TitleLevel.H1} size={TitleSize.BIG}>Подберите конфигурацию<br/><span>ПАК ИнсоНет</span></Title>
          <MainWrapper>
            <CalcForm calcData={calcData} onChange={handleChange}/>
            <ProductCard article={article} price={price} name={name} setActive={setModalActive} ppo={ppo}/>
          </MainWrapper>
        </Container>
      </Main>
      <Footer />
      <MoreProductCard
        name = {name}
        article = {article}
        price = {price}
        active = {modalActive}
        setActive = {setModalActive}
      />
    </Wrapper>
  );
}

export default PageWrapper;
