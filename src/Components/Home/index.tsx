import { FlatList } from "react-native";
import Divider from "../Divider";
import * as Styles from "./styles";
import { useSelector } from "react-redux";
import PokeCard from "../PokeCard";

const Home: React.FC = () => {
  const pokemons = useSelector((state: any) => state.pokemon.pokemons);

  return (
    <Styles.MainWrapper>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <PokeCard pokemon={item} />}
        ItemSeparatorComponent={Divider}
      />
    </Styles.MainWrapper>
  );
};

export default Home;
