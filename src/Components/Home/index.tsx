import PokeButton from "../PokeButton";
import * as Styles from "./styles";
import { BUTTON } from "../../enums/Strings/Button/stringsButton";
import React from "react";
import logo from "../../../assets/logo.png";
import theme from "../../styles/theme";

const Home: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.LogoContainer>
        <Styles.Logo source={logo} style={{ resizeMode: "contain" }} />
      </Styles.LogoContainer>
      <Styles.ButtonWrapper>
        <PokeButton title={BUTTON.ACESSAR} color={theme.colors.yellow} />
      </Styles.ButtonWrapper>
    </Styles.Container>
  );
};

export default Home;
