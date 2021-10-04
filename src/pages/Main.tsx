import React, { useCallback, useEffect, useState } from "react";
import { fetchList, selectPokemons } from "store/reducers/pokemons.reducer";
import { useAppDispatch, useAppSelector } from "store/hooks";
import api from "service/api";
import Case from "components/Case";
import List from "components/List";
import Loading from "components/Loading";
const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const pokemons = useAppSelector(selectPokemons);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const request = useCallback((pointer) => {
    console.log(pointer);
    if (pointer) {
      const offset = pointer.split("?");
      return api.get(`pokemon?${offset[1]}`);
    }

    return api.get("pokemon");
  }, []);

  const fetchData = useCallback(() => {
    if (!isLoading) {
      setIsLoading(true);
      request(pokemons?.next)
        .then(({ data }: any) => {
          const results =
            data?.results?.map((item: any, index: number) => ({
              id: index + 1,
              ...item,
            })) || [];
          dispatch(fetchList({ ...data, results }));
        })
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    }
  }, [dispatch, isLoading, pokemons, request]);

  useEffect(() => {
    fetchData();
  }, []);

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
    <Case footer={FooterCase} loadMore={fetchData}>
      {pokemons.results && <List data={pokemons.results} />}
      {isLoading && <Loading />}
    </Case>
  );
};

export default Main;
