import React from "react";
import {FooterWrapper, StyledSection} from "./styles";
import {Container} from "../../styled";
function Footer() {
  return (
    <StyledSection as="footer">
      <Container>
        <FooterWrapper>
          <span>ООО "Квиксет" Комплексные поставки технических средств безопасности для выполнения монтажных работ на объекте.</span>
        </FooterWrapper>
      </Container>
    </StyledSection>
  );
}

export default Footer;
