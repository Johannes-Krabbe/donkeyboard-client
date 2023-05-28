import { Letter } from "./letter";

export function Words({
  wordList,
  input,
}: {
  wordList: string[];
  input: string;
}) {
  return (
    <>
      <div>
        <h1>
          <span>
            {wordList
              .join(" ")
              .split("")
              .map((char, i) => {
                return <Letter key={i} char={char} inputChar={input[i]} />;
              })}
          </span>{" "}
        </h1>
      </div>
    </>
  );
}
