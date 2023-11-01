import React from "react";
import Checkbox from "../../ui/checkbox/checkbox";
import {StyledFieldset} from "../../styled/section/section";
import {Ul} from "../../styled/ul/ul";
import {Li} from "../../styled/li/li";


function CheckboxList({
  listName,
  selectValues, // массив выбранных значений
  options, // массив с объектами для выбора {title: заголовок, value: значение}
  name, // имя
  onChange, // событие при изменении
  // onClickLabel = () => {}
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
    console.log(value);
  };

  // console.log(selectValues);

  return (
    <StyledFieldset as="fieldset">
      <legend>{listName}</legend>
      <Ul>
        {options.map((option, index) => (
          <Li key={option.value}>
            <Checkbox
              isChecked={selectValues.includes(option.value)}
              name={name}
              value={option.value}
              text={option.title}
              // onClick={(value) => onClickLabel(value, index)}
              onChange={handleChange}
            />
          </Li>
        ))}
      </Ul>
    </StyledFieldset>
  );
}

export default CheckboxList;
