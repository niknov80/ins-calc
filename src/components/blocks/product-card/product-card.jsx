import React, {useEffect} from "react";
import {StyledProductCard, ProductOptionList, StyledTerm ,StyledDefinition} from "./styles";
import Title, {TitleLevel} from "../../ui/title/title";
import Button from "../../ui/button/button";
import {appStore} from "../../../stores";
import {observer} from "mobx-react-lite";

const ProductCard = ({
  setActive
}) => {
  useEffect(() => {
    appStore.calcPakAttributes();
  }, []);
  const isShowButton = false;
  return (
    <StyledProductCard>
      <Title level={TitleLevel.H2} className={'list__title list__title--product'}>Программно-аппаратный комплекс (ПАК) ИНСОНЕТ:</Title>
      <ProductOptionList>
        <StyledTerm>Наименование:</StyledTerm>
        <StyledDefinition>{appStore.getPakName}</StyledDefinition>
        <StyledTerm>Артикул:</StyledTerm>
        <StyledDefinition>{appStore.getPakArticle}</StyledDefinition>
        <StyledTerm>Стоимость:</StyledTerm>
        <StyledDefinition>{appStore.getPakPrice.toLocaleString('ru-RU') || '<Not set>'} руб.</StyledDefinition>
        {appStore.getIsWindows && <StyledTerm className="attention">Внимание</StyledTerm>}
        {appStore.getIsWindows && <StyledDefinition className="attention">Необходимо уточнить цену на windows</StyledDefinition>}
        {isShowButton && <Button as="button" onClick={() => setActive(true)}>Подробнее</Button>}
      </ProductOptionList>
    </StyledProductCard>
  )
}
export default observer (ProductCard);
