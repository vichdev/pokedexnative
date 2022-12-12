import React from "react";
import { ButtonProps } from "react-native";
import { IPropsButton } from "./interfaces/IPropsButton";
import { Button } from "./styles";

const PokeButton: React.FC<ButtonProps & IPropsButton> = ({ title, color }) => {
  return <Button title={title} color={color} />;
};

export default PokeButton;
