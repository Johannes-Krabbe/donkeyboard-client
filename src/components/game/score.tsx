import { useScore } from "@/hooks/score";
import { Heading, Box } from "@chakra-ui/react";

export function CurrentScore({ currentScore }: { currentScore: number }) {
  return (
    <>
      <Heading
        fontSize={100}
        letterSpacing={0}
        color="#444444"
        fontWeight={200}
      >
        {currentScore.toFixed(0)}
      </Heading>
    </>
  );
}

export function Highscore({ currentScore }: { currentScore: number }) {
  const { score, saveScore } = useScore();

  if (currentScore > score.highscore) {
    saveScore("highscore", currentScore);
  }

  return (
    <>
      <Box color="#858585" fontSize={20}>
        {score.highscore.toFixed(0)} WPM
      </Box>
    </>
  );
}
