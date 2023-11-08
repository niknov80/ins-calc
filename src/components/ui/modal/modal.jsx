import React from "react";
import {StyledSection, Wrapper} from "./styles";


const Modal = ({
  active,
  setActive,
  children
}) => {
  return (
    <StyledSection className={active && "active"} onClick={() => setActive(false)}>
      <Wrapper onClick={(evt) => evt.stopPropagation()}>
        {children}
      </Wrapper>
    </StyledSection>
  )
}
export default Modal;
