"use client";
import { useEffect, useState } from "react";
import { CurrentScore, Highscore } from "@/components/game/score";
import { useInput } from "@/hooks/input";
import { useRandomWords } from "@/hooks/randomWords";
import { useTimer } from "@/hooks/timer";
import { Timer } from "@/components/game/time";
import { Words } from "@/components/game/words";
import { Button, useColorMode, Box, Flex } from "@chakra-ui/react";
import { theme } from "./theme";
import Navbar from "@/components/navbar";

export default function Home() {
  const [wordcount, setWordcount] = useState(10);
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
      clearInput();
      reset();
    }
  });

  useEffect(() => {
    if (input != "" && input === wordList.join(" ")) {
      stopTimer();

      // calc wpm
      const time = timer / 1000 / 60;
      const normalizedWordCount: number = wordList.join(" ").length / 5;
      console.log(normalizedWordCount);
      setCurrentScore(normalizedWordCount / time);
    }
  }, [input, wordList, currentScore, timer, stopTimer, wordcount]);

  return (
    <main>
      <Box bg="#252525" h="100vh" w="100vw">
        <Navbar />
        <Flex justify="center" mx="calc(100vh/6.5)">
          <Box mt="calc(100vh/4.5)" w="100%">
            <Flex justify="center" mb={10} h={120}>
              {currentScore !== 0 ? (
                <CurrentScore currentScore={currentScore} />
              ) : (
                <></>
              )}
            </Flex>
            <Flex justify="center">
              <Box textAlign="justify">
                <Words wordList={wordList} input={input} />
              </Box>
            </Flex>
            <Flex justify="center" mt={12}>
              <Box bg="#363636" rounded={10} w={240} px={24} py={3}>
                <Box w="fit-content" justifyContent="center">
                  <Timer timer={timer} />
                </Box>
              </Box>
            </Flex>

            <Flex justify="center" mt={20}>
              <Box>
                <Box color="#858585" textAlign="center" mb={1}>
                  {" "}
                  Best
                </Box>
                <Highscore currentScore={currentScore} />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </main>
  );
}
