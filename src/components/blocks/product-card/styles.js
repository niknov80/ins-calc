import styled from "styled-components";

export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colorForBorderList};
  border-radius: ${(props) => props.theme.borderRadiusForList};
  align-self: start;
  position: sticky;
  top: 30px;
  row-gap: 10px;
  padding-bottom: 10px;
  box-shadow: ${(props) => props.theme.boxShadow};
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.mobileWidth}) {
    align-self: stretch;
    position: unset;
    order: -1;
  }
`;

export const ProductOptionList = styled.dl`
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 20px;
  row-gap: 10px;
  margin: 0 0 0 20px;
`;

export const StyledTerm = styled.dt`
  margin: 0;
  line-height: 20px;
`;

export const StyledDefinition = styled.dd`
  margin: 0;
  line-height: 20px;
`;
