import React from "react";
import {StyledProductCard, ProductOptionList, StyledTerm ,StyledDefinition} from "./styles";
import Title, {TitleLevel} from "../../ui/title/title";

const ProductCard = ({price, article, name}) => {
  return (
    <StyledProductCard>
      <Title level={TitleLevel.H2} className={'list__title'}>{name || '<Not set>'}</Title>
      <ProductOptionList>
        <StyledTerm>Артикул:</StyledTerm>
        <StyledDefinition>{article || '<Not set>'}</StyledDefinition>
        <StyledTerm>Стоимость:</StyledTerm>
        <StyledDefinition>{price.toLocaleString('ru-RU') || '<Not set>'} руб.</StyledDefinition>
      </ProductOptionList>

    </StyledProductCard>
  )
}
export default ProductCard;
