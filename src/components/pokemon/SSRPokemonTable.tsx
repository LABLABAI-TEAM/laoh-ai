import React from "react";
import PokemonTable from "./PokemonTable";

const SSRPokemonTable = () => {
  return (
    <div>
      <PokemonTable data={[]} />
    </div>
  );
};

export default SSRPokemonTable;
