import { Img, Box } from "@chakra-ui/react";
import { useState } from "react";
import React from "react";

export default function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseOver() {
    setIsHovered(true);
    console.log("In");
  }

  function handleMouseOut() {
    setIsHovered(false);
    console.log("Out");
  }

  return (
    <Box onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {!isHovered ? (
        <Img
          alignSelf="center"
          alt="donkeyboard logo"
          src={"assets/logo_dark_yellow.png"}
        />
      ) : (
        <Img
          alignSelf="center"
          alt="donkeyboard logo"
          src={"assets/logo_dark_rainbow.png"}
        />
      )}
    </Box>
  );
}
