import React from "react";
import RadioButton from "../../ui/radio-button/radio-button";
import {StyledFieldset} from "../../styled/section/section";

function RadioButtonList({
  listName,
  options,
  selectValue,
  name,
  onChange
}) {
  return (
    <StyledFieldset as="fieldset">
      <legend>{listName}</legend>
      <ul>
        {options.map((option, index) =>(
          <li key={option.id}>
            <RadioButton
              selectValue={selectValue}
              value={option.id}
              name={name}
              text={option.name}
              onChange={onChange}
            />
          </li>
        ))}
      </ul>
    </StyledFieldset>
  );
}

export default RadioButtonList;
