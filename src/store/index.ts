import { configureStore } from "@reduxjs/toolkit";
import reducer from "./rootReducer";

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["*"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["*"],
        // Ignore these paths in the state
        ignoredPaths: ["*"],
      },
    }),
});

export default store;
