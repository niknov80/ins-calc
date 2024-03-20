import React, {useState, useEffect} from "react";
import CheckboxList from "../../ui/checkbox-list/checkbox-list";

const Systems = ({
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
    const ids = []
    selectModules.forEach((item) => {
      articles.push(item.article);
      ids.push((item.id).toUpperCase());
    })
    const article = articles.join("_");
    const fullId = ids.join(", ");
    const price =  selectModules.reduce((sum, item) =>  sum += item.price, 0);
    onChange && onChange(article, price > 0 ? price : 0, fullId );
  }

  return (
    <>
      <CheckboxList
        listName={"Выберите подключаемую систему (до 3-х систем)"}
        nameList="system"
        options={modules}
        selectValues={selectIds}
        onChange={changeHandler}
        maxModules={maxModules}
        uncheck={uncheck === 4}
        reset={reset}
      />
    </>
  );
}

export default Systems;
