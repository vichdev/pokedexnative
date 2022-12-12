import { Text, TouchableOpacityProps } from "react-native";
import { IPropsButton } from "./interfaces/IPropsButton";
import { Button, ButtonTitle } from "./styles";

const PokeButton: React.FC<TouchableOpacityProps & IPropsButton> = ({
  title,
  color,
  textColor,
  onPress,
}) => {
  return (
    <Button color={color} onPress={onPress}>
      <ButtonTitle textColor={textColor}>{title}</ButtonTitle>
    </Button>
  );
};

export default PokeButton;
