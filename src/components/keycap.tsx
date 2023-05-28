import React, { useEffect, useState } from "react";
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
  const [thocc, setThocc] = useState<HTMLAudioElement | null>(null);

  function resetAudio() {
    const audio = new Audio("assets/thocc.mp3");
    audio.volume = 0.5;
    audio.playbackRate = 2;
    setThocc(audio);
  }

  useEffect(() => {
    resetAudio();
  }, []);

  return (
    <Flex
      justify="center"
      align="center"
      h={100}
      w={101}
      onMouseDown={() => {
        if (clickable) {
          thocc?.play();
          resetAudio();
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
        alt={name}
        width={clicked ? 90 : 100}
        height={clicked ? 90.2 : 101}
        draggable={false}
        style={{ transitionDuration: "80ms" }}
      />
    </Flex>
  );
}
