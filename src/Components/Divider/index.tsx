import React from "react";
import { IPropsDivider } from "./interfaces/IPropsDivider";
import { DividerContent } from "./styles";

const Divider: React.FC<IPropsDivider> = ({ horizontal = true, color }) => {
  return <DividerContent horizontal={horizontal}></DividerContent>;
};

export default Divider;
