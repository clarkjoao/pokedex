export interface IPokemonAbilities{
 ability: {
  name:  string;
  url:  string;
 };
 is_hidden: false;
 slot: 1;
}
export interface IPokemonTypes{
 slot: number,
 type: {
  name: string;
  url: string;
 }
}
export interface IPokemon {
  abilities: IPokemonAbilities[];
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  name: string
  order: number;
  types: IPokemonTypes[];
  weight: number;
}