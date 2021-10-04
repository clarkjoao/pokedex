import React, { useCallback } from "react";
import { useHistory } from "react-router";

interface IListProps {
  data: any[];
}
const List: React.FC<IListProps> = ({ data }) => {
  const history = useHistory();
  const handleClick = useCallback(
    (id) => {
      history.push(`details?id=${id}`);
    },
    [history]
  );

  if (data.length < 1)
    return (
      <div className="list">
        <h3>No data.</h3>
      </div>
    );

  return (
    <div className="list">
      {data?.map((item, index) => (
        <div
          onClick={() => handleClick(item?.id)}
          className="list__item cursor-pointer bg-dark-hover d-flex flex-row align-items-center border-bottom border-muted mt-2"
        >
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
            <span>Nº {item?.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
