import React from "react";
import {StuledMenuList, StuledMenuItem, StyledMenuLink} from "./styles";


const MainMenu = () => {
  return (
    <StuledMenuList>
      <StuledMenuItem>
        <StyledMenuLink href="#">Главная</StyledMenuLink>
      </StuledMenuItem>
      <StuledMenuItem>
        <StyledMenuLink href="https://quick-set.ru/#device">Оборудование</StyledMenuLink>
      </StuledMenuItem>
      <StuledMenuItem>
        <StyledMenuLink href="https://quick-set.ru/#purchase">Закупки</StyledMenuLink>
      </StuledMenuItem>
      <StuledMenuItem>
        <StyledMenuLink href="https://quick-set.ru/#logistic">Доставка</StyledMenuLink>
      </StuledMenuItem>
      <StuledMenuItem>
        <StyledMenuLink href="https://quick-set.ru/#device">ПАК InsoNet Калькулятор</StyledMenuLink>
      </StuledMenuItem>
      <StuledMenuItem>
        <StyledMenuLink href="https://quick-set.ru/#documantation">Документация</StyledMenuLink>
      </StuledMenuItem>
      <StuledMenuItem>
        <StyledMenuLink href="https://quick-set.ru/#contact">Контакты</StyledMenuLink>
      </StuledMenuItem>
    </StuledMenuList>
  )
}
export default MainMenu;
