import { Img, Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Keycap from "./keycap";

export default function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }

  return (
    <Flex onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {Array.from(Array(11)).map((_v, i) => {
        return (
          <Box key={i + 1} mx={0.5}>
            <Keycap name={(i + 1).toString()} rainbow={isHovered} clickable />
          </Box>
        );
      })}
    </Flex>
  );
}
