import styled from "styled-components";
import {Label, Toggler} from "../../styled";

export const StyledRadioButton = styled(Toggler)`
  & label {
    span {
      border-radius: 50%;
      
      &::before {
        border-radius: 50%;        
    }
  }
`;

export const StyledText = styled(Label)``;
