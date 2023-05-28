"use client";
import { useEffect, useState } from "react";
import { CurrentScore, Highscore } from "@/components/game/score";
import { useInput } from "@/hooks/input";
import { useRandomWords } from "@/hooks/randomWords";
import { useTimer } from "@/hooks/timer";
import { Timer } from "@/components/game/time";
import { Words } from "@/components/game/words";
import { Button, useColorMode } from "@chakra-ui/react";
import { theme } from "./theme";
import Navbar from "@/components/navbar";

export default function Home() {
  const [wordcount, setWordcount] = useState(5);
  const [currentScore, setCurrentScore] = useState(0);
  const { timer, startTimer, stopTimer, resetTimer } = useTimer();
  const { wordList, resetWords } = useRandomWords({ wordcount });

  const reset = () => {
    resetWords();
    resetTimer();
  };

  const { input, clearInput } = useInput({
    onEnter: () => {
      reset();
      clearInput();
    },
    onFirstInput: () => {
      startTimer();
    },
  });

  useEffect(() => {
    if (input != "" && input === wordList.join(" ") + " ") {
      reset();
    }
  });

  useEffect(() => {
    if (input != "" && input === wordList.join(" ")) {
      stopTimer();

      // calc wpm
      const time = timer / 1000 / 60;
      console.log(time);
      setCurrentScore(wordcount / time);
    }
  }, [input, wordList, currentScore, timer, stopTimer, wordcount]);

  return (
    <main>
      <Navbar />
      <Button bg="primary">This is a button</Button>
      <Words wordList={wordList} input={input} />
      <Timer timer={timer} />
      <CurrentScore currentScore={currentScore} />
      <Highscore currentScore={currentScore} />
    </main>
  );
}
