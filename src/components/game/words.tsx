import { Letter } from "./letter";
import { Box, Wrap } from "@chakra-ui/react";

export function Words({
  wordList,
  input,
}: {
  wordList: string[];
  input: string;
}) {
  return (
    <>
      <Box>
        {wordList
          .join(" ")
          .split("")
          .map((char, i) => {
            return <Letter key={i} char={char} inputChar={input[i]} />;
          })}
      </Box>{" "}
    </>
  );
}
