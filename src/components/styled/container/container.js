import styled from "styled-components";

const Container = styled.div`
  max-width: ${(props) => props.theme.pageWidth};
  width: 100%;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  margin-left: auto;
  margin-right: auto;
`;

export default Container;
