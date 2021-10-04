import React, { useEffect, useState } from "react";
import { increment, selectPokemons } from "store/reducers/pokemons.reducer";
import { useAppDispatch, useAppSelector } from "store/hooks";
import api from "service/api";
import Case from "components/Case";
import List from "components/List";
const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const pokemons = useAppSelector(selectPokemons);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = () => {
    setIsLoading(true);
    api
      .get("pokemon/?limit=893")
      .then(({ data }: any) => {
        const pokemons =
          data?.results?.map((item: any, index: number) => ({
            id: index + 1,
            ...item,
          })) || [];
        dispatch(
          increment({
            count: data?.count,
            next: data?.next,
            previous: data?.previous,
            pokemons,
          })
        );
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(fetchData, [dispatch]);

  const FooterCase: React.FC = () => (
    <>
      <input
        id="search"
        type="text"
        className="info-input"
        placeholder="Search Pokemon Name or ID"
      />
      <div>
        <button
          onClick={() => console.log("teste")}
          className="findButton mt-2"
        />
      </div>
    </>
  );

  return (
    <div className="d-flex align-items-center justify-content-center vw-100 vh-100">
      <Case footer={FooterCase}>
        <List data={pokemons.pokemons} />
      </Case>
    </div>
  );
};

export default Main;
