import { useEffect, useState } from "react";
import { sortFromMinToMaxPrice } from "../utils";

export const useTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [error, setError] = useState();
  
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const { searchId } = await fetch(
          "https://front-test.beta.aviasales.ru/search"
        ).then((res) => res.json());

        const { tickets } = await fetch(
          `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
        ).then((res) => res.json());

        setTickets(tickets.sort(sortFromMinToMaxPrice));
        setFiltered(tickets);
      } catch (error) {
      console.log({ error });
        setError(error);
      }
    };

    fetchTickets();
  }, []);

  return { tickets, filtered, setFiltered, error };
};
