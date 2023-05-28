export function Letter({
  char,
  inputChar,
}: {
  char: string;
  inputChar: string;
}) {
  if (!inputChar) {
    return <span style={{ color: "gray" }}>{char}</span>;
  } else if (char === inputChar) {
    return <span style={{ color: "green" }}>{char}</span>;
  }
  return <span style={{ color: "red" }}>{char}</span>;
}
