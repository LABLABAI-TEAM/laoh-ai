import { RootState } from "@/services/app/rootReducer";
import { TGlobal } from "@/types/types";
import {
  createSelector,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

const initialState: TGlobal = {
  onRouteClick: true,
  isResponse: false,
};

const globalState = createSlice({
  initialState,
  name: "global",
  reducers: {
    setRouteClick: (state) => {
      state.onRouteClick = !state.onRouteClick;
    },
    setResponse: (state) => {
      state.isResponse = !state.isResponse;
    },
  },
  extraReducers: {},
});

const { actions, reducer } = globalState;
export const { setRouteClick } = actions;
const onRouteClickS = (state: RootState) => state.global.onRouteClick;
const isResponseS = (state: RootState) => state.global.isResponse;
export { onRouteClickS, isResponseS };
export default reducer;
