import styled from "styled-components";

const Label = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  column-gap: 10px;
  width: 100%;
    
  & p:last-child {
      justify-self: end;
  }
`;

export default Label;
