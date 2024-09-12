import { useState } from "react";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
//import PixelatedLogo from "./assets/PIXELATED.png";
// import MenuIcon from '@mui/icons-material/Menu';
import Grid from "@mui/material/Grid2";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SendIcon from "@mui/icons-material/Send";
import GameGrid from "./components/GameGrid";
import GameGenreList from "./components/GameGenreList";
import { GameGenre } from "./hooks/useGameGenres";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<GameGenre | null>(null);
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> 
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, py: 1 }}>
            {/* <img src={PixelatedLogo} width="250px" /> */}
            Pixelated GamingHub
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, m: 2, my: 10 }}>
        {/* <Grid>
          <GamePlatformSelector />
        </Grid> */}
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, md: 2 }}>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Navigation
                </ListSubheader>
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Reviews" />
              </ListItemButton>

              <GameGenreList
                selectedGenre={selectedGenre}
                onSelectGenre={(genre) => setSelectedGenre(genre)}
              />
            </List>
          </Grid>
          <Grid size={{ xs: 6, md: 10 }}>
            <GameGrid selectedGenre={selectedGenre} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
