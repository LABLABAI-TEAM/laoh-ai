import { RootState } from "@/services/app/rootReducer";
import { IPOKE, TPokemon } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IPOKE = {
  search: "",
  startupPokemon: [],
};

const pokeslice = createSlice({
  initialState,
  name: "pokeslice",
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setStartupPokemon: (state, action: PayloadAction<TPokemon[]>) => {
      state.startupPokemon = action.payload;
    },
  },
});

const { actions, reducer } = pokeslice;
export const { setSearch, setStartupPokemon } = actions;
export default reducer;
const search = (state: RootState) => state.pokeslice.search;
const startupPokemon = (state: RootState) => state.pokeslice.startupPokemon;
export { search, startupPokemon };
