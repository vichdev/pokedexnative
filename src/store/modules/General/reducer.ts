import { IGeneralState } from "./interfaces/IGeneralState";
import { TYPES } from "../enums/types";

const generalState: IGeneralState = {
  isLoading: false,
};

export default function generalReducer(
  state = generalState,
  action: { type: TYPES; payload: { loading: boolean } }
): IGeneralState {
  switch (action.type) {
    case TYPES.SET_LOADING: {
      const { loading } = action.payload;
      let newState: IGeneralState;
      newState = { ...state, isLoading: loading };
      return newState;
    }
    default: {
      return { ...state };
    }
  }
}
