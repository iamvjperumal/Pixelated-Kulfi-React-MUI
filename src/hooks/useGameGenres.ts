import useData from "./useData";

export interface GameGenre {
  id: number;
  name: string;
  image_background: string;
}

const useGamesGenres = () => useData<GameGenre>("/genres");
export default useGamesGenres;
