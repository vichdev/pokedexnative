import { combineReducers } from "redux";

//Reducers
import pokemonsReducer from "./modules/Pokemons/reducer";
import generalReducer from "./modules/General/reducer";

export default combineReducers({
  pokemon: pokemonsReducer,
  general: generalReducer,
});
