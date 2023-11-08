import React from "react";
import { GlobalStyle } from "./styles";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import {calcData} from "../../mocks/calcData.js"

function App() {
  return (
    <>
      <GlobalStyle/>
      <PageWrapper calcData={calcData}/>
    </>
  );
}

export default App;
