import React from "react";
import RadioButton from "../radio-button/radio-button";
import {Ul} from "../../styled/ul/ul";

function RadioButtonList({
  listName,
  options,
  selectValue,
  name,
  onChange
}) {
  return (
    <div>
      <h2>{listName}</h2>
      <Ul>
        {options.map((item) =>(
          <RadioButton
            key={item.index}
            selectValue={selectValue}
            value={item.id}
            name={name}
            text={item.name}
            onChange={onChange}
          />
        ))}
      </Ul>
    </div>
  );
}

export default RadioButtonList;
