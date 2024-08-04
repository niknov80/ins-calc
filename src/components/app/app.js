import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import {calcData} from "../../mocks/calcData.js"
import PageIndex from "../../pages/page-index";
import PagePak from "../../pages/page-pak";
import PageDs from "../../pages/page-ds";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Routes>
          <Route path='/' element={<PageWrapper calcData={calcData}/>}>
            <Route index element={<PageIndex />} />
            <Route path='/pak' element={<PagePak calcData={calcData}/>} />
            <Route path='/ds' element={<PageDs calcData={calcData}/>} />
          </Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;
