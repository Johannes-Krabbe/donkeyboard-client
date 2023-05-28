import React, { useState } from "react";
import { Box, Flex, Img } from "@chakra-ui/react";

interface KeycapProps {
  name: string;
  rainbow: boolean;
  clickable?: boolean;
}

export default function Keycap({
  name,
  rainbow,
  clickable = false,
}: KeycapProps) {
  const [clicked, setClicked] = useState(false);
  const thocc = new Audio("assets/thocc.mp3");

  thocc.volume = 0.5;
  thocc.playbackRate = 2;

  return (
    <Flex
      justify="center"
      align="center"
      h={100}
      w={101}
      onMouseDown={() => {
        if (clickable) {
          thocc.play();
          setClicked(true);
        }
      }}
      onMouseUp={() => {
        setClicked(false);
      }}
      onMouseOut={() => {
        setClicked(false);
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/assets/keycaps/${rainbow ? "rainbow" : "unicolor"}/${name}.png`}
        alt="Logo Keycap Letter"
        width={clicked ? 90 : 100}
        height={clicked ? 90.2 : 101}
      />
    </Flex>
  );
}
