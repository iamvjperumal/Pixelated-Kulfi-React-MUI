import { Typography } from '@mui/material';
import useGames from '../hooks/useGames';



const GameGrid = () => {

    const {games, error} = useGames();
  return (
    <>
     <div>GameGrid</div>
     {error && <Typography variant='h5'>{error}</Typography>}
     <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
     </ul>
    </>
   
  )
}

export default GameGrid