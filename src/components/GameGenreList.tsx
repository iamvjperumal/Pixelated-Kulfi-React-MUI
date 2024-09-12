import ListSubheader from "@mui/material/ListSubheader";
import useGamesGenres, { GameGenre } from "../hooks/useGameGenres";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { CircularProgress, Typography } from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

interface GameGenreListProps {
  onSelectGenre: (genre: GameGenre) => void;
  selectedGenre: GameGenre | null;
}
const GameGenreList = ({
  onSelectGenre,
  selectedGenre,
}: GameGenreListProps) => {
  const { data, isLoading, error } = useGamesGenres();

  return (
    <>
      <ListSubheader component="div" id="nested-list-subheader">
        Game Genres
      </ListSubheader>
      {isLoading && <CircularProgress />}
      {error && <Typography variant="h5">{error.message}</Typography>}

      {data?.results.map((gamesGenre) => (
        <ListItemButton
          selected={gamesGenre.id === selectedGenre?.id}
          onClick={() => onSelectGenre(gamesGenre)}
        >
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
