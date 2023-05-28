import { useScore } from "@/hooks/score";

export function CurrentScore({ currentScore }: { currentScore: number }) {
  return (
    <>
      <h2>Current Score: {currentScore.toFixed(1)} WPM</h2>
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
      <h2>Highscore: {score.highscore.toFixed(1)} WPM</h2>
    </>
  );
}
