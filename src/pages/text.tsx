import PokemonTable from "@/components/pokemon/PokemonTable";
import { TPokemon } from "@/types/types";
import React from "react";

const text: React.FC<{ data: TPokemon[] }> = ({ data }) => {
  return (
    <div>
      <PokemonTable data={data} />
    </div>
  );
};
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/search`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default text;
