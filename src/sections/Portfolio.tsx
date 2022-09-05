import { Container } from "@nextui-org/react";
import React from "react";
import PhotoAlbum from "react-photo-album";
import { Heading } from "../components/Heading";
import { photos } from "../photos";

const Portfolio = () => {
  return (
    <Container
      fluid
      css={{
        textAlign: "center",
        backgroundColor: "$background",
        maxWidth: "100%",
        minHeight: "90vh",
        py: "$18",
      }}
      id="portfolio"
    >
      <Heading
        css={{
          mb: "$18",
        }}
      >
        portfolio
      </Heading>
      <Container>
        <PhotoAlbum
          photos={photos}
          layout="masonry"
          renderPhoto={(photo) => {
            if (photo.photo.src.endsWith(".jpg")) {
              return photo.renderDefaultPhoto();
            }

            return (
              <video autoPlay loop muted style={photo.wrapperStyle}>
                <source src={photo.photo.src} type="video/mp4" />
              </video>
            );
          }}
        />
      </Container>
    </Container>
  );
};

export default Portfolio;
