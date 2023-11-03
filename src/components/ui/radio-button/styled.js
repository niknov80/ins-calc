import styled from "styled-components";
import {Li} from "../../styled";

export const StyledRadioButton = styled(Li)`
  display: flex;
  
  position: relative;
  
  & p {
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 2px;
  }
  
  & label {
    position: relative;
    display: flex;
    justify-content: start;
    align-items: start;
    cursor: pointer;
    column-gap: 10px;
    width: 100%;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0;
      margin-left: 0;
      order: -1;

      width: 20px;
      height: 20px;

      border: 1px solid ${(props) => props.theme.colorBgListHeader};
      border-radius: 50%;

      transition: border 0.3s ease;
      &::before {
        border-radius: 50%;
        content: "";
        width: 16px;
        height: 16px;

        background-color: ${(props) => props.theme.colorWhite};
        transition: background-color 0.3s ease;
      }
      
    }
  }
  
  & input:checked + span {
    border: 1px solid ${(props) => props.theme.colorBgListHeader};

    &::before {
      background-color: ${(props) => props.theme.colorBgListHeader};
    }
  }
  
  & input:disabled + span,
  & input:disabled ~ div{
    opacity: 0.5;
  }
`;

export const StyledText = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  column-gap: 10px;
  width: 100%;
`;
