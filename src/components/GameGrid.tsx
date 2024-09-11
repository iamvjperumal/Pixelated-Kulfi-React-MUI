import {useEffect, useState} from 'react'
import apiClients from '../services/apiClients';
import { Typography } from '@mui/material';

interface Game {
    id: number,
    name: string
}

interface FetchGameResponse {
    count: number,
    results: Game[]
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
      apiClients.get<FetchGameResponse>('/games')
      .then(res => setGames(res.data.results))
      .catch(err => setError(err.message));
    })
    
    
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