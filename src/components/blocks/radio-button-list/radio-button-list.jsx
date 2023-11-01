import React from "react";
import RadioButton from "../../ui/radio-button/radio-button";
import {StyledFieldset} from "../../styled/section/section";
import {Ul} from "../../styled/ul/ul";
import {Li} from "../../styled/li/li";

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
      <Ul>
        {options.map((option, index) =>(
          <Li key={option.id}>
            <RadioButton
              selectValue={selectValue}
              value={option.id}
              name={name}
              text={option.name}
              onChange={onChange}
            />
          </Li>
        ))}
      </Ul>
    </StyledFieldset>
  );
}

export default RadioButtonList;
