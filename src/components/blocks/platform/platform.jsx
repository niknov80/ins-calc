import React, {useEffect} from "react";
import RadioButtonList from "../../ui/radio-button-list/radio-button-list";
import {appStore} from "../../../stores";
import {observer} from "mobx-react-lite";

const Platform = ({
  platform
}) => {
  useEffect(() => {
    appStore.setSelectedPlatform(platform.find((item) => item.id === platform[0].id));
  }, []);

  const changeHandle = (evt) => {
    const selectPlatform =  platform.find((item) => item.id === evt.target.value);
    appStore.setSelectedPlatform(selectPlatform);
    appStore.reset();
    appStore.calcPakAttributes();
  }

  return (
    <RadioButtonList
      listName={"Выберите аппаратную платформу"}
      options={platform}
      name={"platform"}
      selectValue={appStore.getPlatformId}
      onChange={changeHandle}
    />
  )
}

export default observer (Platform);
