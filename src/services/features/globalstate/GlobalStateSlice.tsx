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
  isLoading: true,
};

const globalState = createSlice({
  initialState,
  name: "global",
  reducers: {
    setRouteClick: (state) => {
      state.onRouteClick = !state.onRouteClick;
    },
    setResponse: (state: TGlobal) => {
      state.isResponse = !state.isResponse;
    },
    setLoading: (state: TGlobal) => {
      state.isLoading = !state.isLoading;
    },
  },
  extraReducers: {},
});

const { actions, reducer } = globalState;
export const { setRouteClick, setLoading, setResponse } = actions;
const onRouteClickS = (state: RootState) => state.global.onRouteClick;
const isResponseS = (state: RootState) => state.global.isResponse;
const isLoadingS = (state: RootState) => state.global.isLoading;
const globalStates = (state: RootState) => state.global;
export { onRouteClickS, isResponseS, isLoadingS, globalStates };
export default reducer;
