import { useEffect, useState } from "react";

interface scoreStorage {
  highscore: number;
}

export const useScore = () => {
  const storageKey = "donkey-score";

  const [score, setScore] = useState<scoreStorage>({ highscore: 0 });

  useEffect(() => {
    setScore(
      JSON.parse(localStorage.getItem(storageKey) ?? `{"highscore": 0 }`)
    );
  }, []);

  const saveScore = (key: keyof scoreStorage, value: number) => {
    const tmpScore = score;
    tmpScore[key] = value;
    localStorage.setItem(storageKey, JSON.stringify(score));
  };

  return {
    score,
    saveScore,
  };
};
