import { TPokemon } from "@/types/types";
import React from "react";

const PokemonTable: React.FC<{ data: TPokemon[] }> = ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, id }, index) => (
            <tr key={id}>{name}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonTable;
