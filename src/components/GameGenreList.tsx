import ListSubheader from "@mui/material/ListSubheader";
import useGamesGenres from "../hooks/useGameGenres";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";

const GameGenreList = () => {
  const { data, error } = useGamesGenres();

  return (
    <>
      {error && <Typography variant="h5">{error}</Typography>}
      <ListSubheader component="div" id="nested-list-subheader">
        Game Genres
      </ListSubheader>
      {data.map((gamesGenre) => (
        <ListItemButton>
          <ListItemText primary={gamesGenre.name} />
        </ListItemButton>
      ))}
    </>
  );
};

export default GameGenreList;
