import React, {useState} from "react";
import {VisuallyHiddenInput} from "../../styled";
import {StyledCheckbox, StyledText} from "./styles";
const Checkbox = ({
  index, // уникальный идентификатор
  isChecked, // начальное состояние чекбокса
  isCheckDisable, // флаг проверяет надо ли блокировать чекбокс
  value, // значение
  name, // имя
  text, // текст лейбла
  price, // цена
  onChange // событие при изменении
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
          name={name}
          checked={checked}
          onChange={changeHandler}
          disabled={isCheckDisable ? !checked : false}
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
