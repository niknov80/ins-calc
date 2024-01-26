import React from "react";
import {HeaderWrapper, StyledSection} from "./styles";
import Logo from "../../ui/logo/logo";
import {Container} from "../../styled";
import MainMenu from "../../blocks/main-menu/main-menu";

function Header() {
  return (
    <StyledSection as="header">
      <Container>
        <HeaderWrapper>
          <Logo />
          <MainMenu/>
        </HeaderWrapper>
      </Container>
    </StyledSection>
  );
}

export default Header;
