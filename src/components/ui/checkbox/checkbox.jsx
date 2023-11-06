import React, {useState} from "react";
import {VisuallyHiddenInput} from "../../styled";
import {StyledCheckbox, StyledText} from "./styles";
const Checkbox = ({
  index, // уникальный идентификатор
  isChecked, // начальное состояние чекбокса
  isCheckDisable, // флаг проверяет надо ли блокировать чекбокс
  value, // значение
  nameList, // имя
  text, // текст лейбла
  price, // цена
  onChange, // событие при изменении
  uncheck,
  item
}) => {

  const [checked, setChecked] = useState(isChecked);

  const changeHandler = () => {
    setChecked(!checked)
    onChange && onChange(index)
  }

  return (
    <StyledCheckbox>
      <label>
        <VisuallyHiddenInput
          type="checkbox"
          value={value}
          name={nameList}
          checked={uncheck ? false : checked}
          onChange={changeHandler}
          disabled={uncheck ? true : isCheckDisable ? !checked : false}
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
export default Checkbox;
