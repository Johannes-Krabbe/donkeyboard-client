import { Box, Flex, useColorMode } from "@chakra-ui/react";
import ColorModeToggle from "./colorModeToggle";

interface NavbarProps {
  height?: 40;
}

export default function Navbar({ height }: NavbarProps) {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <Flex h={height} bg="background" direction="row-reverse">
      <Box>
        <ColorModeToggle m={5} />
      </Box>
    </Flex>
  );
}
