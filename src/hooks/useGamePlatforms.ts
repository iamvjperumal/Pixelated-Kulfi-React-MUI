import useData from "./useData";

export interface GamePlatform {
  id: number;
  name: string;
  slug: string;
}

const useGamesPlatforms = () =>
  useData<GamePlatform>("/platforms/list/parents");
export default useGamesPlatforms;
