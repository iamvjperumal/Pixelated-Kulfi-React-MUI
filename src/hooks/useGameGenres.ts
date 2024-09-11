import { useEffect, useState } from "react";
import apiClients from "../services/apiClients";
import { CanceledError } from "axios";

export interface GameGenre {
  id: number;
  name: string;
}

interface FetchGameGenreResponse {
  count: number;
  results: GameGenre[];
}
const useGamesGenres = () => {
  const [gamesGenres, setGamesGenres] = useState<GameGenre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClients
      .get<FetchGameGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => setGamesGenres(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { gamesGenres, error };
};

export default useGamesGenres;
