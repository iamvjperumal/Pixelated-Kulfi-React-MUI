import { Typography } from "@mui/material";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import Grid from "@mui/material/Grid2";

const GameGrid = () => {
  const { data, error } = useGames();
  return (
    <>
      {error && <Typography variant="h5">{error}</Typography>}
      <Grid container spacing={2}>
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
