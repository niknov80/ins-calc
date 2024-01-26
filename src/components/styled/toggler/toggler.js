import styled from "styled-components";
import {Li} from "../../styled";

const Toggler = styled(Li)`
  display: flex;
  position: relative;
  
  & p {
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;

    @media(max-width: ${(props) => props.theme.mobileWidth}) {
      padding-top: 0;
    }
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

      width: 14px;
      height: 14px;

      border: 2px solid ${(props) => props.theme.colorBgListHeader};
      transition: border 0.3s ease;
      
      &::before {
        content: "";
        width: 10px;
        height: 16px;

        //background-color: ${(props) => props.theme.colorWhite};
        transition: background-color 0.3s ease;
      }
    }
  }
  
  & input:checked + span {
    border: 2px solid ${(props) => props.theme.colorBgListHeader};

    &::before {
      content: "\\2713";
      //background-color: ${(props) => props.theme.colorBgListHeader};
    }
  }
  
  & input:disabled + span,
  & input:disabled ~ div{
    opacity: 0.3;
  }
`;

export default Toggler;
