import { IPokemonState } from "./interfaces/IPokemonState";
import { TYPES } from "../enums/types";

const pokemonState: IPokemonState = {
  pokemons: [],
};

export default function pokemonReducer(state = pokemonState, action) {
  switch (action.type) {
    case TYPES.BOTAO_CLICADO: {
      return state;
    }
    case TYPES.GET_POKEMONS: {
      if (state) {
        const { pokemons } = action.payload;

        let data = {
          ...state,
          pokemons: [...pokemons],
        };

        return data;
      }
    }
    default: {
      return { ...state };
    }
  }
}
