import React from "react";
import CheckboxList from "../../ui/checkbox-list/checkbox-list";
import {appStore} from "../../../stores";
import {observer} from "mobx-react-lite";

const Systems = ({
  modules,
  maxModules
}) => {
    const changeHandler = (value) => {
    const selectModules = value.map((id) => modules.find((item) => item.index === id));
    appStore.addSystems(selectModules);
    appStore.calcPakAttributes();
  }

  return (
    <>
      <CheckboxList
        listName={"Выберите подключаемую систему (до 3-х систем)"}
        nameList="system"
        options={modules}
        selectValues={appStore.getSystemsId}
        onChange={changeHandler}
        maxModules={maxModules}
        uncheck={appStore.getTypePlatform === 4}
        desc={'*Стоимость первого модуля составляет 700 000 руб.'}
      />
    </>
  );
}

export default observer (Systems);
