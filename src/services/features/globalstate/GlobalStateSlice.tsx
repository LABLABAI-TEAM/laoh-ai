import { RootState } from "@/services/app/rootReducer";
import { TGlobal } from "@/types/types";
import {
  createSelector,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

const initialState: TGlobal = {
  onRouteClick: false,
};

const globalState = createSlice({
  initialState,
  name: "global",
  reducers: {
    setRouteClick: (state) => {
      state.onRouteClick = !state.onRouteClick;
    },
  },
  extraReducers: {},
});

const { actions, reducer } = globalState;
export const { setRouteClick } = actions;
const onRouteClickS = (state: RootState) => state.global.onRouteClick;
export { onRouteClickS };
export default reducer;
