"use client";
import { useEffect, useState } from "react";
import randomWords from "random-words";

export default function Home() {
  const [wordcount, setwordcount] = useState(3);
  const [userInput, setUserInput] = useState("");
  const [wordList, setWordList] = useState([""]);

  const handleKeyDown = (event: any) => {
    if (!document.hasFocus()) {
      return;
    }

    if (event.key === "Backspace") {
      setUserInput(userInput.slice(0, -1));
    } else if (event.key === "Enter") {
      reset();
    } else if (event.key.length === 1) {
      // This check is to ensure that only printable characters are added
      if (!(event.key === " " && userInput.at(-1) == " "))
        setUserInput(userInput + event.key);
    }
  };

  const reset = () => {
    setWordList(randomWords(wordcount));
    setUserInput("");
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
    if (userInput != "" && userInput === wordList.join(" ") + " ") {
      reset();
    }
  });

  return (
    <main>
      <div>
        <h1>
          {wordList.map((word, index) => {
            return (
              <span key={index}>
                <span>
                  {word.split("").map((char, i) => {
                    if (
                      !userInput
                        .split(" ")
                        [index]?.trim()
                        .substring(i, i + 1)
                    ) {
                      if (userInput.split(" ").length <= index + 1) {
                        return (
                          <span key={i} style={{ color: "gray" }}>
                            {char}
                          </span>
                        );
                      } else {
                        return (
                          <span key={i} style={{ color: "red" }}>
                            {char}
                          </span>
                        );
                      }
                    } else if (
                      word.substring(i, i + 1) ===
                      userInput
                        .split(" ")
                        [index]?.trim()
                        .substring(i, i + 1)
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
