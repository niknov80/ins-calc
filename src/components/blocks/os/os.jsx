import React, {useEffect} from "react";
import RadioButtonList from "../../ui/radio-button-list/radio-button-list";
import {appStore} from "../../../stores";
import {observer} from "mobx-react-lite";

const Os = ({
  os
}) => {
  useEffect(() => {
    const defaultOs = os.find((item) => item.id === os[0].id)
    appStore.setDefaultOs(defaultOs);
    appStore.setSelectedOS(defaultOs);
  }, []);

  const changeHandle = (evt) => {
    const selectOs =  os.find((item) => item.id === evt.target.value);
    appStore.setSelectedOS(selectOs)
    appStore.calcPakAttributes();
  }

  return (
    <RadioButtonList
      listName={"Выберите операционную систему"}
      options={os}
      name={"os"}
      selectValue={appStore.getOSId}
      onChange={changeHandle}
    />
  )
}

export default observer (Os);
