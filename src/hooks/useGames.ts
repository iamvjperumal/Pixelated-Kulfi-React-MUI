import useData from "./useData";
import { GameGenre } from "./useGameGenres";

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

const useGames = (selectedGenre: GameGenre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);
export default useGames;
