import React from "react";
import {VisuallyHiddenInput} from "../../styled";
import {StyledCheckbox, StyledText} from "./styles";
import {observer} from "mobx-react-lite";
const Checkbox = ({
  index, // уникальный идентификатор
  value, // значение
  nameList, // имя
  text, // текст лейбла
  price, // цена
  onChange, // событие при изменении
  isCheck,
  isDisabled
}) => {

  const changeHandler = () => {
    onChange && onChange(index)
  }

  return (
    <StyledCheckbox>
      <label>
        <VisuallyHiddenInput
          type="checkbox"
          value={value}
          name={nameList}
          checked={isCheck}
          onChange={changeHandler}
          disabled={isDisabled}
        />
        <span></span>
        <StyledText>
          <p>{text}</p>
          <p>{price.toLocaleString('ru-RU')} руб.</p>
        </StyledText>
      </label>
    </StyledCheckbox>
  );
}
export default observer (Checkbox);
