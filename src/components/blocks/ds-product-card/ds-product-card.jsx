import React, {useEffect} from "react";
import {StyledProductCard, ProductOptionList, StyledTerm ,StyledDefinition} from "./styles";
import Title, {TitleLevel} from "../../ui/title/title";
import Button from "../../ui/button/button";
import {dsStore} from "../../../stores";
import {observer} from "mobx-react-lite";

const DsProductCard = () => {
  useEffect(() => {
    dsStore.calcDsAttributes();
  }, []);
  const isShowButton = false;
  return (
    <StyledProductCard>
      <Title level={TitleLevel.H2} className={'list__title list__title--product'}>Диалоговая станция:</Title>
      <ProductOptionList>
        <StyledTerm>Наименование:</StyledTerm>
        <StyledDefinition>{dsStore.getDsName}</StyledDefinition>
        <StyledTerm>Артикул:</StyledTerm>
        <StyledDefinition>{dsStore.getDsArticle}</StyledDefinition>
        <StyledTerm>Стоимость:</StyledTerm>
        <StyledDefinition>{dsStore.getDsPrice.toLocaleString('ru-RU') || '<Not set>'} руб.</StyledDefinition>
        {dsStore.getIsWindows && <StyledTerm className="attention">Внимание</StyledTerm>}
        {dsStore.getIsWindows && <StyledDefinition className="attention">Необходимо уточнить цену на windows</StyledDefinition>}
        {isShowButton && <Button as="button" >Подробнее</Button>}
      </ProductOptionList>
    </StyledProductCard>
  )
}
export default observer (DsProductCard);
