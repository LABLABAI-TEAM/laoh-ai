import { createSelector, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { TPokemon } from "@/types/types";
import { RootState } from "@/services/app/rootReducer";
import { search } from "../pokemon/PokemonStateSlice";

export const pokemonapi = createApi({
  reducerPath: "pokemonapi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  tagTypes: ["pokemon"],
  endpoints: (builders) => ({
    search: builders.query<TPokemon[], string>({
      query: (q) => `search?name=${q}`,
      providesTags: (result, error, search) => [{ type: "pokemon", search }],
    }),
  }),
});

const { reducer, reducerPath, endpoints } = pokemonapi;
const pokeData = (state: RootState) =>
  state.pokemonapi.queries[`search(${search})`]?.data as TPokemon[];
export default reducer;

export { pokeData };
