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
      if (event.key != " ") {
        setUserInput(userInput + event.key);
      }
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
                <span key={index} style={{ color: "black" }}>
                  {word + " "}
                </span>
              );
            } else if (index === currentWordIndex) {
              return (
                <span key={index}>
                  <span>
                    {word.split("").map((char, i) => {
                      if (userInput.substring(i, i + 1) === "") {
                        return (
                          <span key={i} style={{ color: "gray" }}>
                            {char}
                          </span>
                        );
                      } else if (
                        word.substring(i, i + 1) ===
                        userInput.substring(i, i + 1)
                      ) {
                        return (
                          <span key={i} style={{ color: "black" }}>
                            {char}
                          </span>
                        );
                      }
                      return (
                        <span key={i} style={{ color: "red" }}>
                          {char}
                        </span>
                      );
                    })}
                  </span>{" "}
                </span>
              );
            }
            return (
              <span key={index} style={{ color: "gray" }}>
                {word + " "}
              </span>
            );
          })}
        </h1>
      </div>
      <h2>guide:</h2>
      <ul>
        <li>start typing</li>
        <li>press ENTER to reset</li>
      </ul>
    </main>
  );
}
