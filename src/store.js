import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "./components/Counter/counterSlice";
import sessionReducer from "./components/Sessions/sessionSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    session: sessionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;