import ListSubheader from "@mui/material/ListSubheader";
import useGamesGenres, { GameGenre } from "../hooks/useGameGenres";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { CircularProgress, Typography } from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

interface GameGenreListProps {
  onSelectGenre: (genre: GameGenre) => void;
}
const GameGenreList = ({ onSelectGenre }: GameGenreListProps) => {
  const { data, isLoading, error } = useGamesGenres();

  return (
    <>
      <ListSubheader component="div" id="nested-list-subheader">
        Game Genres
      </ListSubheader>
      {isLoading && <CircularProgress />}
      {error && <Typography variant="h5">{error}</Typography>}

      {data.map((gamesGenre) => (
        <ListItemButton onClick={() => onSelectGenre(gamesGenre)}>
          <ListItemAvatar>
            <Avatar alt={gamesGenre.name} src={gamesGenre.image_background} />
          </ListItemAvatar>
          <ListItemText primary={gamesGenre.name} />
        </ListItemButton>
      ))}
    </>
  );
};

export default GameGenreList;
