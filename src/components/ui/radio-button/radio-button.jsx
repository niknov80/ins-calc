import {Li} from "../../styled/li/li";

function RadioButton({
  selectValue,
  value, // значение
  name, // имя
  text, // текст элемента
  onChange // событие при изменении
}) {
  const isChecked = value === selectValue;

  return (
    <Li>
      <label>
        <input
          type="radio"
          value={value}
          name={name}
          checked={isChecked}
          onChange={onChange}
        />
        <span>{text}</span>
      </label>
    </Li>
  );
}
export default RadioButton;
