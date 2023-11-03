import React from "react";
import RadioButton from "../radio-button/radio-button";
import Title, {TitleLevel} from "../title/title";
import {StyledRadioButtonList, StyledUl} from "./styles";

function RadioButtonList({
  listName,
  options,
  selectValue,
  name,
  onChange
}) {
  return (
    <StyledRadioButtonList>
      <Title level={TitleLevel.H2} className={"list__title"}>{listName}</Title>
      <StyledUl>
        {options.map((item) =>(
          <RadioButton
            key={item.index}
            selectValue={selectValue}
            value={item.id}
            price={item.price}
            name={name}
            text={item.name}
            onChange={onChange}
          />
        ))}
      </StyledUl>
    </StyledRadioButtonList>
  );
}

export default RadioButtonList;
