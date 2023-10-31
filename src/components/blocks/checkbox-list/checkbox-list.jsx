import React from "react";
import Checkbox from "../../ui/checkbox/checkbox";
import {StyledFieldset} from "../../styled/section/section";

function CheckboxList({
  listName,
  selectValues, // массив выбранных значений
  options, // массив с объектами для выбора {title: заголовок, value: значение}
  name, // имя
  onChange, // событие при изменении
  onClickLabel = () => {}
}) {
  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };

  return (
    <StyledFieldset as="fieldset">
      <legend>{listName}</legend>
      <ul>
        {options.map((option, index) => (
          <li key={option.value}>
            <Checkbox
              isChecked={selectValues.includes(option.value)}
              name={name}
              value={option.value}
              text={option.title}
              onClick={(value) => onClickLabel(value, index)}
              onChange={handleChange}
            />
          </li>
        ))}
      </ul>
    </StyledFieldset>
  );
}

export default CheckboxList;
