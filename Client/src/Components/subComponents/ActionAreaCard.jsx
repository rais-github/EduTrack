import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const continents = [
  "asia",
  "africa",
  "northamerica",
  "southamerica",
  "europe",
  "australia",
  "antarctica",
];

export default function ActionAreaCard() {
  const [currentContinentIndex, setCurrentContinentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContinentIndex(
        (prevIndex) => (prevIndex + 1) % continents.length
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const currentContinent = continents[currentContinentIndex];
  const image = `https://source.unsplash.com/700x350/?${currentContinent}`;

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={currentContinent}
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
