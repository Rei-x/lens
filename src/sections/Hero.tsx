import { Container, Button, Text, Image } from "@nextui-org/react";
import React from "react";
import { Box } from "../components/Box";
import { Heading } from "../components/Heading";

export const Hero = () => {
  return (
    <Container
      css={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "90vh",
      }}
      id="home"
    >
      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image src="logo.png" />
        <Heading>LENS</Heading>
        <Text
          css={{
            fontSize: "$xl",
            fontWeight: "$light",
          }}
        >
          creator
        </Text>
        <Button
          color="primary"
          size="lg"
          css={{
            mt: "$12",
            fontWeight: "normal",
            borderRadius: "0",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          contact me
        </Button>
      </Box>
    </Container>
  );
};
