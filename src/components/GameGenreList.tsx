import ListSubheader from "@mui/material/ListSubheader";
import useGamesGenres from "../hooks/useGameGenres";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const GameGenreList = () => {
  const { gamesGenres, error } = useGamesGenres();

  return (
    <>
      <ListSubheader component="div" id="nested-list-subheader">
        Game Genres
      </ListSubheader>
      {gamesGenres.map((gamesGenre) => (
        <ListItemButton>
          <ListItemText primary={gamesGenre.name} />
        </ListItemButton>
      ))}
    </>
  );
};

export default GameGenreList;
