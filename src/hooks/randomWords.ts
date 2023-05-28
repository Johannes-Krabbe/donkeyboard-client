import { useEffect, useState } from "react";

import randomWords from "random-words";

export const useRandomWords = (options: { wordcount: number }) => {
  const [wordList, setWordList] = useState<string[]>([""]);

  useEffect(() => {
    setWordList(randomWords(options.wordcount));
  }, [setWordList, options.wordcount]);

  const resetWords = () => {
    setWordList(randomWords(options.wordcount));
  };

  return {
    wordList,
    resetWords,
  };
};
