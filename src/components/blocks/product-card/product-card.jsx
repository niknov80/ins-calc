import React from "react";
import {StyledProductCard, ProductOptionList, StyledTerm ,StyledDefinition} from "./styles";
import Title, {TitleLevel} from "../../ui/title/title";
import Button from "../../ui/button/button";

const ProductCard = ({price, article, name, setActive}) => {
  return (
    <StyledProductCard>
      <Title level={TitleLevel.H2} className={'list__title'}>Программно-аппаратный комплекс (ПАК) ИНСОНЕТ:</Title>
      <ProductOptionList>
        <StyledTerm>Наименование:</StyledTerm>
        <StyledDefinition>{name || '<Not set>'}</StyledDefinition>
        <StyledTerm>Артикул:</StyledTerm>
        <StyledDefinition>{article || '<Not set>'}</StyledDefinition>
        <StyledTerm>Стоимость:</StyledTerm>
        <StyledDefinition>{price.toLocaleString('ru-RU') || '<Not set>'} руб.</StyledDefinition>
        <Button as="button" onClick={() => setActive(true)}>Подробнее</Button>
      </ProductOptionList>

    </StyledProductCard>
  )
}
export default ProductCard;
