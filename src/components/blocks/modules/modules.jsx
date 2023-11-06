import React, {useState} from "react";
import CheckboxList from "../../ui/checkbox-list/checkbox-list";

const Modules = ({
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
    const price = selectModules.reduce((sum, item) =>  sum += item.price, 0);
    onChange && onChange(article, price);
  }

  return (
    <CheckboxList
      listName={"Выберите программный модуль"}
      nameList="module"
      options={modules}
      selectValues={selectIds}
      onChange={changeHandler}
      maxModules={maxModules}
      uncheck={uncheck === 3}
    />
  );
}

export default Modules;
