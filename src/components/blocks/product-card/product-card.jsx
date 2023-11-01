import React from "react";
import {StyledProductCard, StyledText} from "./styles";

const ProductCard = ({price, article, name}) => {
  return (
    <StyledProductCard>
      <StyledText>Наименование: {name || '<Not set>'}</StyledText>
      <StyledText>Артикул: {article || '<Not set>'}</StyledText>
      <StyledText>Стоимость: {price || '<Not set>'} руб.</StyledText>
    </StyledProductCard>
  )
}
export default ProductCard;
