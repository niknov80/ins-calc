import React, {useState} from "react";
import CheckboxList from "../../ui/checkbox-list/checkbox-list";

const Caption = ({children}) => {
  return (
    <p>
      {children}
    </p>
  );
}

const Systems = ({
  modules,
  maxModules,
  onChange,
  uncheck
}) => {
  const [selectIds, setsSelectIds] = useState([]);
  const changeHandler = (value) => {
    setsSelectIds(value);
    const selectModules = value.map((id) => modules.find((item) => item.index === id));
    const articles = [];
    selectModules.forEach((item) => {
      articles.push(item.article);
    })
    const article = articles.join("_");
    const price =  selectModules.reduce((sum, item) =>  sum += item.price, 0);

    onChange && onChange(article, price > 0 ? price + 1100000 : 0 );
  }

  return (
    <>
      <CheckboxList
        listName={"Выберите програмный модуль"}
        nameList="system"
        options={modules}
        selectValues={selectIds}
        onChange={changeHandler}
        maxModules={maxModules}
        uncheck={uncheck === 4}
      />
      <Caption>Стоимость первой подключаемой системы 1 450 000 руб, остальные 350 000 руб.</Caption>
    </>
  );
}

export default Systems;
