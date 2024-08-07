import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {dsStore} from "../../../stores";
import DsRadioButtonList from "../../ui/radio-button-list/ds-rdio-button-list";

const DsOs = ({dsOs}) => {
  useEffect(() => {
    const defaultOs = dsOs.find((item) => item.id === dsOs[0].id);
    dsStore.setDefaultDsOs(defaultOs);
    dsStore.setSelectedDsOs(defaultOs);
  }, []);

  const changeHandle = (evt) => {
    const selectedOs =  dsOs.find((item) => item.id === evt.target.value);
    dsStore.setSelectedDsOs(selectedOs);
    dsStore.calcDsAttributes()
  }

  return (
    <DsRadioButtonList
      listName={"Выберите операционную систему"}
      options={dsOs}
      name={"dsOs"}
      selectValue={dsStore.getSelectedDsOsId}
      onChange={changeHandle}
    />
  )
}

export default observer (DsOs);
