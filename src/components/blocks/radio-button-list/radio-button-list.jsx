import React, {useState} from "react";
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
      {options.map((option) =>(
        <RadioButton
          selectValue={selectValue}
          value={option.id}
          name={name}
          text={option.name}
          onChange={onChange}
        />
      ))}
    </StyledFieldset>
  );
}

export default RadioButtonList;
