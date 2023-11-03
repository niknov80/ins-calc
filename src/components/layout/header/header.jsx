import React from "react";
import {HeaderWrapper, StyledSection} from "./styles";
import Logo from "../../ui/logo/logo";
import Title, {TitleLevel, TitleSize} from "../../ui/title/title";
import {Container} from "../../styled";

function Header() {
  return (
    <StyledSection as="header">
      <Container>
        <HeaderWrapper>
          <Logo />
          <Title level={TitleLevel.H1} size={TitleSize.BIG}>Калькулятор ПАК ИНСОНЕТ</Title>
        </HeaderWrapper>
      </Container>
    </StyledSection>
  );
}

export default Header;
