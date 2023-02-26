import {
  AnyAction,
  combineReducers,
  ThunkMiddleware,
  ThunkDispatch,
  Store,
  configureStore,
} from "@reduxjs/toolkit";

import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import GlobalReducer from "../features/globalstate/GlobalStateSlice";

const rootReducer = combineReducers({
  global: GlobalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export type AppThunkMiddleware = ThunkMiddleware<RootState, any, AnyAction>;

export type AppStore = Omit<Store<RootState, AnyAction>, "dispatch"> & {
  dispatch: AppThunkDispatch;
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [],
  devTools: process.env.NODE_ENV !== "production",
});

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
