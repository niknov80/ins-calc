import React from "react";
import {Container} from "../components/styled";
import Title, {TitleLevel, TitleSize} from "../components/ui/title/title";

const PageDs = ({calcData}) => {
  return (
    <Container>
      <Title className={"header"} level={TitleLevel.H1} size={TitleSize.BIG}>Подберите конфигурацию<br/><span>Диалоговой станции</span></Title>
    </Container>
  )
}
export default PageDs;
