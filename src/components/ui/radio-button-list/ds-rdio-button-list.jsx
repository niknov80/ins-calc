import React from "react";
import RadioButton from "../radio-button/radio-button";
import Title, {TitleLevel} from "../title/title";
import {StyledRadioButtonList, StyledUl} from "./styles";
import {observer} from "mobx-react-lite";
import {dsStore} from "../../../stores";

function DsRadioButtonList({
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
            isDisable={ dsStore.getSelectedDsIndex === 502 && item.id === "floor"  } // Активно если выбирается платформа, выбрано NoOS или платформа для всех ОС, иначе проверяется для какой платформы ОС
          />
        ))}
      </StyledUl>
    </StyledRadioButtonList>
  );
}

export default observer (DsRadioButtonList);
