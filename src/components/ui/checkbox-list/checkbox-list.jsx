import React, {useState} from "react";
import Checkbox from "../checkbox/checkbox";

import Title, {TitleLevel} from "../title/title";
import {StyledCheckboxList, StyledUl} from "./styles";

const CheckboxList = ({
  listName, // Заголовок списка
  selectValues, // массив выбранных значений
  options, // массив с объектами для выбора {title: заголовок, value: значение}
  nameList, // имя
  onChange, // событие при изменении
  maxModules,
  uncheck,
  reset
}) => {

  const [isCheckDisable, setIsCheckDisable] = useState(false);
  const [isSelected, setIsSelected] = useState(false);


  const changeHandler = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);

    if (indexValue !== -1) {
      if (newValue.length === 2) {
        newValue.splice(indexValue, 1);
        newValue.splice(0, 1);
      } else {
        newValue.splice(indexValue, 1);
      }
    } else {
      if (!newValue.includes(400)) {
        newValue.push(400);
      }
      newValue.push(value);
    }

    if (newValue.length > 0) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }

    if (newValue.length >= maxModules) {
      setIsCheckDisable(true);
    } else {
      setIsCheckDisable(false);
    }
    console.log(selectValues);
    onChange && onChange(newValue.sort());
  };

  return (
    <StyledCheckboxList>
      <Title level={TitleLevel.H2} className={"list__title"}>{listName}</Title>
      <StyledUl>
        {options.map((item) => (
          <Checkbox
            key={item.index}
            value={item.id}
            text={item.name}
            price={item.price}
            nameList={nameList}
            {...item}
            onChange={changeHandler}
            isCheckDisable={isCheckDisable}
            uncheck={uncheck}
            reset={reset}
            selected={isSelected}
          />
        ))}
      </StyledUl>
    </StyledCheckboxList>
  );
}

export default CheckboxList;
