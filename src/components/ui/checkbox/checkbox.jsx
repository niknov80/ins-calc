import React, {useState} from "react";
import {Li} from "../../styled/li/li";
const Checkbox = ({
  index, // уникальный идентификатор
  isChecked, // начальное состояние чекбокса
  isCheckDisable, // флаг проверяет надо ли блокировать чекбокс
  value, // значение
  name, // имя
  text, // текст лейбла
  onChange // событие при изменении
}) => {

  const [checked, setChecked] = useState(isChecked);
  const changeHandler = () => {
    setChecked(!checked)
    onChange && onChange(index)
  }

  return (
    <Li>
      <label>
        <input
          type="checkbox"
          value={value}
          name={name}
          checked={checked}
          onChange={changeHandler}
          disabled={isCheckDisable ? !checked : false}
        />
        <span>{text}</span>
      </label>
    </Li>
  );
}
export default Checkbox;
