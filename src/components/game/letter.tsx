import { theme } from "@/app/theme";

export function Letter({
  char,
  inputChar,
}: {
  char: string;
  inputChar: string;
}) {
  if (!inputChar) {
    return (
      <span style={{ color: theme.colors.gametext_neutral, fontSize: 40 }}>
        {char}
      </span>
    );
  } else if (char === inputChar) {
    return (
      <span style={{ color: theme.colors.gametext_corrent, fontSize: 40 }}>
        {char}
      </span>
    );
  }
  return (
    <span style={{ color: theme.colors.gametext_wrong, fontSize: 40 }}>
      {char}
    </span>
  );
}
