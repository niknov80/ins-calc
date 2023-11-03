import React, {useState} from "react";
import RadioButtonList from "../../ui/radio-button-list/radio-button-list";

const Os = ({
  os,
  onChange
}) => {
  const [selectIds, setsSelectIds] = useState(os[0].id);

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
    />
  )
}

export default Os;
