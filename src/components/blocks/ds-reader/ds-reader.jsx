import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import RadioButtonList from "../../ui/radio-button-list/radio-button-list";
import {dsStore} from "../../../stores";

const DsReader = ({cardReader}) => {
  useEffect(() => {
    const defaultReader = cardReader.find((item) => item.id === cardReader[0].id);
    dsStore.setDefaultDsReader(defaultReader);
    dsStore.setSelectedDsReader(defaultReader);
  }, []);

  const changeHandle = (evt) => {
    const selectedReader =  cardReader.find((item) => item.id === evt.target.value);
    dsStore.setSelectedDsReader(selectedReader);
    dsStore.calcDsAttributes()
  }

  return (
    <RadioButtonList
      listName={"Выберите считыватель"}
      options={cardReader}
      name={"dsReader"}
      selectValue={dsStore.getSelectedDsReaderId}
      onChange={changeHandle}
    />
  )
}

export default observer (DsReader);
