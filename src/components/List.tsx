import React from "react";
import { selectPokemons } from "store/reducers/pokemons.reducer";
import { useAppSelector } from "store/hooks";

const List: React.FC = () => {
  const pokemons = useAppSelector(selectPokemons);
  return (
    <div className="list" style={{ overflow: "auto" }}>
      {pokemons.pokemons.map((item, index) => (
        <div className="list__item d-flex flex-row align-items-center border-bottom border-muted mt-2">
          <span
            className="list__img me-2"
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item?.id}.png)`,
            }}
          />
          <div>
            <h3 key={item.id} className="m-0 text-capitalize">
              {item.name}
            </h3>
            <span>Nº{item?.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
