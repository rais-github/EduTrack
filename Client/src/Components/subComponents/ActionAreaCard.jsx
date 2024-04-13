import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ sales = { continent: "asia" } }) {
  const image = `https://source.unsplash.com/700x350/?${sales.continent}`;
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={sales.continent}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Track the continent wise sales
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Recusandae, quo tempore delectus eius nesciunt nemo nostrum facere
            error minus temporibus blanditiis dicta cum accusamus maxime esse
            sint exercitationem libero mollitia porro optio illum itaque nihil
            atque iste? Enim natus saepe alias quo, repudiandae corporis
            inventore corrupti cupiditate voluptatibus possimus aut ipsam iure
            dolorem magnam est rem ullam molestiae unde odio. Iure tenetur
            quibusdam esse eligendi officia.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Recusandae, quo tempore delectus eius
            nesciunt nemo
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
