import { Game } from "../hooks/useGames";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import GamePlatformList from "./GamePlatformList";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 300 }}
        image={game.background_image}
        title={game.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {game.name}
        </Typography>
        <GamePlatformList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardContent>
    </Card>
  );
};

export default GameCard;
