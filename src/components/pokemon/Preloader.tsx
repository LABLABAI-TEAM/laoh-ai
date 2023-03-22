import React from "react";
import { useAppDispatch } from "@/services/app/rootReducer";
import { setStartupPokemon } from "@/services/features/pokemon/PokemonStateSlice";
import { TPokemon } from "@/types/types";

const Preloader: React.FC<{ pokemon: TPokemon[] }> = ({ pokemon }) => {
  const dispatch = useAppDispatch();
  const loaded = React.useRef();
  if (!loaded.current) {
    dispatch(setStartupPokemon(pokemon));
  }
  return null;
};

export default Preloader;
