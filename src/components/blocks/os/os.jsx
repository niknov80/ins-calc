import React, {useEffect, useState} from "react";
import RadioButtonList from "../../ui/radio-button-list/radio-button-list";

const Os = ({
  os,
  onChange,
  typePlatform,
  reset
}) => {
  const [selectIds, setsSelectIds] = useState(os[0].id);

  useEffect(() => {
    if(reset) {
      setsSelectIds(os[0].id)
    }
  }, [reset, os])

  const changeHandle = (evt) => {
    setsSelectIds(evt.target.value);
    const selectOs =  os.find((item) => item.id === evt.target.value);
    onChange && onChange(selectOs.article, selectOs.price);
  }

  return (
    <RadioButtonList
      listName={"Выберите аппаратную платформу"}
      options={os}
      name={"os"}
      selectValue={selectIds}
      onChange={changeHandle}
      typePlatform={typePlatform}
    />
  )
}

export default Os;
