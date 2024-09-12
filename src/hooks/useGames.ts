import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useData";
import { GameQuery } from "../App";
import APIClient from "../services/apiClients";

const apiClient = new APIClient<Game>("/games");

export interface GamePlatform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: GamePlatform }[];
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["Games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
        },
      }),
  });
export default useGames;
