import React, {useState, useEffect} from "react";
import Modules from "../modules/modules";
import Systems from "../systems/systems";
import Platform from "../platform/platform";
import Os from "../os/os";
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

  const [namePlatform, setNamePlatform] = useState(complexes[0].name);

  useEffect(() => {
    const productArticle = `${platformArticle}${osArticle ? "-ОС_" + osArticle : "" }${moduleArticle ? "-М_" + moduleArticle : "" }${systemArticle ? "-И_" + systemArticle : ""}`
    const productPrice = Number(platformPrice) +  Number(osPrice) +  Number(modulePrice) +  Number(systemPrice);
    onChange && onChange(productArticle, productPrice, namePlatform);
  }, [platformArticle, osArticle, moduleArticle, systemArticle]);


  const changePlatformHandler = (art, prc, name) => {
    setPlatformArticle(art);
    setPlatformPrice(prc);
    setNamePlatform(name);
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
    <div >
      <Platform platform={complexes} onChange={changePlatformHandler}/>
      <Os os={os} onChange={changeOsHandler} />
      <Modules modules={modules} maxModules={MAX_MODULES} onChange={changeModuleHandler}/>
      <Systems modules={systems} maxModules={MAX_SYSTEMS} onChange={changeSystemHandler}/>
    </div>
  );
}

export default CalcForm;
