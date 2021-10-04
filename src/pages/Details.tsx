import Case from "components/Case";
import { IPokemon } from "types/pokemon";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import api from "service/api";
import Loading from "components/Loading";

type ParamTypes = {
  id: string;
};

const Details: React.FC = () => {
  const history = useHistory();
  let { id } = useParams<ParamTypes>();
  const [currentPokemon, setCurrentPokemon] = useState<IPokemon>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetchData = () => {
    if (!id) history.goBack();
    setLoading(true);
    api
      .get(`pokemon/${id}`)
      .then(({ data }) => setCurrentPokemon(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };
  useEffect(fetchData, [history, id]);

  const FooterCase: React.FC = () => (
    <div>
      <button onClick={() => history.goBack()} className="findButton mt-2" />
    </div>
  );

  const DetailCard: React.FC = () => (
    <div>
      <div>
        <img
          alt="pokemon"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentPokemon?.id}.png`}
          className="img-thumbnail"
        />
      </div>
      <div className="text-center">
        <h1>{currentPokemon?.name}</h1>
        <span>Nº {currentPokemon?.id}</span>
      </div>
      <div>{currentPokemon?.base_experience}</div>
      <div>{currentPokemon?.height}</div>
      <div>{currentPokemon?.id}</div>
      <div>{currentPokemon?.name}</div>
      <div>{currentPokemon?.weight}</div>
    </div>
  );
  return (
    <Case footer={FooterCase}>{isLoading ? <Loading /> : <DetailCard />}</Case>
  );
};

export default Details;
