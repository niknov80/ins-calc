import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {dsStore} from "../../../stores";
import DsRadioButtonList from "../../ui/radio-button-list/ds-rdio-button-list";

const DsMod = ({modification}) => {
  useEffect(() => {
    const defaultMod = modification.find((item) => item.id === modification[0].id);
    dsStore.setDefaultDsMod(defaultMod);
    dsStore.setSelectedDsMod(defaultMod);
  }, []);

  const changeHandle = (evt) => {
    const selectedMod =  modification.find((item) => item.id === evt.target.value);
    dsStore.setSelectedDsMod(selectedMod);
    dsStore.calcDsAttributes();
  }

  return (
    <DsRadioButtonList
      listName={"Выберите исполнение"}
      options={modification}
      name={"ds-mod"}
      selectValue={dsStore.getSelectedDsModId}
      onChange={changeHandle}
    />
  )
}

export default observer (DsMod);
