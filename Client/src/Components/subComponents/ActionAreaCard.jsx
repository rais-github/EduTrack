import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TopicPieChart } from "../index";
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

const topicwise = [
  {
    topic: "Artificial Intelligence",
    description:
      "Artificial Intelligence is a branch of computer science that focuses on creating intelligent machines that can perform tasks ",
  },
  {
    topic: "Web Development",
    description:
      "Web Development refers to the process of creating websites and web applications. It involves designing the user interface.",
  },
  {
    topic: "App Development",
    description:
      "App Development involves creating mobile applications for smartphones and tablets. It includes designing the user interface, implementing ",
  },
  {
    topic: "Cloud Computing",
    description:
      "Cloud Computing is a technology that allows users to access and use computing resources over the internet. It provides on-demand access to virtualized servers, store. ",
  },
  {
    topic: "Cyber Security",
    description:
      "Cyber Security focuses on protecting computer systems, networks, and data from unauthorized access, attacks, and damage. It involves implementing security.",
  },
  {
    topic: "Data Science",
    description:
      "Data Science is an interdisciplinary field that combines statistics, mathematics, and computer science to extract insights.",
  },
  {
    topic: "IoT",
    description:
      "IoT (Internet of Things) refers to the network of physical devices, vehicles, appliances, and other objects embedded",
  },
  {
    topic: "Web 3",
    description:
      "Web 3.0, also known as the Semantic Web, is the next generation of the World Wide Web that aims to make web content meaningful",
  },
  {
    topic: "Analytics",
    description:
      "Analytics involves the discovery, interpretation, and communication of meaningful patterns and insights from data.",
  },
  {
    topic: "Graphics",
    description:
      "Graphics refers to the creation, manipulation, and rendering of visual elements, such as images, animations, and interactive graphics.",
  },
];

export default function ActionAreaCard({ usedAs, topicIndex = 0, wasClicked }) {
  const [currentContinentIndex, setCurrentContinentIndex] = useState(0);
  // const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const topicImage = `https://source.unsplash.com/150x150/?${topicwise[topicIndex].topic}`;

  const handleCardClick = () => {
    if (usedAs === "topicwise") {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {usedAs === "continent" && (
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
                Recusandae, quo tempore delectus eius nesciunt nemo nostrum
                facere error minus temporibus blanditiis dicta cum accusamus
                maxime esse sint exercitationem libero mollitia porro optio
                illum itaque nihil atque iste? Enim natus saepe alias quo,
                repudiandae corporis inventore corrupti cupiditate voluptatibus
                possimus aut ipsam iure dolorem magnam est rem ullam molestiae
                unde odio. Iure tenetur quibusdam esse eligendi officia.Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Recusandae,
                quo tempore delectus eius nesciunt nemo
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
      {usedAs === "topicwise" && (
        <Card>
          <CardActionArea onClick={handleCardClick}>
            <CardMedia
              component="img"
              height="100"
              image={topicImage}
              alt={topicwise[topicIndex].topic}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {topicwise[topicIndex].topic}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {topicwise[topicIndex].description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "& .MuiPaper-root": {
            bgcolor: "rgba(255, 255, 255, 0.95)",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
            borderRadius: 8,
            transition: "all 1s ease-in-out",
            "&:hover": {
              transform: "scale(1.02)",
            },
          },
        }}
      >
        <Box sx={{ p: 4, width: "90%", maxWidth: 600 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            <TopicPieChart course={topicwise[topicIndex].topic} />
          </Typography>
          <Button
            onClick={handleCloseModal}
            variant="contained"
            color="secondary"
          >
            Close Chart
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
