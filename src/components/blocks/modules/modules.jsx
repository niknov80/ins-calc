import React, {useEffect, useState} from "react";
import CheckboxList from "../../ui/checkbox-list/checkbox-list";

const Modules = ({
  modules,
  maxModules,
  onChange,
  uncheck,
  reset
}) => {
  const [selectIds, setsSelectIds] = useState([]);
  useEffect(() => {
    if (reset) {
      setsSelectIds([]);
    }
  }, [reset]);
  const changeHandler = (value) => {
    setsSelectIds(value);
    const selectModules = value.map((id) => modules.find((item) => item.index === id));
    const articles = [];
    const ids = [];
    selectModules.forEach((item) => {
      articles.push(item.article);
      ids.push((item.id).toUpperCase());
    })
    const article = articles.join("_");
    const price = selectModules.reduce((sum, item) =>  sum += item.price, 0);
    const fullId = ids.join(", ");
    onChange && onChange(article, price, fullId);
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
      reset={reset}
    />
  );
}

export default Modules;
