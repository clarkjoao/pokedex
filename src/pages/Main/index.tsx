import React, { useEffect, useState } from "react";
import { increment, selectPokemons } from "store/reducers/pokemons.reducer";
import { useAppDispatch, useAppSelector } from "store/hooks";
import List from "components/List";
import api from "service/api";
const Main: React.FC = () => {
  const dispatch = useAppDispatch();

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

  return (
    <div className="d-flex align-items-center justify-content-center vw-100 vh-100">
      <div className="case d-flex flex-column bg-primary">
        <div className="display d-flex align-items-center justify-content-center">
          <div className="screen d-flex align-items-center justify-content-center p-3 me-2">
            <div className="screen__content w-100 h-100 bg-white p-2">
              <List />
            </div>
          </div>
        </div>
        <footer className="footer d-flex flex-column align-items-center justify-content-center mt-4">
          <input
            id="search"
            type="text"
            className="info-input"
            placeholder="Search Pokemon Name or ID"
          />
          <div>
            <button className="findButton mt-2"> </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Main;
