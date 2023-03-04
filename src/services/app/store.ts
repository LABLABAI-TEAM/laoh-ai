import { useDispatch } from "react-redux";
import {
  configureStore,
  Action,
  CombinedState,
  combineReducers,
  // @ts-ignore
} from "@reduxjs/toolkit";
import {Middleware} from  "redux"
import { ThunkAction, ThunkActionDispatch } from "redux-thunk";
import logger from "redux-logger";
import {
  persistCombineReducers,
  persistReducer,
  createTransform,
  PersistConfig,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { TransformCredentials } from "./persist";
import rootReducer, { RootState } from "./rootReducer";
import GlobalReducer from "../features/globalstate/GlobalStateSlice";

const persistConfig: PersistConfig<RootState, any, any> = {
  key: "root",
  storage,
  whitelist: ["auth"],
  transforms: [TransformCredentials],
};

// const rootReducer = combineReducers({
//   global: persistReducer(persistConfig, GlobalReducer),
// });

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  //   reducer: persistedReducer,
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: ({})=> Middleware[]) =>
    getDefaultMiddleware({ serializableCheck: true }).concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export type appDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
export type rootThunk = ThunkAction<void, RootState, unknown, Action>;
export default store;
