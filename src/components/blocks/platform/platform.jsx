import React, {useState} from "react";
import RadioButtonList from "../../ui/radio-button-list/radio-button-list";

const Platform = ({
  platform,
  onChange
}) => {
  const [selectIds, setsSelectIds] = useState(platform[0].id);

  const changeHandle = (evt) => {
    setsSelectIds(evt.target.value);
    const selectPlatform =  platform.find((item) => item.id === evt.target.value);
    onChange && onChange(selectPlatform.article, selectPlatform.price, selectPlatform.name, selectPlatform.type, selectPlatform.typeOs);
  }

  return (
    <RadioButtonList
      listName={"Выберите аппаратную платформу"}
      options={platform}
      name={"platform"}
      selectValue={selectIds}
      onChange={changeHandle}
    />
  )
}

export default Platform;
