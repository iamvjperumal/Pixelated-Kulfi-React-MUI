import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PixelatedLogo from "./assets/PIXELATED.png";
// import MenuIcon from '@mui/icons-material/Menu';
import Grid from "@mui/material/Grid2";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import GameGrid from "./components/GameGrid";
import GameGenreList from "./components/GameGenreList";
function App() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

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
            <img src={PixelatedLogo} width="300px" />
            {/* Pixelated Kulfi */}
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, m: 2, my: 15 }}>
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
              <ListSubheader component="div" id="nested-list-subheader">
                React Release
              </ListSubheader>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
              <GameGenreList />
            </List>
          </Grid>
          <Grid size={{ xs: 6, md: 10 }}>
            <GameGrid />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
