import React from "react";
import Checkbox from "../checkbox/checkbox";

import Title, {TitleLevel} from "../title/title";
import {StyledCheckboxList, StyledUl} from "./styles";
import {observer} from "mobx-react-lite";
import Paragraph from "../paragrraph/paragraph";

const CheckboxList = ({
  listName, // Заголовок списка
  selectValues, // массив выбранных значений
  options, // массив с объектами для выбора {title: заголовок, value: значение}
  nameList, // имя
  onChange, // событие при изменении
  maxModules,
  uncheck,
  desc = ''
}) => {
  const changeHandler = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);

    if (indexValue !== -1) {
      if (newValue.length === 2) {
        newValue.splice(indexValue, 1);
        nameList ==='system' && newValue.splice(0, 1);
      } else {
        newValue.splice(indexValue, 1);
      }
    } else {
      if (!newValue.includes(400) && nameList === 'system') {
        newValue.push(400);
      }
      newValue.push(value);
    }
    onChange && onChange(newValue.sort());
  };

  return (
    <StyledCheckboxList>
      <Title level={TitleLevel.H2} className={"list__title"}>{listName}</Title>
      {desc !== '' && <Paragraph>{desc}</Paragraph>}
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
            isCheck = {selectValues.includes(item.index)}
            isDisabled = {uncheck || (selectValues.length >= maxModules && !selectValues.includes(item.index)) || item.index === 400}
          />
        ))}
      </StyledUl>
    </StyledCheckboxList>
  );
}

export default observer (CheckboxList);
