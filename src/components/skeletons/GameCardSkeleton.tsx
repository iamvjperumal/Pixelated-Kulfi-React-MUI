import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton animation="wave" variant="rectangular" height={300} />
      <CardContent>
        <Skeleton animation="wave" variant="rectangular" height={40} />
      </CardContent>
    </Card>
  );
};

export default GameCardSkeleton;
