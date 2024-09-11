import { Typography } from '@mui/material';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import Grid from '@mui/material/Grid2';

const GameGrid = () => {

    const {games, error} = useGames();
  return (
    <>
     {error && <Typography variant='h5'>{error}</Typography>}
     <Grid container spacing={2}>
     {games.map(game =>     <Grid size={{ xs: 12, sm : 6, md: 3, lg: 4 }}>
     <GameCard game={game}/>
  </Grid> )}

    </Grid>

    </>
   
  )
}

export default GameGrid