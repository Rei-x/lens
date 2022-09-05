import { Container, Spacer, Input, Textarea, Button } from "@nextui-org/react";
import React from "react";
import { Box } from "../components/Box";
import { Heading } from "../components/Heading";

export const Contact = () => {
  return (
    <Container
      fluid
      css={{
        textAlign: "center",
        backgroundColor: "$background",
        maxWidth: "100%",
        minHeight: "60vh",
      }}
      id="contact"
    >
      <Heading>contact</Heading>
      <Spacer y={2} />
      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "600px",
          gap: "$8",
          mx: "auto",
          textAlign: "left",
        }}
      >
        <Input label="email" width="300px" placeholder="bboy@lens.com" />
        <Textarea
          label="what's on your mind?"
          width="300px"
          placeholder="I want to get in touch with you.."
        />
        <Button
          color="gradient"
          css={{
            width: "$2",
          }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};
