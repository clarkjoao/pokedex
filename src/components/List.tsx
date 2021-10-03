import React from "react";
import { selectPokemons } from "store/reducers/pokemons.reducer";
import { useAppSelector } from "store/hooks";

const List: React.FC = () => {
  const pokemons = useAppSelector(selectPokemons);
  return (
    <div style={{ overflow: "auto" }}>
      {pokemons.pokemons.map((item, index) => (
        <h1 key={index}>{item.name}</h1>
      ))}
    </div>
  );
};

export default List;
