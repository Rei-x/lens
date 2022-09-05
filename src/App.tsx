import {
  Button,
  Container,
  globalCss,
  Image,
  Input,
  Link,
  Navbar,
  Spacer,
  styled,
  Text,
  Textarea,
} from "@nextui-org/react";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import { Box } from "./components/Box";
import { Heading } from "./components/Heading";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import Portfolio from "./sections/Portfolio";

const IFrame = styled("iframe", {});
const Video = styled("video");

const cssGlobalStyles = globalCss({
  body: {
    background: "none",
  },
  html: {
    scrollBehavior: "smooth",
  },
});

function App() {
  cssGlobalStyles();
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar
        maxWidth="fluid"
        css={{
          backgroundColor: "$background",
        }}
        variant="sticky"
      >
        <Navbar.Content
          css={{
            marginLeft: "auto",
            paddingRight: "$16",
          }}
        >
          <Navbar.Link href="#home">home</Navbar.Link>
          <Navbar.Link href="#portfolio">portfolio</Navbar.Link>
          <Navbar.Link href="#contact">contact</Navbar.Link>
        </Navbar.Content>
      </Navbar>
      <Container
        fluid
        css={{
          padding: "0",
          maxWidth: "100%",
        }}
      >
        <Hero />
        <Video
          css={{
            position: "fixed",
            top: 0,
            left: 0,
            minWidth: "100%",
            minHeight: "100%",
            opacity: 0.7,
            filter: "blur(10px)",
            zIndex: "-1",
          }}
          autoPlay
          muted
          loop
          id="myVideo"
        >
          <source src="bg2.m4v" type="video/mp4" />
        </Video>
        <Portfolio />
        <Contact />
        <Text
          css={{
            background: "$background",
            textAlign: "center",
            pb: "$10",
          }}
        >
          Site made by{" "}
          <Link
            css={{
              display: "inline-block",
            }}
            target="_blank"
            href="https://github.com/rei-x"
          >
            Rei
          </Link>
        </Text>
      </Container>
    </>
  );
}

export default App;
