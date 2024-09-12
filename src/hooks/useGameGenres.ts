import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useData";
import APIClient from "../services/apiClients";

export interface GameGenre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<GameGenre>("/genres");

const useGamesGenres = () =>
  useQuery<FetchResponse<GameGenre>, Error>({
    queryKey: ["GameGenre"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    // initalData: {count: data.length, results: data}
  });
export default useGamesGenres;
