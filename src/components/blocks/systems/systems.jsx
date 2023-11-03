import React, {useState} from "react";
import CheckboxList from "../../ui/checkbox-list/checkbox-list";

const Systems = ({
  modules,
  maxModules,
  onChange
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
    const price = selectModules.reduce((sum, item) =>  sum += item.price, 0);
    onChange && onChange(article, price);
  }

  return (
    <CheckboxList
      listName="Выберите програмный модуль"
      name="system"
      options={modules}
      selectValues={selectIds}
      onChange={changeHandler}
      maxModules={maxModules}
    />
  );
}

export default Systems;
