import React, {useEffect} from "react";
import Modules from "../../blocks/modules/modules";
import Systems from "../../blocks/systems/systems";
import Platform from "../../blocks/platform/platform";
import Os from "../../blocks/os/os";
import {StyledDeviceList} from "./styles";
import {observer} from "mobx-react-lite";

const CalcForm = ({
  calcData: {complexes = [], os = [], modules = [], systems = []}
}) =>  {
  const MAX_MODULES = 5 // максимальное количество модулей
  const MAX_SYSTEMS = 3 // максимальное количество подключаемых систем

  return (
    <StyledDeviceList >
      <Platform platform={complexes} />
      <Os os={os} />
      <Modules modules={modules} maxModules={MAX_MODULES} />
      <Systems modules={systems} maxModules={MAX_SYSTEMS + 1} />
    </StyledDeviceList>
  );
}

export default observer (CalcForm);
