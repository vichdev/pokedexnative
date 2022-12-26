import { TYPES } from "../enums/types";

function clicaBotao() {
  return {
    type: TYPES.BOTAO_CLICADO,
  };
}

function getPokemons(pokemons: Array<any>): any {
  console.log(pokemons);

  return {
    type: TYPES.GET_POKEMONS,
    payload: {
      pokemons: pokemons,
    },
  };
}

export { getPokemons, clicaBotao };
