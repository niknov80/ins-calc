import {StyledRadioButton, StyledText} from "./styled";
import {VisuallyHiddenInput} from "../../styled";

function RadioButton({
  selectValue,
  value, // значение
  name, // имя
  text, // текст элемента
  price, // цена
  onChange, // событие при изменении
  isDisable
}) {
  const isChecked = value === selectValue;
  const priceText = value === "win-cln" || value === "win-srv" ? "По запросу"  : `${price.toLocaleString('ru-RU')} руб.`

  return (
    <StyledRadioButton>
      <label>
        <VisuallyHiddenInput
          type="radio"
          value={value}
          name={name}
          checked={isChecked}
          onChange={onChange}
          disabled={isDisable}
        />
        <span></span>
        <StyledText>
          <p>{text}</p>
          <p>{priceText}</p>
        </StyledText>
      </label>
    </StyledRadioButton>
  );
}
export default RadioButton;
