import styled from "styled-components";
import {Li, Section, Ul} from "../../styled";

export const StyledFooterSection= styled(Section)`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 0;
  background-color: ${(props) => props.theme.colorFooterBg};
  color: ${(props) => props.theme.colorTextFooter};
`;

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    column-gap: 10%;
    min-height: 80px;
    padding: 90px 25px;
`;

export const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 33px;
  padding-bottom: 33px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Copyright = styled.p`
  font-size: ${(props) => props.theme.fontSizeFooter};
  line-height: ${(props) => props.theme.lineHeightFooter};
  color: ${(props) => props.theme.colorCopyright};
  text-align: center;
`;

export const FooterDescription = styled.p`
  font-size: ${(props) => props.theme.fontSizeFooter};
  line-height: ${(props) => props.theme.lineHeightFooter};
`;

export const ContactList = styled(Ul)`
  padding-left: 0;
`;

export const ContactItem = styled(Li)`
    display: flex;
    align-items: center;
    column-gap: 10px;
    font-size: ${(props) => props.theme.fontSizeContactItem};
    line-height: ${(props) => props.theme.lineHeightFooter};
`;

export const Address = styled.address`
    font-style: normal;
    font-size: ${(props) => props.theme.fontSizeContactItem};
    line-height: ${(props) => props.theme.lineHeightFooter};
`;

export const ContactLink = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.colorTextFooter};
    font-size: ${(props) => props.theme.fontSizeContactItem};
    line-height: ${(props) => props.theme.lineHeightFooter};
    &:hover {
        color: ${(props) => props.theme.colorBgListHeader};
    }
`;
