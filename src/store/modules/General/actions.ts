import { TYPES } from "../enums/types";

function setLoading(loading: boolean): {
  type: string;
  payload: {
    status: boolean;
  };
} {
  return {
    type: TYPES.SET_LOADING,
    payload: {
      status: loading,
    },
  };
}

export { setLoading };
