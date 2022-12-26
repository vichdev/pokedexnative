import PokeButton from "../PokeButton";
import * as Styles from "./styles";
import { BUTTON } from "../../enums/Strings/Button/stringsButton";
import logo from "../../../assets/logo.png";
import theme from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import * as pokemonActions from "../../store/modules/Pokemons/actions";
import * as generalActions from "../../store/modules/General/actions";
import { api } from "../../services/api";
import { useState } from "react";
import Loading from "../Loading";

const InitialAcess: React.FC = () => {
  const [pokemons, setPokemons] = useState<Array<any>>([]);
  const isLoading = useSelector((state: any) => state.general.isLoading);

  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const onPress = async () => {
    await obterPokemons();
  };

  const obterPokemons = async () => {
    dispatch(generalActions.setLoading(true));
    await api
      .get("pokemon")
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((_e) => {
        console.log(_e);
      })
      .finally(() => {
        pokemons.forEach((item, index) => {
          obterDadoDoPokemon(item.url, index);
        });
      });
    dispatch(generalActions.setLoading(false));
  };

  const obterDadoDoPokemon = async (pokemonUrl: string, index: number) => {
    dispatch(generalActions.setLoading(true));
    await api
      .get(`${pokemonUrl}`)
      .then((response) => {
        pokemons[index] = response.data;
      })
      .catch((_e) => {
        console.log(_e);
      })
      .finally(() => {
        dispatch(pokemonActions.getPokemons(pokemons));
      });
    dispatch(generalActions.setLoading(false));
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
      <Loading />
    </Styles.Container>
  );
};

export default InitialAcess;
