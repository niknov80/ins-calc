import React from "react";
import {FooterWrapper, StyledSection} from "./styles";
import {Container} from "../../styled";
function Footer() {
  return (
    <StyledSection as="footer">
      <Container>
        <FooterWrapper>
          <span>v0.9.0</span>
        </FooterWrapper>
      </Container>
    </StyledSection>
  );
}

export default Footer;
