 function RadioButton({
  selectValue,
  value, // значение
  name, // имя
  text, // текст элемента
  onChange // событие при изменении
}) {
  const isChecked = value === selectValue;

  return (
    <label>
      <input
        type="radio"
        value={value}
        name={name}
        checked={isChecked}
        onChange={onChange}
      />
      {text}
    </label>
  );
}
export default RadioButton;
