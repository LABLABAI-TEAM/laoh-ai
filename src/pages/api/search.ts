import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import pokemon from "@/pokemon.json";

export async function GET(req: NextRequest, res: NextApiResponse) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  const pokemonData = pokemon.filter((p) =>
    p.name.toLowerCase().includes(name!.toLowerCase() ?? "")
  );
  // return res.status(200).json(pokemonData.slice(0, 10));
  return NextResponse.json(pokemonData.slice(0, 10));
}
