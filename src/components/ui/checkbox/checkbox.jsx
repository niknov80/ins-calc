import React, {useEffect, useState} from "react";
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
  reset
}) => {

  const [checked, setChecked] = useState(isChecked);
  const [disable, setDisable] = useState(false);

  const changeHandler = () => {
    setChecked(!checked)
    onChange && onChange(index)
  }

  useEffect(() => {
    if (uncheck) {
      setChecked(false);
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [uncheck])

  useEffect(() => {
    if (reset) {
      if (!uncheck) {
        setDisable(false);
      }
      setChecked(false);
    }
  }, [reset])

  useEffect(() => {
    if (isCheckDisable) {
      setDisable(!checked);
    } else {
      setDisable(false);
    }
  }, [isCheckDisable])


  return (
    <StyledCheckbox>
      <label>
        <VisuallyHiddenInput
          type="checkbox"
          value={value}
          name={nameList}
          checked={checked}
          onChange={changeHandler}
          disabled={disable}
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
