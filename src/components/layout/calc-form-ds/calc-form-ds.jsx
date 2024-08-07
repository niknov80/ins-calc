import React from "react";
import {StyledDeviceList} from "./styles";
import {observer} from "mobx-react-lite";
import Ds from "../../blocks/ds/ds";
import DsOs from "../../blocks/ds-os/ds-os";
import DsMod from "../../blocks/ds-mod/ds-mod";
import DsReader from "../../blocks/ds-reader/ds-reader";

const CalcFormDs = ({
  calcData: {ds = [], dsOs = [], modification = [], cardReader = []}
}) =>  {

  return (
    <StyledDeviceList >
      <Ds ds={ds}/>
      <DsOs dsOs={dsOs}/>
      <DsMod modification={modification}/>
      <DsReader cardReader={cardReader}/>
    </StyledDeviceList>
  );
}

export default observer (CalcFormDs);
