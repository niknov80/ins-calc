import React, { useState } from "react";
import CheckboxList from "../checkbox-list/checkbox-list";
import RadioButtonList from "../radio-button-list/radio-button-list";
function CalcForm({
  calcData: {complexes = [], os = [], modules = [], systems = []},
  onChange
}) {
  const [selectComplex, setSelectComplex] = useState(complexes[0].id);
  const complex = complexes.find((complex) => complex.id === selectComplex);
  const complexPrice = complex ? complex.price : 0;
  const complexArticle = complex.article;
  const complexName = complex.name;

  const [selectOs, setSelectOs] = useState(os[0].id);
  const opSys = os.find((osys) => osys.id === selectOs);
  const osPrice = opSys ? opSys.price : 0;
  const osArticle = `ОС_${opSys.article}`;

  const [selectModuleIds, setSelectModuleIds] = useState([]);
  const selectModules = selectModuleIds.map((id) => modules.find((module)=>module.id === id));
  const modulePrice = selectModules.reduce((sum, module) =>  sum += module.price, 0);
  const moduleArticles = selectModules.reduce((sum, module) =>  sum += `_${module.article}`, "");
  const moduleArticle = moduleArticles ? `-И${moduleArticles}` : "";

  const [selectSystemIds, setsSelectSystemIds] = useState([]);
  const selectSystems = selectSystemIds.map((id) => systems.find((system)=>system.id === id));
  const systemsPrise = selectSystems.reduce((sum, system) =>  sum += system.price, 0);
  const systemPrice = systemsPrise ? systemsPrise + 1100000 : 0
  const systemsArticle = selectSystems.reduce((sum, system) =>  sum += `_${system.article}`, "");
  const systemArticle = systemsArticle ? `-М${systemsArticle}` : "";

  const fullPrice = systemPrice + complexPrice + osPrice + modulePrice;
  const article = `${complexArticle} (${osArticle}${moduleArticle}${systemArticle})`;

  const handleChange = () => {
    onChange(fullPrice, article, complexName);
  }

  return (
    <div onChange={handleChange}>
      <RadioButtonList
        listName={"Выберите аппаратную платформу"}
        options={complexes}
        name={"product"}
        selectValue={selectComplex}
        onChange={(el) => setSelectComplex(el.target.value)}
      />
      <RadioButtonList
        listName={"Выберите операционную систему"}
        options={os}
        name={"os"}
        selectValue={selectOs}
        onChange={(el) => setSelectOs(el.target.value)}
      />
      <CheckboxList
        listName={"Выберите программный модуль"}
        name={"module"}
        options={modules.map((product) => ({
          value: product.id,
          title: product.name
        }))}
        selectValues={selectModuleIds}
        onChange={setSelectModuleIds}
      />
      <CheckboxList
        listName={"Выберите подключаемые системы"}
        name={"integration"}
        options={systems.map((product) => ({
          value: product.id,
          title: product.name
        }))}
        selectValues={selectSystemIds}
        onChange={setsSelectSystemIds}
      />
    </div>
  );
}

export default CalcForm;
