import {StyledRadioButton, StyledText} from "./styled";
import {VisuallyHiddenInput} from "../../styled";

function RadioButton({
  selectValue,
  value, // значение
  name, // имя
  text, // текст элемента
  price, // цена
  onChange // событие при изменении
}) {
  const isChecked = value === selectValue;

  return (
    <StyledRadioButton>
      <label>
        <VisuallyHiddenInput
          type="radio"
          value={value}
          name={name}
          checked={isChecked}
          onChange={onChange}
        />
        <span></span>
        <StyledText>
          <p>{text}</p>
          <p>{price} руб.</p>
        </StyledText>
      </label>
    </StyledRadioButton>
  );
}
export default RadioButton;
