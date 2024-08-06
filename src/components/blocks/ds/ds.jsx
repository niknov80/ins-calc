import React, {useEffect} from "react";
import {dsStore} from "../../../stores";
import RadioButtonList from "../../ui/radio-button-list/radio-button-list";
import {observer} from "mobx-react-lite";

const Ds = ({ds}) => {
  useEffect(() => {
    dsStore.setSelectedDs(ds.find((item) => item.id === ds[0].id));
  }, []);

  const changeHandle = (evt) => {
    const selectedDs =  ds.find((item) => item.id === evt.target.value);
    dsStore.setSelectedDs(selectedDs);
    dsStore.calcDsAttributes()
  }

  return (
    <RadioButtonList
      listName={"Выберите аппаратную платформу"}
      options={ds}
      name={"ds"}
      selectValue={dsStore.getSelectedDsId}
      onChange={changeHandle}
    />
  )
}
export default observer (Ds);
