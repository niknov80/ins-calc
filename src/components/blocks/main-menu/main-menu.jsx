import React, {useState} from "react";
import {StyledMenuList, StuledMenuItem, StyledMenuLink, Burger} from "./styles";


const MainMenu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState('');

  const clickBurgerHandler = () => {
    if (isMenuOpened) {
      setIsMenuOpened('');
    } else {
      setIsMenuOpened('show-menu');
    }

  }

  return (
    <>
      <Burger className={isMenuOpened} type="button" aria-label="Открыть меню" onClick={clickBurgerHandler}/>
      <StyledMenuList className={isMenuOpened}>
        <StuledMenuItem>
          <StyledMenuLink href="https://quick-set.ru/">Главная</StyledMenuLink>
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
      </StyledMenuList>
    </>

  )
}
export default MainMenu;
