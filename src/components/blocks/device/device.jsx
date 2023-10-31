import React, { useState } from "react";
import CheckboxList from "../checkbox-list/checkbox-list";
import RadioButtonList from "../radio-button-list/radio-button-list";
function Device({
  calcData: {complexes = [], os = [], modules = [], systems = []}
}) {
  const [selectComplex, setSelectComplex] = useState(complexes[0].id);
  const complex = complexes.find((complex) => complex.id === selectComplex);
  const complexPrice = complex ? complex.price : 0;

  const [selectOs, setSelectOs] = useState(os[0].id);
  const opSys = os.find((osys) => osys.id === selectOs);
  const osPrice = opSys ? opSys.price : 0;

  const [selectModuleIds, setSelectModuleIds] = useState([]);
  const selectModules = selectModuleIds.map((id) => modules.find((module)=>module.id === id));
  const modulePrice = selectModules.reduce((sum, module) =>  sum += module.price, 0);

  const [selectSystemIds, setsSelectSystemIds] = useState([]);
  const selectSystems = selectSystemIds.map((id) => systems.find((system)=>system.id === id));
  const systemsPrise = selectSystems.reduce((sum, system) =>  sum += system.price, 0);
  const systemPrice = systemsPrise ? systemsPrise + 1100000 : 0

  const fullPrice = systemPrice + complexPrice + osPrice + modulePrice;


  return (
    <>
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
      <p>Стоимость платформы: {complexPrice}</p>
      <p>Стоимость ОС: {osPrice}</p>
      <p>Стоимость программных модулей: {modulePrice}</p>
      <p>Стоимость подключаемых систем: {systemPrice}</p>
      <p>Общая стоимость: {fullPrice}</p>
    </>
  );
}

export default Device;
