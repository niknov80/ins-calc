import styled from "styled-components";

const Container = styled.div`
  max-width: ${(props) => props.theme.pageWidth};
  width: 100%;
  padding-left: ${(props) => props.theme.pagePaddingLeft};
  padding-right: ${(props) => props.theme.pagePaddingRight};
  margin-left: auto;
  margin-right: auto;

  @media(max-width: ${(props) => props.theme.laptopLWidth}) {
      padding-left: ${(props) => props.theme.pagePaddingLaptopLeft};
      padding-right: ${(props) => props.theme.pagePaddingLaptopRight};
      width: 94%;
  }

  @media(max-width: ${(props) => props.theme.mobileWidth}) {
    padding-left: ${(props) => props.theme.pagePaddingMobile};
    padding-right: ${(props) => props.theme.pagePaddingMobile};
  }
`;

export default Container;
