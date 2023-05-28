import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function ColorModeToggle(props: ButtonProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      aria-label="Toggle Color Mode"
      onClick={toggleColorMode}
      _focus={{ boxShadow: "none" }}
      w="fit-content"
      {...props}
    >
      {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
