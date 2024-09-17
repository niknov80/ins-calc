import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Address,
  ContactItem, ContactLink,
  ContactList,
  Copyright, CopyrightWrapper,
  FooterDescription,
  FooterWrapper,
  StyledFooterSection
} from "./styles";
import {Container} from "../../styled";
import Logo from "../../ui/logo/logo";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons/faLocationDot";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";




function Footer() {
  return (
    <StyledFooterSection as="footer">
      <Container>
        <FooterWrapper>
          <Logo/>
          <FooterDescription>ООО "Квиксет" Комплексные поставки технических средств безопасности для выполнения монтажных работ на объекте.</FooterDescription>
          <ContactList>
            <ContactItem>
              <FontAwesomeIcon icon={faLocationDot} color="#a77ab3"/>
              <Address>119019, г. Москва, ул. Арбат, дом 6/2, помещение 1/1/4, оф. 321</Address>
            </ContactItem>
            <ContactItem>
              <FontAwesomeIcon icon={faEnvelope} color="#a77ab3"/>
              Email <ContactLink href="mailto:info@quick-set.ru">info@quick-set.ru</ContactLink>
            </ContactItem>
            <ContactItem>
              <FontAwesomeIcon icon={faPhone} color="#a77ab3"/>
              Тел: <ContactLink href="tel:+74952252389">+7 (495) 225-23-89</ContactLink>
            </ContactItem>
          </ContactList>
        </FooterWrapper>
      </Container>
      <CopyrightWrapper>
        <Copyright>© 2022-2024 Квиксет - Все права защищены. All rights reserved.</Copyright>
      </CopyrightWrapper>
    </StyledFooterSection>
  );
}

export default Footer;
