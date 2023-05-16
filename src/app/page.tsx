"use client";
import { useEffect, useState } from "react";
import randomWords from "random-words";

export default function Home() {
  const [wordcount, setwordcount] = useState(3);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [wordList, setWordList] = useState([""]);

  const handleKeyDown = (event: any) => {
    if (!document.hasFocus()) {
      return;
    }

    if (event.key === "Backspace") {
      setUserInput(userInput.slice(0, -1));
    } else if (event.key === "Enter") {
      setCurrentWordIndex(0);
      setWordList(randomWords(wordcount));
      setUserInput("");
    } else if (event.key.length === 1) {
      // This check is to ensure that only printable characters are added
      setUserInput(userInput + event.key);
    }
  };

  useEffect(() => {
    setWordList(randomWords(wordcount));
  }, [wordcount]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    if (userInput != "" && userInput.trim() === wordList[currentWordIndex]) {
      setCurrentWordIndex(currentWordIndex + 1);
      setUserInput("");
    }
  }, [userInput, currentWordIndex, wordList]);

  return (
    <main>
      <div>
        <h1>
          {wordList.map((word, index) => {
            if (index < currentWordIndex) {
              return (
                <span key={index} style={{ color: "green" }}>
                  {word + " "}
                </span>
              );
            } else if (index == currentWordIndex) {
              return (
                <span key={index}>
                  <span style={{ textDecoration: "underline" }}>{word}</span>{" "}
                </span>
              );
            }
            return word + " ";
          })}
        </h1>
      </div>
      <div>
        <h1>current input: {userInput}</h1>
      </div>
      <ul>
        <li>start typing</li>
        <li>press ENTER to reset</li>
      </ul>
    </main>
  );
}
