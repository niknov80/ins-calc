import React, {useState, useEffect} from "react";
import Modules from "../../blocks/modules/modules";
import Systems from "../../blocks/systems/systems";
import Platform from "../../blocks/platform/platform";
import Os from "../../blocks/os/os";
import {StyledDeviceList} from "./styles";
function CalcForm({
  calcData: {complexes = [], os = [], modules = [], systems = []},
  onChange
}) {
  const MAX_MODULES = 3 // максимальное количество модулей
  const MAX_SYSTEMS = 5 // максимальное количество подключаемых систем

  const [platformArticle, setPlatformArticle] = useState(complexes[0].article);
  const [osArticle, setOsArticle] = useState(os[0].article);
  const [moduleArticle, setModuleArticle] = useState("");
  const [systemArticle, setSystemArticle] = useState("");

  const [platformPrice, setPlatformPrice] = useState(complexes[0].price);
  const [osPrice, setOsPrice] = useState(os[0].price);
  const [modulePrice, setModulePrice] = useState("");
  const [systemPrice, setSystemPrice] = useState("");
  const [typePlatform, setTypePlatform] = useState(complexes[0].type);
  const [typeOs, setTypeOs] = useState(complexes[0].typeOs);

  const [namePlatform, setNamePlatform] = useState(complexes[0].name);

  useEffect(() => {
    const productArticle = `${platformArticle}${osArticle ? " - ОС_" + osArticle : "" }${moduleArticle ? " - М_" + moduleArticle : "" }${systemArticle ? " - И_" + systemArticle : ""}`
    const productPrice = Number(platformPrice) +  Number(osPrice) +  Number(modulePrice) +  Number(systemPrice);
    onChange && onChange(productArticle, productPrice, namePlatform);
  }, [platformArticle, osArticle, moduleArticle, systemArticle, modulePrice, namePlatform, onChange, osPrice, platformPrice, systemPrice]);


  const changePlatformHandler = (art, prc, name, tp, os) => {
    setPlatformArticle(art);
    setPlatformPrice(prc);
    setNamePlatform(name);
    setTypePlatform(tp);
    setTypeOs(os);
  }

  const changeOsHandler = (art, prc) => {
    setOsArticle(art);
    setOsPrice(prc)
  }

  const changeModuleHandler = (art, prc) => {
    setModuleArticle(art);
    setModulePrice(prc);
  }

  const changeSystemHandler = (art, prc) => {
    setSystemArticle(art);
    setSystemPrice(prc);
  }


  return (
    <StyledDeviceList >
      <Platform platform={complexes} onChange={changePlatformHandler}/>
      <Os typePlatform={typeOs} os={os} onChange={changeOsHandler} />
      <Modules uncheck={typePlatform} modules={modules} maxModules={MAX_MODULES} onChange={changeModuleHandler}/>
      <Systems uncheck={typePlatform} modules={systems} maxModules={MAX_SYSTEMS} onChange={changeSystemHandler}/>
    </StyledDeviceList>
  );
}

export default CalcForm;
