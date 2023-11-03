import React, {useState} from "react";
import Checkbox from "../checkbox/checkbox";
import {Ul} from "../../styled/ul/ul";

const CheckboxList = ({
  listName, // Заголовок списка
  selectValues, // массив выбранных значений
  options, // массив с объектами для выбора {title: заголовок, value: значение}
  name, // имя
  onChange, // событие при изменении
  maxModules
}) => {
  const [isCheckDisable, setIsCheckDisable] = useState(false);
  const changeHandler = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);

    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }

    if (newValue.length >= maxModules) {
      setIsCheckDisable(true);
    } else {
      setIsCheckDisable(false);
    }

    onChange && onChange(newValue.sort());
  };

  return (
    <div>
      <h2>{listName}</h2>
      <Ul>
        {options.map((item) => (
          <Checkbox
            key={item.index}
            value={item.id}
            text={item.name}
            name={name}
            {...item}
            onChange={changeHandler}
            isCheckDisable={isCheckDisable}
          />
        ))}
      </Ul>
    </div>
  );
}

export default CheckboxList;
