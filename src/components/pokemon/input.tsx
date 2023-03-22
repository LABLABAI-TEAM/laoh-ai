import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/services/app/rootReducer";
import {
  search,
  setSearch,
  startupPokemon,
} from "@/services/features/pokemon/PokemonStateSlice";
import {
  pokeData,
  pokemonapi,
} from "@/services/features/pokemonapi/PokemonApi";
import PokemonTable from "./PokemonTable";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(search);
  const mainData = useAppSelector(pokeData);
  const startupPOKE = useAppSelector(startupPokemon);
  React.useEffect(() => {
    pokemonapi.endpoints.search.initiate(searchValue);
  }, [dispatch, searchValue]);

  return (
    <>
      <input
        type={"text"}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        value={searchValue}
      />
      <PokemonTable data={search.length ? mainData ?? [] : startupPOKE} />
    </>
  );
};

export default SearchInput;
