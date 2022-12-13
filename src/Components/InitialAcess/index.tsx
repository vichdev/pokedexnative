import PokeButton from "../PokeButton";
import * as Styles from "./styles";
import { BUTTON } from "../../enums/Strings/Button/stringsButton";
import logo from "../../../assets/logo.png";
import theme from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";

const InitialAcess: React.FC = () => {
  const navigation = useNavigation<any>();

  const onPress = () => {
    navigation.navigate("main");
  };

  return (
    <Styles.Container>
      <Styles.LogoContainer>
        <Styles.Logo source={logo} style={{ resizeMode: "contain" }} />
      </Styles.LogoContainer>
      <Styles.ButtonWrapper>
        <PokeButton
          title={BUTTON.ACESSAR}
          color={theme.colors.yellow}
          onPress={onPress}
        />
      </Styles.ButtonWrapper>
    </Styles.Container>
  );
};

export default InitialAcess;
