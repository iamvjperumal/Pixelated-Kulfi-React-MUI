import { Typography } from "@mui/material";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import Grid from "@mui/material/Grid2";
import GameCardSkeleton from "./skeletons/GameCardSkeleton";
import { GameGenre } from "../hooks/useGameGenres";

interface GameGridProps {
  selectedGenre: GameGenre | null;
}
const GameGrid = ({ selectedGenre }: GameGridProps) => {
  const { data, isLoading, error } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && <Typography variant="h5">{error}</Typography>}
      <Grid container spacing={2}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <GameCardSkeleton key={skeleton} />{" "}
            </Grid>
          ))}
        {data.map((game) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <GameCard game={game} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GameGrid;
