import React from "react";
import logoImage from "../../../assets/logo.png";
import StyledLogo from "./styles";


const Logo = () => {
  return (
    <StyledLogo href="/">
      <img
        src={logoImage}
        alt={"Логотип"}
        width={183}
        height={57}
      />
    </StyledLogo>
  )
}

export default Logo;
