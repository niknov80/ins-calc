import React from "react";
import CheckboxList from "../../ui/checkbox-list/checkbox-list";
import {appStore} from "../../../stores";
import {observer} from "mobx-react-lite";

const Modules = ({
  modules,
  maxModules
}) => {
  const changeHandler = (value) => {
    const selectModules = value.map((id) => modules.find((item) => item.index === id));
    appStore.addModule(selectModules);
    appStore.calcPakAttributes();
  }

  return (
    <CheckboxList
      listName={"Выберите программный модуль"}
      nameList="module"
      options={modules}
      selectValues={appStore.getModulesId}
      onChange={changeHandler}
      maxModules={maxModules}
      uncheck={appStore.getTypePlatform === 3}
    />
  );
}

export default observer (Modules);
