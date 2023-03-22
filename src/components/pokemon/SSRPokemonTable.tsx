import React from "react";
import PokemonTable from "./PokemonTable";
import { useSelector } from "react-redux";
import { startupPokemon } from "@/services/features/pokemon/PokemonStateSlice";

const SSRPokemonTable = () => {
  const data = useSelector(startupPokemon);
  return (
    <div>
      <PokemonTable data={data} />
    </div>
  );
};

export default SSRPokemonTable;
